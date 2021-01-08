import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The driving info funeral car model' })
export class DrivingInfoFollowingCar {

    @Field({ nullable: true })
    @Property()
    from?: string;

    @Field({ nullable: true })
    @Property()
    departuretime?: string;

    @Field({ nullable: true })
    @Property()
    address?: string;

    @Field({ nullable: true })
    @Property()
    postalcode?: string;

    @Field({ nullable: true })
    @Property()
    hometown?: string;

    @Field({ nullable: true })
    @Property()
    to?: string;

    @Field({ nullable: true })
    @Property()
    arrivaltime?: string;

    @Field({ nullable: true })
    @Property()
    specialroute?: string;

    @Field({ nullable: true })
    @Property()
    details?: string;
}
