import { createClient } from '@supabase/supabase-js';
import { City, distances } from './data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey, {
    db: { schema: 'next_auth' },
});

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
    startLocation: City,
    endLocation: City,
    dayDate: Date
) {
    const kmDistance = distances[startLocation][endLocation];
    const price = parseFloat(
        (kmDistance * (1 + Math.random() * 0.5)).toFixed(2)
    );

    //Random hour and minute of the day.
    const flightDate = new Date(dayDate); // Clone the dayDate before mutating
    flightDate.setHours(getRandomInt(6, 20), getRandomInt(0, 59), 0, 0);

    const { data, error } = await supabase
        .schema('next_auth')
        .from('flights')
        .insert({
            start_location: startLocation,
            end_location: endLocation,
            flight_date: flightDate.toISOString(),
            price: price,
            flight_duration: 60 + Math.round(Math.random() * 450),
        })
        .select();

    if (error) {
        console.error('Error inserting flight:', error);
    } else {
        console.log('Inserted flight:', data);
    }
}

export async function doesFlightExistOnDate(
    startLocation: string,
    endLocation: string,
    date: Date
) {
    // Normalize the date from Local timetoze UTC (because Supabase stores in UTC)
    const startUTC = new Date(date);
    startUTC.setUTCHours(0, 0, 0, 0);

    const endUTC = new Date(startUTC);
    endUTC.setUTCDate(startUTC.getUTCDate() + 1);

    const { data, error } = await supabase
        .schema('next_auth')
        .from('flights')
        .select('*')
        .gte('flight_date', startUTC.toISOString())
        .lt('flight_date', endUTC.toISOString())
        .eq('start_location', startLocation)
        .eq('end_location', endLocation);

    if (error) {
        console.log('Error checking flights:', error);
        return false;
    }

    return data.length > 0;
}

export async function getAllFlightLocations() {
    const { data, error } = await supabase
        .schema('next_auth')
        .from('flights')
        .select('start_location, end_location');

    if (error) {
        console.log('Error fetching locations:', error);
        return [];
    }

    //Collect all locations
    const cities = data.flatMap((flight) => [
        flight.start_location,
        flight.end_location,
    ]);

    const uniqueCities = [...new Set(cities)].sort();

    return uniqueCities;
}

export async function searchFlight(
    startLocation?: string,
    endLocation?: string,
    date?: Date
) {
    let query = supabase
        .schema('next_auth')
        .from('flights')
        .select('*')
        .limit(10);

    if (startLocation && startLocation.trim() !== '') {
        query = query.eq('start_location', startLocation);
    }

    if (endLocation && endLocation.trim() !== '') {
        query = query.eq('end_location', endLocation);
    }

    if (date) {
        const startUTC = new Date(date);
        startUTC.setUTCHours(0, 0, 0, 0);

        const endUTC = new Date(startUTC);
        endUTC.setUTCDate(startUTC.getUTCDate() + 1);

        query = query
            .gte('flight_date', startUTC.toISOString())
            .lt('flight_date', endUTC.toISOString());
    }

    const { data, error } = await query;

    if (error) {
        console.log('Error fetching flights:', error);
        return [];
    }

    console.log(data);
    return data;
}
