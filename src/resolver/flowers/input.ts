import { InputType, Field, ObjectType } from "type-graphql";
import { prop as Property } from '@typegoose/typegoose';

@InputType({ description: "Sub Flowers Object" })
class SubFlowersInput {
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
}

@InputType({ description: "Complete Flowers object" })
export class PersistFlowersInput {

    @Field({ nullable: true })
    supplier?: string;

    @Field(() => [SubFlowersInput], { nullable: true })
    @Property({ type: [SubFlowersInput] })
    flowers?: SubFlowersInput[];

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