import { createClient } from '@supabase/supabase-js';
import { Country, destinationList, distances } from './data';
import { DateTime } from 'next-auth/providers/kakao';

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? ''
);

export async function getUserByEmail(email: string) {
    const { data, error } = await supabase
        .schema('next_auth')
        .from('users')
        .select('id, email, username, password')
        .eq('email', email)
        .single();

    if (error) {
        console.error('getUserByEmail error:', error);
        return null;
    }
    return data;
}

const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export async function insertFakeFlight(
    startLocation: Country,
    endLocation: Country
) {
    const kmDistance = distances[startLocation][endLocation];
    const price = kmDistance * (1 + Math.random() * 0.5); //Always get value between 1 and 1.5

    //Random hour and minute of the day.
    const flightDate = new Date();
    flightDate.setHours(getRandomInt(6, 20), getRandomInt(0, 59), 0, 0);

    const { data, error } = await supabase
        .schema('next_auth')
        .from('flights')
        .insert({
            start_location: startLocation,
            end_location: endLocation,
            flight_date: flightDate.toISOString(),
            price: price,
        });

    if (error) {
        console.error('Error inserting flight:', error);
    } else {
        console.log('Inserted flight:', data);
    }
}

export async function doesFlightExistOnDate(date: Date | undefined) {
    const { data, error } = await supabase
        .schema('next_auth')
        .from('flights')
        .select('*', { count: 'exact', head: true }) // head: true = return no rows, only count
        .eq('flight_date', date);

    if (error) {
        console.log('Error checking flights:', error);
        return false;
    }

    return data?.length > 0;
}

export const handleFakeFlights = async () => {
    const exists = await doesFlightExistOnDate(new Date());
    if (!exists) {
        //TODO: insert for the next 7 days
        for (let i = 1; i < 3; i++) {
            await insertFakeFlight('Romania', 'Bulgaria');
            await insertFakeFlight('Romania', 'France');
            await insertFakeFlight('Romania', 'Germany');
            await insertFakeFlight('Romania', 'Moldova');
        }
    }
};
