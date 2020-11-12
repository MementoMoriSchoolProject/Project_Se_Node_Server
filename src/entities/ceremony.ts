import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Ceremony object' })
export class Ceremony {

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field({ nullable: true })
    @Property()
    time?: string;

    @Field({ nullable: true })
    @Property()
    familyPresentAtLayoutAddress?: string;

    @Field({ nullable: true })
    @Property()
    timeDepartureLayoutAddress?: string;

    @Field({ nullable: true })
    @Property()
    duration?: string;

    @Field({ nullable: true })
    @Property()
    extraTime?: string;

    @Field({ nullable: true })
    @Property()
    aulaStart?: string;

    @Field({ nullable: true })
    @Property()
    aulaType?: string;

    @Field({ nullable: true })
    @Property()
    amountOfInterestedGuests?: number;

    @Field({ nullable: true })
    @Property()
    isInClosedCircle?: string;

    @Field({ nullable: true })
    @Property()
    condolanceBook?: string;

    @Field({ nullable: true })
    @Property()
    attributesAtKatafalk?: string;

    @Field({ nullable: true })
    @Property()
    inviteSpeakers?: string;

    @Field({ nullable: true })
    @Property()
    funeralAssistantAmount?: number;

    @Field({ nullable: true })
    @Property()
    carrierAmount?: number;

    @Field({ nullable: true })
    @Property()
    acceptFamily?: string;

    @Field({ nullable: true })
    @Property()
    familyFirst?: string;

    @Field({ nullable: true })
    @Property()
    placesForFamilyAmount?: number;

    @Field({ nullable: true })
    @Property()
    openingSpeech?: string;

    @Field({ nullable: true })
    @Property()
    candlesLitBy?: string;

    @Field(() => [String], { nullable: true })
    @Property({ type: [String] })
    speakers?: string[];

    @Field({ nullable: true })
    @Property()
    momentOfSilence?: string;

    @Field({ nullable: true })
    @Property()
    closingSpeech?: string;

    @Field({ nullable: true })
    @Property()
    flowerCardWishes?: string;

    @Field({ nullable: true })
    @Property()
    flowerRibbonWishes?: string;

    @Field({ nullable: true })
    @Property()
    flowerWishes?: string;

    @Field({ nullable: true })
    @Property()
    wishes?: string;

}
