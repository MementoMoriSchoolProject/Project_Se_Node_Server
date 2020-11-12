import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The nightguard model' })
export class Nightguard {

    @Field({ nullable: true })
    @Property()
    location?: string;

    @Field({ nullable: true })
    @Property()
    predecessor?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field(() => Date, { nullable: true })
    @Property()
    time?: Date;

    @Field({ nullable: true })
    @Property()
    specialNeeds?: string;

}
