import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { Transport } from '../../entities/transport';
import { PersistTransportInput } from './input';

@Resolver(_of => Transport)
export class TransportResolver {

    @Authorized()
    @Query(_returns => Transport, { nullable: true })
    async transport(@Arg('id') id: string): Promise<Transport> {
        return (await FuneralModel.findById(id)).transport;
    }

    @Authorized()
    @Mutation(_returns => Transport)
    async saveTransport(@Arg('funeralId') id: string, @Arg('transport') transport: PersistTransportInput): Promise<Transport> {
        const funeral = await FuneralModel.findById(id);
        funeral.transport = transport;
        await FuneralModel.findByIdAndUpdate(id, { transport });
        return funeral.transport;
    }

}