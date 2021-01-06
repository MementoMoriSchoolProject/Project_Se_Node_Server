import { ObjectType, Field, InputType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@InputType({ description: 'Cascet object' })
export class PersistCascetInput {

    @Field({ nullable: true })
    model?: string;

    @Field({ nullable: true })
    length?: string;

    @Field({ nullable: true })
    width?: string;

    @Field({ nullable: true })
    cross?: string;

}