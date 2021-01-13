import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library"
import { web } from "../oauth2.json"
import { omit } from "lodash";

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const TOKEN_DIR = __dirname;
const TOKEN_PATH = TOKEN_DIR + '/gmail-nodejs-quickstart.json';

const CLIENT_SECRET = web.client_secret;
const CLIENT_ID = web.client_id;
const REDIRECT_URL = web.redirect_uris[0];

export const googleAuth = async () => {
    const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

    const authUrl = oauth2Client.generateAuthUrl({
        // access_type: 'offline',
        scope: SCOPES
    });

    console.log('Authorize this app by visiting this url: ', authUrl);
};

export const googleAuthWithToken = async (code: string) => {
    const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens)

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const request = await gmail.users.messages.list({ userId: 'me', maxResults: 1 });

    console.log('Messages:')
    request.data.messages.forEach(async ({ id }) => {
        const message = await gmail.users.messages.get({
            userId: 'me',
            id
        });
        console.log(JSON.stringify(message.data.payload))
    });
};