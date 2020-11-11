import { ObjectType, Field, registerEnumType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

export enum BuryCremationEnum {
    BURY = "Bury",
    CREMATION = "Cremation"
}

registerEnumType(BuryCremationEnum, {
    name: "BuryCremationEnum",
    description: "basic enums to check which one is presented"
})

@ObjectType({ description: 'The buryCremation model' })
export class BuryCremation {

    @Field({ nullable: true })
    @Property()
    buryCremation?: BuryCremationEnum;

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field(() => Date, { nullable: true })
    @Property()
    timeOfArrival?: Date;

    @Field({ nullable: true })
    @Property()
    namePlace?: string;

    @Field({ nullable: true })
    @Property()
    address?: string;

    @Field({ nullable: true })
    @Property()
    postalCode?: string;

    @Field({ nullable: true })
    @Property()
    location?: string;

    @Field({ nullable: true })
    @Property()
    speakerOrder?: string;

    @Field({ nullable: true })
    @Property()
    specialNeeds?: string;

    // start of cremation
    @Field({ nullable: true })
    @Property()
    cascetView?: string;

    @Field({ nullable: true })
    @Property()
    insertion?: string;

    @Field({ nullable: true })
    @Property()
    ashesDestination?: string;
    // end of cremation

    // start of bury
    @Field({ nullable: true })
    @Property()
    kindOfGrave?: string;

    @Field({ nullable: true })
    @Property()
    existingGrave?: string;

    @Field({ nullable: true })
    @Property()
    sectionNumber?: string;

    @Field({ nullable: true })
    @Property()
    burriedRecently?: string;

    @Field({ nullable: true })
    @Property()
    cascetDescend?: string;

    @Field({ nullable: true })
    @Property()
    stonemason?: string;
    // end of bury
}
