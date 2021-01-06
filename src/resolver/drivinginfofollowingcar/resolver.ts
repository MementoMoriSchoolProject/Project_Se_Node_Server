import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { DrivingInfoFollowingCar } from '../../entities/drivinginfofollowingcar';
import { FuneralModel } from '../../entities/funeral';
import { PersistDrivingInfoFollowingCarInput } from './input';

@Resolver(_of => DrivingInfoFollowingCar)
export class DrivingInfoFollowingCarResolver {

    @Authorized()
    @Query(_returns => [DrivingInfoFollowingCar], { nullable: true })
    async drivinginfofollowingcar(@Arg('id') id: string): Promise<DrivingInfoFollowingCar[]> {
        return (await FuneralModel.findById(id)).drivinginfofollowingcar;
    }

    @Authorized()
    @Mutation(_returns => Boolean)
    async saveDrivingInfoFollowingCar(@Arg('funeralId') id: string, @Arg('drivinginfofollowingcar', () => [PersistDrivingInfoFollowingCarInput]) drivinginfofollowingcar: PersistDrivingInfoFollowingCarInput[]): Promise<boolean> {
        const funeral = await FuneralModel.findById(id);
        funeral.drivinginfofuneralcar = drivinginfofollowingcar;
        await FuneralModel.findByIdAndUpdate(id, { drivinginfofollowingcar });
        return true;
    }

}