import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The layOut model' })
export class LayOut {

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
    town?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    startingDate?: Date;

    @Field(() => Date, { nullable: true })
    @Property()
    endDate?: Date;

    @Field({ nullable: true })
    @Property()
    wayOfLayout?: string;

    @Field({ nullable: true })
    @Property()
    typeOfLayOut?: string;

    @Field({ nullable: true })
    @Property()
    cascetClosed?: string;

    @Field({ nullable: true })
    @Property()
    jewellery?: string;

    @Field({ nullable: true })
    @Property()
    broughtBy?: string;

}
