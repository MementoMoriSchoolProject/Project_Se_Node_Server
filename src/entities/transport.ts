import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The transport model' })
export class Transport {

    @Field({ nullable: true })
    @Property()
    hearse?: string;

    @Field({ nullable: true })
    @Property()
    hearsecolor?: string;

    @Field({ nullable: true })
    @Property()
    numberoffollowcars?: string;

    @Field({ nullable: true })
    @Property()
    numberoffollowcarscolor?: string;

    @Field({ nullable: true })
    @Property()
    numberofflowercars?: string;

    @Field({ nullable: true })
    @Property()
    numberofflowercarscolor?: string;
}
