import { InputType, Field } from 'type-graphql';
import { BuryCremationEnum } from '../../entities/buryCremation'

@InputType({ description: 'buryCremation input' })
export class PersistBuryCremationInput {

    @Field({ nullable: true })
    buryCremation?: BuryCremationEnum;

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field(() => Date, { nullable: true })
    timeOfArrival?: Date;

    @Field({ nullable: true })
    namePlace?: string;

    @Field({ nullable: true })
    address?: string;

    @Field({ nullable: true })
    postalCode?: string;

    @Field({ nullable: true })
    location?: string;

    @Field({ nullable: true })
    speakerOrder?: string;

    @Field({ nullable: true })
    specialNeeds?: string;

    // start of cremation
    @Field({ nullable: true })
    cascetView?: string;

    @Field({ nullable: true })
    insertion?: string;

    @Field({ nullable: true })
    ashesDestination?: string;
    // end of cremation

    // start of bury
    @Field({ nullable: true })
    kindOfGrave?: string;

    @Field({ nullable: true })
    existingGrave?: string;

    @Field({ nullable: true })
    sectionNumber?: string;

    @Field({ nullable: true })
    burriedRecently?: string;

    @Field({ nullable: true })
    cascetDescend?: string;

    @Field({ nullable: true })
    stonemason?: string;
    // end of bury
}