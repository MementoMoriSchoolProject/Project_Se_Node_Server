import fs from "fs";
import readline from "readline";
import { promisify } from "util";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const rlQuestionAsync = promisify(rl.question);

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const TOKEN_DIR = __dirname;
const TOKEN_PATH = TOKEN_DIR + '/gmail-nodejs-quickstart.json';

export const googleAuth = async () => {
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***

    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });

    console.log('Authorize this app by visiting this url: ', authUrl);

    rl.question('Enter the code from that page here: ', (code: string) => {
        rl.close();

        oauth2Client.getToken(code, async (err, token) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.log('Error while trying to retrieve access token', err);
                return;
            }
            oauth2Client.credentials = token!;

            try {
                fs.mkdirSync(TOKEN_DIR);
                // eslint-disable-next-line no-shadow
            } catch (err) {
                if (err.code !== 'EEXIST') throw err;
            }

            await writeFileAsync(TOKEN_PATH, JSON.stringify(token));
            // eslint-disable-next-line no-console
            console.log(`Token stored to ${TOKEN_PATH}`);
        });
    });
};