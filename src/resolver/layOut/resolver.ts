import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { LayOut } from '../../entities/layOut';
import { PersistLayOutInput } from './input';

@Resolver(_of => LayOut)
export class LayoutResolver {

    @Authorized()
    @Query(_returns => LayOut, { nullable: true })
    async layOut(@Arg('id') id: string): Promise<LayOut> {
        return (await FuneralModel.findById(id)).layOut;
    }

    @Authorized()
    @Mutation(_returns => LayOut)
    async saveLayOut(@Arg('funeralId') id: string, @Arg('layOut') layOut: PersistLayOutInput): Promise<LayOut> {
        const funeral = await FuneralModel.findById(id);
        funeral.layOut = layOut;
        await FuneralModel.findByIdAndUpdate(id, { layOut });
        return funeral.layOut;
    }

}