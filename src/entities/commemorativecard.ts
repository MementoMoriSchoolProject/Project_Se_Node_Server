import { InputType, Field, ObjectType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Commemorative Card' })
export class CommemorativeCard {

    @Field({ nullable: true })
    @Property()
    type?: string;

    @Field({ nullable: true })
    @Property()
    total?: string;

    @Field({ nullable: true })
    @Property()
    details?: string;

}
