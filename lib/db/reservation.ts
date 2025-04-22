import { supabase } from './supabase';

export async function insertReservation(
    userId: string,
    flightId: string,
    seatId: string
) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    console.log(userId, flightId, seatId);

    const { error: seatError } = await supabase
        .schema('next_auth')
        .from('seats')
        .insert({
            seat_id: seatId,
            flight_id: flightId,
        });

    if (seatError) {
        console.error('Error inserting seat:', seatError);
        return { error: seatError };
    }

    const { error } = await supabase
        .schema('next_auth')
        .from('reservations')
        .insert({
            user_id: userId,
            flight_id: flightId,
            expiration_date: expirationDate.toISOString(),
        });

    if (error) {
        console.error('Error inserting reservation:', error);
        return { error };
    }
}
