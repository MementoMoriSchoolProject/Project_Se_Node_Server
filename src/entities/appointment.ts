import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Appointment object' })
export class Appointment {

    @Field(() => Date, { nullable: true })
    @Property()
    dateFinalCare?: Date;

    @Field({ nullable: true })
    @Property()
    timeFinalCare?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    dateConferenceContent?: Date;

    @Field({ nullable: true })
    @Property()
    timeConferenceContent?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    dateDeliveryCart?: Date;

    @Field({ nullable: true })
    @Property()
    timeDeliveryCart?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    dateDeliveryMusic?: Date;

    @Field({ nullable: true })
    @Property()
    timeDeliveryMusic?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    dateDeliveryPresentation?: Date;

    @Field({ nullable: true })
    @Property()
    timeDeliveryPresentation?: string;

    @Field(() => [ExtraAppointment], { nullable: true })
    @Property()
    extra?: ExtraAppointment[];
}

@ObjectType({ description: 'Extra appointment object' })
export class ExtraAppointment {
    @Field({ nullable: true })
    @Property()
    description?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field({ nullable: true })
    @Property()
    time?: string;
}