import { InputType, Field } from "type-graphql";

@InputType({description: "Driving info following car object"})
export class PersistDrivingInfoFollowingCarInput {

    @Field({ nullable: true })
    from?: string;

    @Field({ nullable: true })
    departuretime?: string;

    @Field({ nullable: true })
    address?: string;

    @Field({ nullable: true })
    postalcode?: string;

    @Field({ nullable: true })
    hometown?: string;

    @Field({ nullable: true })
    to?: string;

    @Field({ nullable: true })
    arrivaltime?: string;

    @Field({ nullable: true })
    specialroute?: string;

    @Field({ nullable: true })
    details?: string;
}