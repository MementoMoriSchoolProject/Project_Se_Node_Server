import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { FuneralLetter } from '../../entities/funeralletter';
import { PersistFuneralLetterInput } from './input';

@Resolver(_of => FuneralLetter)
export class FuneralLetterResolver {

    @Authorized()
    @Query(_returns => FuneralLetter, { nullable: true })
    async funeralletter(@Arg('id') id: string): Promise<FuneralLetter> {
        return (await FuneralModel.findById(id)).funeralletter;
    }

    @Authorized()
    @Mutation(_returns => FuneralLetter)
    async saveFuneralLetter(@Arg('funeralId') id: string, @Arg('funeralletter') funeralletter: PersistFuneralLetterInput): Promise<FuneralLetter> {
        const funeral = await FuneralModel.findById(id);
        funeral.funeralletter = funeralletter;
        await FuneralModel.findByIdAndUpdate(id, { funeralletter });
        return funeral.funeralletter;
    }

}