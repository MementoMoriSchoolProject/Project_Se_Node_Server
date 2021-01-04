import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Cascet } from '../../entities/cascet';
import { FuneralModel } from '../../entities/funeral';
import { PersistCascetInput } from './input';

@Resolver(_of => Cascet)
export class CascetResolver {

    @Authorized()
    @Query(_returns => Cascet, { nullable: true })
    async cascet(@Arg('id') id: string): Promise<Cascet> {
        return (await FuneralModel.findById(id)).cascet;
    }

    @Authorized()
    @Mutation(_returns => Cascet)
    async saveCascet(@Arg('funeralId') id: string, @Arg('cascet') cascet: PersistCascetInput): Promise<Cascet> {
        const funeral = await FuneralModel.findById(id);
        funeral.cascet = cascet;
        await FuneralModel.findByIdAndUpdate(id, { cascet });
        return funeral.cascet;
    }

}