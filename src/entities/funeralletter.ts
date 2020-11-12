import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Funeral letter' })
export class FuneralLetter {

    @Field({ nullable: true })
    @Property()
    type?: string;

    @Field({ nullable: true })
    @Property()
    total?: string;

    @Field({ nullable: true })
    @Property()
    numberOfPorti?: string;

    @Field({ nullable: true })
    @Property()
    numberOfShipments?: string;

    @Field({ nullable: true })
    @Property()
    details?: string;

}
