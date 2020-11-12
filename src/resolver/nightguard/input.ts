import { InputType, Field } from "type-graphql";

@InputType({ description: "Nightguard object" })
export class PersistNightguardInput {

    @Field({ nullable: true })
    location?: string;

    @Field({ nullable: true })
    predecessor?: string;

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field(() => Date, { nullable: true })
    time?: Date;

    @Field({ nullable: true })
    specialNeeds?: string;
}