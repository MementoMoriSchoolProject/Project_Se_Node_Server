import { get } from "lodash";
import { AuthChecker } from "type-graphql";
import { Account, AccountModel } from "../entities/auth";
import { Context } from "../types";

export enum RoleType {
    EMAIL
}

export const authChecker: AuthChecker<Context, RoleType> = async (
    { context },
    // these are roles that are specified on an @Authorized() decorator, to only give certain people access
    roles
) => {
    // get id from token
    const userId = get(context.decodedToken, 'id', null);
    // find related user
    const user = userId && await AccountModel.findById(userId);
    if (user.currentToken === context.token) {
        // if user is not null, they're authenticated
        // perhaps later we will check whether or not the given roles apply to this user
        if (roles.length > 0) {
            for (const role of roles) {
                switch (role) {
                    case RoleType.EMAIL:
                        if (!user.gmailCode) {
                            return false;
                        }
                        break;
                    default: break;
                }
            }
        }

        return !!user;
    }
    return false;
}