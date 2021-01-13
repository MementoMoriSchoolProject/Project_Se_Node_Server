import fs from "fs";
import readline from "readline";
import { promisify } from "util";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library"
import { web } from "../oauth2.json"
import { GaxiosPromise } from "googleapis/build/src/apis/ml";
import req from "express/lib/request";

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
    const clientSecret = web.client_secret;
    const clientId = web.client_id;
    const redirectUrl = web.redirect_uris[0];
    const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUrl);

    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });

    console.log('Authorize this app by visiting this url: ', authUrl);
};

export const googleAuthWithToken = async (code: string) => {
    console.log(code)

    const clientSecret = web.client_secret;
    const clientId = web.client_id;
    const redirectUrl = web.redirect_uris[0];
    const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUrl);

    // const gmailGetMessagesAsync = promisify(gmail.users.messages.get);
    // const gmailListMessagesAsync = promisify(gmail.users.messages.list);

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens)

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    var request = gmail.users.messages.list({ userId: 'me' });

    request.then(ret => {
        let id = ret.data.messages[0].id;

        var req = gmail.users.messages.get({
            userId: 'me',
            id: id,
        })

        req.then(ret2 => {
            let msg = ret2.data.payload.body.data;
            console.log(ret2)
            let buff = Buffer.from(msg, 'base64').toString('ascii');
            let text = buff;
            console.log(text)
        })
    })




    // const newestMessageId = res["data"]["messages"][0]["id"];
    // // Retreive the actual message using the message id
    // res = await gmailGetMessagesAsync({
    //     auth: oauth2Client,
    //     userId: "me",
    //     id: newestMessageId,
    // });
    // let body_content = JSON.stringify(res.data.payload.body.data);
    // let data, buff, text;
    // data = body_content;
    // buff = new Buffer.from(data, "base64");
    // mailBody = buff.toString();
    // // display the result
    // console.log(mailBody);
};