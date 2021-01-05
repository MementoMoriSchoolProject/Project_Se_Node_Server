import { InputType, Field } from "type-graphql";

@InputType({description: "Driving info funeral car object"})
export class PersistDrivingInfoFuneralCarInput {

    @Field({ nullable: true })
    from?: string;

    @Field({ nullable: true })
    departuretime?: string;

    @Field({ nullable: true })
    to?: string;

    @Field({ nullable: true })
    arrivaltime?: string;

    @Field({ nullable: true })
    specialroute?: string;

    @Field({ nullable: true })
    details?: string;

}