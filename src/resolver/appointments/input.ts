import { ObjectType, Field, InputType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@InputType({ description: 'Appointment object' })
export class PersistAppointmentInput {

    @Field(() => Date, { nullable: true })
    dateFinalCare?: Date;

    @Field({ nullable: true })
    timeFinalCare?: string;

    @Field(() => Date, { nullable: true })
    dateConferenceContent?: Date;

    @Field({ nullable: true })
    timeConferenceContent?: string;

    @Field(() => Date, { nullable: true })
    dateDeliveryCart?: Date;

    @Field({ nullable: true })
    timeDeliveryCart?: string;

    @Field(() => Date, { nullable: true })
    dateDeliveryMusic?: Date;

    @Field({ nullable: true })
    timeDeliveryMusic?: string;

    @Field(() => Date, { nullable: true })
    dateDeliveryPresentation?: Date;

    @Field({ nullable: true })
    timeDeliveryPresentation?: string;

    @Field(() => [PersistExtraAppointment], { nullable: true })
    extra?: PersistExtraAppointment[];
}

@InputType({ description: 'Extra appointment object' })
export class PersistExtraAppointment {
    @Field({ nullable: true })
    description?: string;

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field({ nullable: true })
    time?: string;
}