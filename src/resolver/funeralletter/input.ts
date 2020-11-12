import { InputType, Field } from 'type-graphql';

@InputType({ description: 'Funeral letter' })
export class PersistFuneralLetterInput {

    @Field({ nullable: true })
    type?: string;

    @Field({ nullable: true })
    total?: string;

    @Field({ nullable: true })
    numberOfPorti?: string;

    @Field({ nullable: true })
    numberOfShipments?: string;

    @Field({ nullable: true })
    details?: string;
}
