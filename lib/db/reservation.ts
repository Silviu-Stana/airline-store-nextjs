import { supabase } from './supabase';

export async function insertReservation(
    userId: string,
    flightId: string,
    seatId: string
) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    const { error: seatError } = await supabase
        .schema('next_auth')
        .from('seats')
        .insert({
            user_id: userId,
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

export async function getAllUserReservations(userId: string) {
    const { data, error } = await supabase
        .schema('next_auth')
        .from('reservations')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        throw new Error(
            'Error fetching all reservations made by a user:',
            error
        );
    }

    const allReservations = data.flatMap((r) => r.flight_id);
    const uniqueReservations = Array.from(new Set(allReservations));

    return { reservations: uniqueReservations };
}
