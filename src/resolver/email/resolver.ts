import { OAuth2Client } from 'google-auth-library';
import { Resolver, Query, Arg, Mutation, Authorized, Ctx } from 'type-graphql';
import { Email, EmailList } from '../../entities/email';
import { google } from "googleapis";
import { Context } from '../../types';
import { AccountModel } from '../../entities/auth';
import { RoleType } from '../../auth/filter';
import { EmailInput } from './input';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../../server';

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const GMAIL_AUTH_WEBHOOK_URL = 'http://localhost:8000/gmail-webhook';

@Resolver(_of => Email)
export class EmailResolver {

    @Authorized<RoleType>([RoleType.EMAIL])
    @Query(_returns => EmailList)
    async emails(@Ctx() context: Context, @Arg('input') input: EmailInput): Promise<EmailList> {
        const user = await AccountModel.findById(context.decodedToken.id);

        const oauth2Client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GMAIL_AUTH_WEBHOOK_URL);
        
        oauth2Client.setCredentials(JSON.parse(user.gmailCode));
        
        const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
        
        const labelIds = input.labels.length > 0 ? input.labels : undefined;

        const request = await gmail.users.messages.list({ userId: 'me', labelIds, q: input.query });        

        const emails = request.data.messages.map(async ({ id }) => {
            const message = (
                await gmail.users.messages.get({
                    userId: 'me',
                    id
                })
            ).data;
            return new Email().populateFromGmail(message);
        });

        return new Promise((resolve, reject) => {

            const list = new EmailList(emails.length, input.page, input.query);

            let index = 0;
            const resolveEmail = () => {
                if (index >= emails.length) {
                    resolve(list);
                } else {
                    emails[index].then(resolvedEmail => {
                        list.emails.push(resolvedEmail);
                        index++;
                        resolveEmail();
                    }).catch(err => reject(err));
                }
            }

            resolveEmail()
        });
    }

    @Authorized()
    @Mutation(_returns => String, { nullable: true })
    async authorizeGoogleForEmail(@Ctx() context: Context, @Arg('redirectUri') redirectFrontend: string): Promise<string> {
        const oauth2Client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GMAIL_AUTH_WEBHOOK_URL);
        const state = {
            redirectFrontend,
            id: context.decodedToken.id
        };
        const authUrl = oauth2Client.generateAuthUrl({
            access_type: "offline",
            scope: SCOPES,
            state: encodeURI(JSON.stringify(state)),
            redirect_uri: GMAIL_AUTH_WEBHOOK_URL
        });
        return authUrl;
    }

}