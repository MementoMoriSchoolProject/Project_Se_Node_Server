import { OAuth2Client } from 'google-auth-library';
import { Resolver, Query, Arg, Mutation, Authorized, Ctx } from 'type-graphql';
import { Email, EmailList } from '../../entities/email';
import { web } from "../../oauth2.json"
import { google } from "googleapis";
import { Context } from '../../types';
import { AccountModel } from '../../entities/auth';
import { RoleType } from '../../auth/filter';
import { EmailInput } from './input';

const CLIENT_SECRET = web.client_secret;
const CLIENT_ID = web.client_id;
const REDIRECT_URL = web.redirect_uris[0];
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const GMAIL_AUTH_WEBHOOK_URL = 'http://localhost:8000/gmail-webhook';

@Resolver(_of => Email)
export class EmailResolver {

    @Authorized<RoleType>([RoleType.EMAIL])
    @Query(_returns => EmailList)
    async emails(@Ctx() context: Context, @Arg('input') input: EmailInput): Promise<EmailList> {
        const user = await AccountModel.findById(context.decodedToken.id);

        const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

        const { tokens } = await oauth2Client.getToken(user.gmailCode);
        oauth2Client.setCredentials(tokens);
    
        const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
    
        // TODO: Finish pagination, total amount should be sent to the frontend too etc
        const request = await gmail.users.messages.list({ userId: 'me', labelIds: input.labels, q: input.query });
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
            const list = new EmailList(emails.length, page);
            emails.forEach(email => {
                email
                    .then(resolvedEmail => list.emails.push(resolvedEmail))
                    .catch(error => reject(error))
            })
            resolve(list);
        })
    }

    @Authorized()
    @Mutation(_returns => String, { nullable: true })
    async authorizeGoogleForEmail(@Arg('redirectUri') redirectFrontend: string): Promise<String> {
        const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
        const authUrl = oauth2Client.generateAuthUrl({
            scope: SCOPES,
            redirect_uri: `${GMAIL_AUTH_WEBHOOK_URL}?redirect=${encodeURI(redirectFrontend)}`
        });
        return authUrl;
    }

}