import { ObjectType, Field, InputType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@InputType({ description: 'Ceremony object' })
export class PersistCeremonyInput {

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field({ nullable: true })
    time?: string;

    @Field({ nullable: true })
    familyPresentAtLayoutAddress?: string;

    @Field({ nullable: true })
    timeDepartureLayoutAddress?: string;

    @Field({ nullable: true })
    duration?: string;

    @Field({ nullable: true })
    extraTime?: string;

    @Field({ nullable: true })
    aulaStart?: string;

    @Field({ nullable: true })
    aulaType?: string;

    @Field({ nullable: true })
    amountOfInterestedGuests?: number;

    @Field({ nullable: true })
    isInClosedCircle?: string;

    @Field({ nullable: true })
    condolanceBook?: string;

    @Field({ nullable: true })
    attributesAtKatafalk?: string;

    @Field({ nullable: true })
    inviteSpeakers?: string;

    @Field({ nullable: true })
    funeralAssistantAmount?: number;

    @Field({ nullable: true })
    carrierAmount?: number;

    @Field({ nullable: true })
    acceptFamily?: string;

    @Field({ nullable: true })
    familyFirst?: string;

    @Field({ nullable: true })
    placesForFamilyAmount?: number;

    @Field({ nullable: true })
    openingSpeech?: string;

    @Field({ nullable: true })
    candlesLitBy?: string;

    @Field(() => [String], { nullable: true })
    @Property({ type: [String] })
    speakers?: string[];

    @Field({ nullable: true })
    momentOfSilence?: string;

    @Field({ nullable: true })
    closingSpeech?: string;

    @Field({ nullable: true })
    flowerCardWishes?: string;

    @Field({ nullable: true })
    flowerRibbonWishes?: string;

    @Field({ nullable: true })
    flowerWishes?: string;

    @Field({ nullable: true })
    wishes?: string;

}
