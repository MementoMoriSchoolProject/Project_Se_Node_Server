import { InputType, Field } from 'type-graphql';

@InputType({ description: 'Church service/Farewell service' })
export class PersistFarewellServiceInput {

    @Field({ nullable: true })
    pastor?: string;

    @Field({ nullable: true })
    location?: string;

    @Field({ nullable: true })
    address?: string;

    @Field({ nullable: true })
    postalCode?: string;

    @Field({ nullable: true })
    place?: string;

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field({ nullable: true })
    startTime?: string;

    @Field({ nullable: true })
    carrying?: string;

    @Field({ nullable: true })
    numberOfCarriers?: string;

    @Field({ nullable: true })
    parkingSpaces?: string;

    @Field({ nullable: true })
    details?: string;
}
