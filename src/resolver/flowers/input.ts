import { InputType, Field } from "type-graphql";

@InputType({ description: "Flowers object" })
export class PersistFlowersInput {

    @Field({ nullable: true })
    supplier?: string;

    @Field({ nullable: true })
    formatting?: string;

    @Field({ nullable: true })
    textOnLint1?: string;

    @Field({ nullable: true })
    textOnLint2?: string;

    @Field({ nullable: true })
    colorOnLint?: string;

    @Field({ nullable: true })
    costFlower?: number;

    @Field(() => Date, { nullable: true })
    deliveryDate?: Date;

    @Field(() => Date, { nullable: true })
    finalTime?: Date;

    @Field({ nullable: true })
    totalCost?: number;

    @Field({ nullable: true })
    deliveryLocation?: string;

    @Field({ nullable: true })
    postalCode?: string;

    @Field({ nullable: true })
    location?: string;
}