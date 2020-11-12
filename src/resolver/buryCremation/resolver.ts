import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { BuryCremation } from '../../entities/buryCremation';
import { PersistBuryCremationInput } from './input';

@Resolver(_of => BuryCremation)
export class BuryCremationResolver {

    @Authorized()
    @Query(_returns => BuryCremation, { nullable: true })
    async buryCremation(@Arg('id') id: string): Promise<BuryCremation> {
        return (await FuneralModel.findById(id)).burycremation;
    }

    @Authorized()
    @Mutation(_returns => BuryCremation)
    async saveBuryCremation(@Arg('funeralId') id: string, @Arg('burycremation') burycremation: PersistBuryCremationInput): Promise<BuryCremation> {
        const funeral = await FuneralModel.findById(id);
        funeral.burycremation = burycremation;
        await FuneralModel.findByIdAndUpdate(id, { burycremation });
        return funeral.burycremation;
    }

}