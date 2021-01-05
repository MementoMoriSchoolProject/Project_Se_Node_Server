import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Advertisement } from '../../entities/advertisement';
import { FuneralModel } from '../../entities/funeral';
import { PersistAdvertisementInput } from './input';

@Resolver(_of => Advertisement)
export class AdvertisementResolver {

    @Authorized()
    @Query(_returns => [Advertisement], { nullable: true })
    async advertisement(@Arg('id') id: string): Promise<Advertisement[]> {
        return (await FuneralModel.findById(id)).advertisement;
    }

    @Authorized()
    @Mutation(_returns => Boolean)
    async saveAdvertisement(@Arg('funeralId') id: string, @Arg('advertisement', () => [PersistAdvertisementInput]) advertisement: PersistAdvertisementInput[]): Promise<boolean> {
        const funeral = await FuneralModel.findById(id);
        funeral.advertisement = advertisement;
        await FuneralModel.findByIdAndUpdate(id, { advertisement });
        return true;
    }

}