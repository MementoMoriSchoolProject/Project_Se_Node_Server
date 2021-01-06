import { InputType, Field } from "type-graphql";

@InputType({description: "Advertisement object"})
export class PersistAdvertisementInput {

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    columns?: string;

    @Field({ nullable: true })
    detailswishes?: string;

    @Field({ nullable: true })
    edition?: string;

    @Field(() => Date, { nullable: true })
    placementdate?: Date;
}