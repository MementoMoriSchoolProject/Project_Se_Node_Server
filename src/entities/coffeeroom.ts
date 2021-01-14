import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The coffeeroom model' })
export class CoffeeRoom {
    @Field({ nullable: true })
    @Property()
    usagecoffeeroom?: string;

    @Field({ nullable: true })
    @Property()
    locationelsewhere?: string;

    @Field({ nullable: true })
    @Property()
    addresselsewhere?: string;

    @Field({ nullable: true })
    @Property()
    postalelsewhere?: string;

    @Field({ nullable: true })
    @Property()
    placeelsewhere?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    time?: Date;

    @Field({ nullable: true })
    @Property()
    extratime?: number;

    @Field({ nullable: true })
    @Property()
    amountpersons?: number;

    @Field({ nullable: true })
    @Property()
    amountreservations?: number;

    @Field(() => Date, { nullable: true })
    @Property()
    departuretime?: Date;

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field({ nullable: true })
    @Property()
    particularities?: string;
}
