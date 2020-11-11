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

    @Field(_type => [Visiting], { nullable: true })
    @Property({ type: [Visiting], required: false })
    visiting?: Visiting[];

    @Field(_type => FinalCare, { nullable: true })
    @Property({ type: FinalCare, required: false })
    finalcare?: FinalCare

    @Field(_type => [Transmission], { nullable: true })
    @Property({ type: [Transmission], required: false })
    transmissions?: Transmission[];

    @Field(_type => Farewell, { nullable: true })
    @Property({ type: Farewell, required: false })
    farewell?: Farewell

    @Field(_type => FuneralLetter, { nullable: true })
    @Property({ type: FuneralLetter, required: false })
    funeralletter?: FuneralLetter

    @Field(_type => CommemorativeCard, { nullable: true })
    @Property({ type: CommemorativeCard, required: false })
    commemorativecard?: CommemorativeCard

    @Field(_type => Account, { nullable: true })
    @Property({ ref: Account, required: false })
    account?: Ref<Account>;

    @Field(_type => Number, { nullable: true })
    @Property({ required: false })
    lastCreationStep?: number;
}

export const FuneralModel = getModelForClass(Funeral);