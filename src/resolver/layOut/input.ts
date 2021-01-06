
import { Field, InputType } from 'type-graphql';

@InputType({ description: 'LayOut object' })
export class PersistLayOutInput {

    @Field({ nullable: true })
    location?: string;

    @Field({ nullable: true })
    address?: string;

    @Field({ nullable: true })
    postalCode?: string;

    @Field({ nullable: true })
    town?: string;

    @Field(() => Date, { nullable: true })
    startingDate?: Date;

    @Field(() => Date, { nullable: true })
    endDate?: Date;

    @Field({ nullable: true })
    wayOfLayout?: string;

    @Field({ nullable: true })
    typeOfLayOut?: string;

    @Field({ nullable: true })
    cascetClosed?: string;

    @Field({ nullable: true })
    jewellery?: string;

    @Field({ nullable: true })
    broughtBy?: string;
}
