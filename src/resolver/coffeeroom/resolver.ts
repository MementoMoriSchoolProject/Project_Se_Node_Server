import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { CoffeeRoom } from '../../entities/coffeeroom';
import { FuneralModel } from '../../entities/funeral';
import { PersistCoffeeRoomInput } from './input';

@Resolver(_of => CoffeeRoom)
export class CoffeeRoomResolver {

    @Authorized()
    @Query(_returns => CoffeeRoom, { nullable: true })
    async coffeeroom(@Arg('id') id: string): Promise<CoffeeRoom> {
        return (await FuneralModel.findById(id)).coffeeroom;
    }

    @Authorized()
    @Mutation(_returns => CoffeeRoom)
    async saveCoffeeRoom(@Arg('funeralId') id: string, @Arg('coffeeroom') coffeeroom: PersistCoffeeRoomInput): Promise<CoffeeRoom> {
        const funeral = await FuneralModel.findById(id);
        funeral.coffeeroom = coffeeroom;
        await FuneralModel.findByIdAndUpdate(id, { coffeeroom });
        return funeral.coffeeroom;
    }

}