import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Farewell } from '../../entities/farewell';
import { FuneralModel } from '../../entities/funeral';
import { PersistFarewellServiceInput } from './input';

@Resolver(_of => Farewell)
export class FarewellResolver {

    @Authorized()
    @Query(_returns => Farewell, { nullable: true })
    async farewell(@Arg('id') id: string): Promise<Farewell> {
        return (await FuneralModel.findById(id)).farewell;
    }

    @Authorized()
    @Mutation(_returns => Farewell)
    async saveFarewell(@Arg('funeralId') id: string, @Arg('farewell') farewell: PersistFarewellServiceInput): Promise<Farewell> {
        const funeral = await FuneralModel.findById(id);
        funeral.farewell = farewell;
        await FuneralModel.findByIdAndUpdate(id, { farewell });
        return funeral.farewell;
    }

}