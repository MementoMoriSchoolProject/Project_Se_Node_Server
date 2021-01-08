import { prop as Property } from "@typegoose/typegoose";
import { Field, InputType } from "type-graphql";

@InputType()
export class SongInput {
    @Field({ nullable: true })
    @Property()
    title?: string;

    @Field({ nullable: true })
    @Property()
    artist?: string;
}

@InputType()
export class AudioVideoInput {

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

    @Field(() => [SongInput], { nullable: true })
    @Property({ type: [SongInput], required: false })
    songs?: SongInput[]
}
