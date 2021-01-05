import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The advertisement model' })
export class Advertisement {

    @Field({ nullable: true })
    @Property()
    name?: string;

    @Field({ nullable: true })
    @Property()
    columns?: string;

    @Field({ nullable: true })
    @Property()
    detailswishes?: string;

    @Field({ nullable: true })
    @Property()
    edition?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    placementdate?: Date;
}
