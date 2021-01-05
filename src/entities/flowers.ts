import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Flowers object' })
export class Flowers {

    @Field({ nullable: true })
    @Property()
    supplier?: string;

    @Field({ nullable: true })
    @Property()
    formatting?: string;

    @Field({ nullable: true })
    @Property()
    textOnLint1?: string;

    @Field({ nullable: true })
    @Property()
    textOnLint2?: string;

    @Field({ nullable: true })
    @Property()
    colorOnLint?: string;

    @Field({ nullable: true })
    @Property()
    costFlower?: number;

    @Field(() => Date, { nullable: true })
    @Property()
    deliveryDate?: Date;

    @Field(() => Date, { nullable: true })
    @Property()
    finalTime?: Date;

    @Field({ nullable: true })
    @Property()
    totalCost?: number;

    @Field({ nullable: true })
    @Property()
    deliveryLocation?: string;

    @Field({ nullable: true })
    @Property()
    postalCode?: string;

    @Field({ nullable: true })
    @Property()
    location?: string;
}
