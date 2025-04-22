import { supabase } from './supabase';

export async function getOccupiedSeats(flightId: string) {
    if (flightId === '') throw new Error('You must select a Flight ID');

    const { data, error } = await supabase
        .schema('next_auth')
        .from('seats')
        .select('seat_id')
        .eq('flight_id', flightId);

    const occupiedSeats = data?.map((seat) => seat.seat_id);

    if (error) throw new Error('Error fetching occupied seats.');

    return occupiedSeats as string[];
}
