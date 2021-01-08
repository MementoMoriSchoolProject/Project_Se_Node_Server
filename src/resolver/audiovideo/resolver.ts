import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { AudioVideo } from "../../entities/audiovideo";
import { FuneralModel } from "../../entities/funeral";
import { AudioVideoInput } from "./input";

@Resolver(_of => AudioVideo)
export class AudioVideoResolver {

    @Authorized()
    @Query(_returns => AudioVideo, { nullable: true })
    async audioVideo(@Arg('id') id: string): Promise<AudioVideo> {
        return (await FuneralModel.findById(id)).audioVideo;
    }

    @Authorized()
    @Mutation(_returns => AudioVideo)
    async saveAudioVideo(@Arg('funeralId') id: string, @Arg('audioVideo') audioVideo: AudioVideoInput): Promise<AudioVideo> {
        const funeral = await FuneralModel.findById(id);
        funeral.audioVideo = audioVideo;
        await FuneralModel.findByIdAndUpdate(id, { audioVideo });
        return funeral.audioVideo;
    }

}