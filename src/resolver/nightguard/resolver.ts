import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { Nightguard } from '../../entities/nightguard';
import { PersistNightguardInput } from './input';

@Resolver(_of => Nightguard)
export class NightguardResolver {

    @Authorized()
    @Query(_returns => Nightguard, { nullable: true })
    async nightguard(@Arg('id') id: string): Promise<Nightguard> {
        return (await FuneralModel.findById(id)).nightguard;
    }

    @Authorized()
    @Mutation(_returns => Nightguard)
    async saveNightguard(@Arg('funeralId') id: string, @Arg('nightguard') nightguard: PersistNightguardInput): Promise<Nightguard> {
        const funeral = await FuneralModel.findById(id);
        funeral.nightguard = nightguard;
        await FuneralModel.findByIdAndUpdate(id, { nightguard });
        return funeral.nightguard;
    }

}