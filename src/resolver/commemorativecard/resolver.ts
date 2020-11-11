import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { CommemorativeCard } from '../../entities/commemorativecard';
import { PersistCommemorativeCardInput } from './input';

@Resolver(_of => CommemorativeCard)
export class CommemorativeCardResolver {

    @Authorized()
    @Query(_returns => CommemorativeCard, { nullable: true })
    async commemorativecard(@Arg('id') id: string): Promise<CommemorativeCard> {
        return (await FuneralModel.findById(id)).commemorativecard;
    }

    @Authorized()
    @Mutation(_returns => CommemorativeCard)
    async saveCommemorativeCard(@Arg('funeralId') id: string, @Arg('commemorativecard') commemorativecard: PersistCommemorativeCardInput): Promise<CommemorativeCard> {
        const funeral = await FuneralModel.findById(id);
        funeral.commemorativecard = commemorativecard;
        await FuneralModel.findByIdAndUpdate(id, { commemorativecard });
        return funeral.commemorativecard;
    }

}