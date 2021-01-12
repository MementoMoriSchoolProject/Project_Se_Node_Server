import { InputType, Field } from "type-graphql";

@InputType({description: "CoffeeRoom object"})
export class PersistCoffeeRoomInput {
    @Field({ nullable: true })
    usagecoffeeroom?: string;

    @Field({ nullable: true })
    locationelsewhere?: string;

    @Field({ nullable: true })
    addresselsewhere?: string;

    @Field({ nullable: true })
    postalelsewhere?: string;

    @Field({ nullable: true })
    placeelsewhere?: string;

    @Field(() => Date, { nullable: true })
    time?: Date;

    @Field({ nullable: true })
    extratime?: number;

    @Field({ nullable: true })
    amountpersons?: number;

    @Field({ nullable: true })
    amountreservations?: number;

    @Field(() => Date, { nullable: true })
    departuretime?: Date;

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field({ nullable: true })
    particularities?: string;
}