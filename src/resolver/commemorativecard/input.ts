import { InputType, Field } from 'type-graphql';

@InputType({ description: 'Commemorative Cards' })
export class PersistCommemorativeCardInput {

    @Field({ nullable: true })
    type?: string;

    @Field({ nullable: true })
    total?: string;

    @Field({ nullable: true })
    details?: string;

}
