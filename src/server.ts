import Express from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import _ from 'lodash';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import session from 'express-session';
import { DeceasedResolver } from './resolver/deceased';
import { FuneralResolver } from './resolver/funeral';
import { authChecker } from './auth/filter';
import { Account, AccountModel } from './entities/auth';
import jwt from 'jsonwebtoken'
import { AuthResolver } from './resolver/auth';
import cookieParser from 'cookie-parser';
import { DecodedToken } from './types';
import { Context } from './types';

dotenv.config();

const { PORT, MONGOATLASUSERNAME, MONGOATLASPASSWORD, MONGOATLASDBNAME, SESSION_SECRET, ENVIRONMENT } = process.env;

const main = async () => {
    // create the express server
    const app = Express();

    // generate the GraphQL schema
    const schema = await buildSchema({
        // specify all resolvers in the app, we should automate this to find all resolver classes automagically
        resolvers: [DeceasedResolver, FuneralResolver, AuthResolver],
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
            const token = req.cookies.authorization;
            const decodedToken = (token && jwt.decode(token) as DecodedToken);
            return {
                // include original Request and Response objects
                req,
                res,
                // include the decoded token
                decodedToken,
                // include functions to log a user in and out, which can be used in resolvers through the Context object
                login: (account: Account) => res.cookie('authorization', account.generateJWT()),
                logout: () => res.cookie('authorization', null)
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
        console.log('Apollo Server on http://localhost:8000/graphql');
    });
}

main().catch((error) => {
    console.log(error, 'error');
})