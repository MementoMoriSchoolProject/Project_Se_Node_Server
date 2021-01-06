import { prop as Property } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Song {
    @Field({ nullable: true })
    @Property()
    title?: string;

    @Field({ nullable: true })
    @Property()
    artist?: string;
}

@ObjectType()
export class AudioVideo {

    @Field({ nullable: true })
    @Property()
    musicDeliveredBy?: string;

    @Field({ nullable: true })
    @Property()
    presentationDeliveredBy?: string;

    @Field({ nullable: true })
    @Property()
    usePiano?: string;

    @Field({ nullable: true })
    @Property()
    hasDVD?: string;

    @Field({ nullable: true })
    @Property()
    hasCD?: string;

    @Field(() => [Song], { nullable: true })
    @Property({ type: [Song], required: false })
    songs?: Song[]
}
