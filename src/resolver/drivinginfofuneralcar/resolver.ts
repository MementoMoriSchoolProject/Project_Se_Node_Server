import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { DrivingInfoFuneralCar } from '../../entities/drivinginfofuneralcar';
import { FuneralModel } from '../../entities/funeral';
import { PersistDrivingInfoFuneralCarInput } from './input';

@Resolver(_of => DrivingInfoFuneralCar)
export class DrivingInfoFuneralCarResolver {

    @Authorized()
    @Query(_returns => [DrivingInfoFuneralCar], { nullable: true })
    async drivinginfofuneralcar(@Arg('id') id: string): Promise<DrivingInfoFuneralCar[]> {
        return (await FuneralModel.findById(id)).drivinginfofuneralcar;
    }

    @Authorized()
    @Mutation(_returns => Boolean)
    async saveDrivingInfoFuneralCar(@Arg('funeralId') id: string, @Arg('drivinginfofuneralcar', () => [PersistDrivingInfoFuneralCarInput]) drivinginfofuneralcar: PersistDrivingInfoFuneralCarInput[]): Promise<boolean> {
        const funeral = await FuneralModel.findById(id);
        funeral.drivinginfofuneralcar = drivinginfofuneralcar;
        await FuneralModel.findByIdAndUpdate(id, { drivinginfofuneralcar });
        return true;
    }

}