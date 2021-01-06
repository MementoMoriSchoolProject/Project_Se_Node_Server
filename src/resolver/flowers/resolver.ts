import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { Flowers } from '../../entities/flowers';
import { PersistFlowersInput } from './input';

@Resolver(_of => Flowers)
export class FlowersResolver {

    @Authorized()
    @Query(_returns => Flowers, { nullable: true })
    async flowers(@Arg('id') id: string): Promise<Flowers> {
        return (await FuneralModel.findById(id)).flowers;
    }

    @Authorized()
    @Mutation(_returns => Flowers)
    async saveFlowers(@Arg('funeralId') id: string, @Arg('flowers') flowers: PersistFlowersInput): Promise<Flowers> {
        const funeral = await FuneralModel.findById(id);
        funeral.flowers = flowers;
        await FuneralModel.findByIdAndUpdate(id, { flowers });
        return funeral.flowers;
    }

}