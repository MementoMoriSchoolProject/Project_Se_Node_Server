import Express from 'express';
import { buildSchema, Mutation } from 'type-graphql';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';
import _ from 'lodash';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import session from 'express-session';
import { authChecker } from './auth/filter';
import jwt from 'jsonwebtoken'
import { AuthResolver } from './resolver/auth';
import cookieParser from 'cookie-parser';
import { DecodedToken } from './types';
import { FuneralResolver } from './resolver/funeral';
import { DeceasedResolver } from './resolver/deceased';
import { CircumstancesResolver } from './resolver/circumstances';
import { ClientResolver } from './resolver/client'
import { VisitingResolver } from './resolver/visiting'
import { FinalCareResolver } from './resolver/finalcare';
import { TransmissionsResolver } from './resolver/transmission';
import { InsurancesResolver } from './resolver/insurance';
import { FarewellResolver } from './resolver/farewell';
import { FuneralLetterResolver } from './resolver/funeralletter';
import { CommemorativeCardResolver } from './resolver/commemorativecard';
import { CeremonyResolver } from './resolver/ceremony';
import { BuryCremationResolver } from './resolver/buryCremation/resolver';
import { NightguardResolver } from './resolver/nightguard';
import { AppointmentResolver } from './resolver/appointments';
import { TransportResolver } from './resolver/transport';
import { DrivingInfoFuneralCarResolver } from './resolver/drivinginfofuneralcar';
import { DrivingInfoFollowingCarResolver } from './resolver/drivinginfofollowingcar';
import { CascetResolver } from './resolver/cascet';
import { AdvertisementResolver } from './resolver/advertisement';
import { LayoutResolver } from './resolver/layOut';
import { FlowersResolver } from './resolver/flowers';
import { AudioVideoResolver } from './resolver/audiovideo';
import { EmailResolver } from './resolver/email/resolver';
import { AccountModel } from './entities/auth';
import { OAuth2Client } from 'google-auth-library';

dotenv.config();

export const {
    PORT,
    MONGOATLASUSERNAME,
    MONGOATLASPASSWORD,
    MONGOATLASDBNAME,
    SESSION_SECRET,
    ENVIRONMENT,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID,
} = process.env;
const GMAIL_AUTH_WEBHOOK_URL = 'http://localhost:8000/gmail-webhook';

const main = async () => {
    // create the express server
    const app = Express();

    // generate the GraphQL schema
    const schema = await buildSchema({
        // specify all resolvers in the app, we should automate this to find all resolver classes automagically
        resolvers: [
            AuthResolver,
            FuneralResolver,
            DeceasedResolver,
            CircumstancesResolver,
            ClientResolver,
            VisitingResolver,
            FinalCareResolver,
            TransmissionsResolver,
            InsurancesResolver,
            FarewellResolver,
            FuneralLetterResolver,
            CommemorativeCardResolver,
            CeremonyResolver,
            BuryCremationResolver,
            NightguardResolver,
            AppointmentResolver,
            TransportResolver,
            DrivingInfoFuneralCarResolver,
            DrivingInfoFollowingCarResolver,
            CascetResolver,
            AdvertisementResolver,
            LayoutResolver,
            FlowersResolver,
            AudioVideoResolver,
            EmailResolver
        ],
        // create a .gql schema file
        emitSchemaFile: true,
        // we don't need class validators
        validate: false,
        // use a custom auth filter to prevent unauthorized access
        authChecker,
    });

    // initialize the session package
    app.use(session({
        // specify session secret, retrieved from env variables
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            // assure cookies only go over HTTPS when not in development
            secure: ENVIRONMENT !== 'development'
        },
    }));

    // initialize the cookie parser so that we can actually use cookies
    app.use(cookieParser())

    // create the apollo server, the framework that makes everything do what it does
    const server = new ApolloServer({
        // pass the schema we generated
        schema,
        // create the context for a request
        context: ({ req, res }) => {
            // find the authorization cookie, and decode it if it exists. This way, the auth filter can work with it and find the associated user
            const token = req.headers.authorization?.substring('Bearer '.length);
            const decodedToken = (token && jwt.decode(token) as DecodedToken);
            return {
                // include original Request and Response objects
                req,
                res,
                token,
                // include the decoded token
                decodedToken
            };
        }
    });

    // set up the database connection pool
    await mongoose.connect(
        `mongodb+srv://${MONGOATLASUSERNAME}:${MONGOATLASPASSWORD}@funeralprojectse.yhwkt.mongodb.net/${MONGOATLASDBNAME}?retryWrites=true&w=majority`,
        {
            useFindAndModify: false,
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    );
    // apply the middleware of our Apollo server to the Express app
    // @ts-ignore
    server.applyMiddleware({ app });

    // setup standard cors restrictions
    app.use(cors());

    // fire up the server
    app.listen({ port: PORT }, () => {
        console.log(`Apollo Server on http://localhost:${PORT}/graphql`);
    });

    // webhook for google return uri
    app.get('/gmail-webhook', async (req: any, res: any) => {
        const code = req.query.code;
        const state = JSON.parse(decodeURI(req.query.state));

        const user = await AccountModel.findById(state.id);

        const client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GMAIL_AUTH_WEBHOOK_URL);
        const { tokens } = await client.getToken(code);

        if (code && user) {
            await AccountModel.updateOne(
                { _id: state.id },
                { gmailCode: JSON.stringify(tokens) }
            )
            res.redirect(state.redirectFrontend)
        } else {
            res.send(404).json("no code found")
        };
    });
}

main().catch((error) => {
    console.log(error, 'error');
})
