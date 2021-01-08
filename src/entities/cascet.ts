import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Cascet object' })
export class Cascet {

    @Field({ nullable: true })
    @Property()
    model?: string;

    @Field({ nullable: true })
    @Property()
    length?: string;

    @Field({ nullable: true })
    @Property()
    width?: string;

    @Field({ nullable: true })
    @Property()
    cross?: string;
}
