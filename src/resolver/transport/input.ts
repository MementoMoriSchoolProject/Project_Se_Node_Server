import { InputType, Field } from "type-graphql";

@InputType({description: "Transport object"})
export class PersistTransportInput {

    @Field({ nullable: true })
    hearse?: string;

    @Field({ nullable: true })
    hearsecolor?: string;

    @Field({ nullable: true })
    numberoffollowcars?: string;

    @Field({ nullable: true })
    numberoffollowcarscolor?: string;

    @Field({ nullable: true })
    numberofflowercars?: string;

    @Field({ nullable: true })
    numberofflowercarscolor?: string;
}