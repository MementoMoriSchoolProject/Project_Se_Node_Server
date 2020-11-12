import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Ceremony } from '../../entities/ceremony';
import { FuneralModel } from '../../entities/funeral';
import { PersistCeremonyInput } from './input';

@Resolver(_of => Ceremony)
export class CeremonyResolver {

    @Authorized()
    @Query(_returns => Ceremony, { nullable: true })
    async ceremony(@Arg('id') id: string): Promise<Ceremony> {
        return (await FuneralModel.findById(id)).ceremony;
    }

    @Authorized()
    @Mutation(_returns => Ceremony)
    async saveCeremony(@Arg('funeralId') id: string, @Arg('ceremony') ceremony: PersistCeremonyInput): Promise<Ceremony> {
        const funeral = await FuneralModel.findById(id);
        funeral.ceremony = ceremony;
        await FuneralModel.findByIdAndUpdate(id, { ceremony });
        return funeral.ceremony;
    }

}