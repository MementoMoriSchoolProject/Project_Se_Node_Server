import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Ref } from '../types';
import { Deceased } from './deceased';
import { Account } from './auth';
import { Circumstances } from './circumstances';
import { Client } from './client'
import { Visiting } from './visiting';
import { Transmission } from './transmission';
import { Insurance } from './insurance';
import { FinalCare } from './finalcare';
import { Farewell } from './farewell';
import { FuneralLetter } from './funeralletter';
import { CommemorativeCard } from './commemorativecard';
import { Ceremony } from './ceremony';
import { BuryCremation } from './buryCremation';
import { Nightguard } from './nightguard';
import { Appointment } from './appointment';
import { Transport } from './transport';
import { DrivingInfoFuneralCar } from './drivinginfofuneralcar';
import { DrivingInfoFollowingCar } from './drivinginfofollowingcar';
import { Cascet } from './cascet';
import { Advertisement } from './advertisement';
import { LayOut } from './layOut';
import { Flowers } from './flowers';
import { AudioVideo } from './audiovideo';

@ObjectType({ description: 'The funeral model' })
export class Funeral {
    @Field(() => ID)
    id: string;

    @Field(_type => Deceased, { nullable: true })
    @Property({ type: Deceased, required: false })
    deceased?: Deceased

    @Field(_type => Circumstances, { nullable: true })
    @Property({ type: Circumstances, required: false })
    circumstances?: Circumstances;

    @Field(_type => [Insurance], { nullable: true })
    @Property({ type: [Insurance], required: false })
    insurances?: Insurance[];

    @Field(_type => Client, { nullable: true })
    @Property({ type: Client, required: false })
    client?: Client

    @Field(_type => Nightguard, { nullable: true })
    @Property({ type: Nightguard, required: false })
    nightguard?: Nightguard

    @Field(_type => LayOut, { nullable: true })
    @Property({ type: LayOut, required: false })
    layOut?: LayOut

    @Field(_type => [Visiting], { nullable: true })
    @Property({ type: [Visiting], required: false })
    visiting?: Visiting[];

    @Field(_type => Flowers, { nullable: true })
    @Property({ type: Flowers, required: false })
    flowers?: Flowers;

    @Field(_type => [Advertisement], { nullable: true })
    @Property({ type: [Advertisement], required: false })
    advertisement?: Advertisement[];

    @Field(_type => FinalCare, { nullable: true })
    @Property({ type: FinalCare, required: false })
    finalcare?: FinalCare

    @Field(_type => BuryCremation, { nullable: true })
    @Property({ type: BuryCremation, required: false })
    burycremation?: BuryCremation

    @Field(_type => [Transmission], { nullable: true })
    @Property({ type: [Transmission], required: false })
    transmissions?: Transmission[];

    @Field(_type => Farewell, { nullable: true })
    @Property({ type: Farewell, required: false })
    farewell?: Farewell

    @Field(_type => AudioVideo, { nullable: true })
    @Property({ type: AudioVideo, required: false })
    audioVideo?: AudioVideo;

    @Field(_type => FuneralLetter, { nullable: true })
    @Property({ type: FuneralLetter, required: false })
    funeralletter?: FuneralLetter

    @Field(_type => Transport, { nullable: true })
    @Property({ type: Transport, required: false })
    transport?: Transport

    @Field(_type => [DrivingInfoFuneralCar], { nullable: true })
    @Property({ type: [DrivingInfoFuneralCar], required: false })
    drivinginfofuneralcar?: DrivingInfoFuneralCar[];

    @Field(_type => [DrivingInfoFollowingCar], { nullable: true })
    @Property({ type: [DrivingInfoFollowingCar], required: false })
    drivinginfofollowingcar?: DrivingInfoFollowingCar[];

    @Field(_type => CommemorativeCard, { nullable: true })
    @Property({ type: CommemorativeCard, required: false })
    commemorativecard?: CommemorativeCard

    @Field(_type => Ceremony, { nullable: true })
    @Property({ type: Ceremony, required: false })
    ceremony?: Ceremony;

    @Field(_type => Cascet, { nullable: true })
    @Property({ type: Cascet, required: false })
    cascet?: Cascet;

    @Field(_type => Account, { nullable: true })
    @Property({ ref: Account, required: false })
    account?: Ref<Account>;

    @Field(_type => Number, { nullable: true })
    @Property({ required: false })
    lastCreationStep?: number;

    @Field(_type => Appointment, { nullable: true })
    @Property({ required: false })
    appointments?: Appointment;
}

export const FuneralModel = getModelForClass(Funeral);