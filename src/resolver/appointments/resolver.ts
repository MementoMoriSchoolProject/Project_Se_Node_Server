import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Appointment } from '../../entities/appointment';
import { FuneralModel } from '../../entities/funeral';
import { PersistAppointmentInput } from './input';

@Resolver(_of => Appointment)
export class AppointmentResolver {

    @Authorized()
    @Query(_returns => Appointment, { nullable: true })
    async appointments(@Arg('id') id: string): Promise<Appointment> {
        return (await FuneralModel.findById(id)).appointments;
    }

    @Authorized()
    @Mutation(_returns => Appointment)
    async saveAppointments(@Arg('funeralId') id: string, @Arg('appointments') appointments: PersistAppointmentInput): Promise<Appointment> {
        const funeral = await FuneralModel.findById(id);
        funeral.appointments = appointments;
        await FuneralModel.findByIdAndUpdate(id, { appointments });
        return funeral.appointments;
    }

}