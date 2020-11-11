import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Church service/Farewell service' })
export class Farewell {

    @Field({ nullable: true })
    @Property()
    pastor?: string;

    @Field({ nullable: true })
    @Property()
    location?: string;

    @Field({ nullable: true })
    @Property()
    address?: string;

    @Field({ nullable: true })
    @Property()
    postalCode?: string;

    @Field({ nullable: true })
    @Property()
    place?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field({ nullable: true })
    @Property()
    startTime?: string;

    @Field({ nullable: true })
    @Property()
    carrying?: string;

    @Field({ nullable: true })
    @Property()
    numberOfCarriers?: string;

    @Field({ nullable: true })
    @Property()
    parkingSpaces?: string;

    @Field({ nullable: true })
    @Property()
    details?: string;
}
