'use client';
import NavigationButton from '@/components/NavigationButton';
import Seat from '@/components/Seat';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Prefetcher } from '@/components/Prefetcher';
import { useReservation } from '@/contexts/ReservationContext';
import { insertReservation } from '@/lib/db/reservation';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getOccupiedSeats } from '@/lib/db/seats';

const SearchFlight = () => {
    const { selectedSeat, flightId } = useReservation();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [occupiedSeats, setOccupiedSeats] = useState<string[]>([]);

    const router = useRouter();
    const { data: session, status } = useSession();

    let disabled = false;
    if (selectedSeat === '') disabled = true;
    else disabled = false;

    useEffect(() => {
        const getListOfSeats = async () => {
            let occupiedSeats = await getOccupiedSeats(flightId);
            setOccupiedSeats(occupiedSeats);
        };
        getListOfSeats();
    }, []);

    const onClick = async () => {
        if (status === 'unauthenticated') router.push('/login');
        const userId = session?.user.id!;

        setError('');
        setIsLoading(true);
        if (status !== 'loading') {
            const reservation = await insertReservation(
                userId,
                flightId,
                selectedSeat
            );
            if (!reservation) setError('Something went wrong!');

            setIsLoading(false);
            if (reservation?.error) setError('Something went wrong!');
            else router.push('/reservations/success');
        }
    };

    return (
        <div>
            {selectedSeat ? (
                <>
                    <h1 className="text-cyan-500 text-3xl py-3 justify-center text-center">
                        Reserve
                    </h1>
                    <h1 className="text-cyan-500 text-4xl -mt-3 mb-3 justify-center text-center">
                        {selectedSeat}
                    </h1>
                </>
            ) : (
                <h1 className="text-cyan-500 text-3xl py-3 justify-center text-center">
                    Select your seat!
                </h1>
            )}
            <div className="relative mx-auto">
                <Image
                    className="object-contain"
                    src={'/plane.png'}
                    width={1000}
                    height={1000}
                    alt="airplane"
                />

                <div className="absolute inset-0 mr-0.5 flex justify-center items-center">
                    <div className="flex gap-1 mb-40">
                        <div className="flex flex-col gap-2">
                            <Seat label="A1" occupiedSeats={occupiedSeats} />
                            <Seat label="A2" occupiedSeats={occupiedSeats} />
                            <Seat label="A3" occupiedSeats={occupiedSeats} />
                            <Seat label="A4" occupiedSeats={occupiedSeats} />
                            <Seat label="A5" occupiedSeats={occupiedSeats} />
                            <Seat label="A6" occupiedSeats={occupiedSeats} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Seat label="B1" occupiedSeats={occupiedSeats} />
                            <Seat label="B2" occupiedSeats={occupiedSeats} />
                            <Seat label="B3" occupiedSeats={occupiedSeats} />
                            <Seat label="B4" occupiedSeats={occupiedSeats} />
                            <Seat label="B5" occupiedSeats={occupiedSeats} />
                            <Seat label="B6" occupiedSeats={occupiedSeats} />
                        </div>
                        {/* These empty divs allow for a bit of space in between "AB" and "CD" rows */}
                        <div></div>
                        <div></div>
                        <div className="flex flex-col gap-2">
                            <Seat label="C1" occupiedSeats={occupiedSeats} />
                            <Seat label="C2" occupiedSeats={occupiedSeats} />
                            <Seat label="C3" occupiedSeats={occupiedSeats} />
                            <Seat label="C4" occupiedSeats={occupiedSeats} />
                            <Seat label="C5" occupiedSeats={occupiedSeats} />
                            <Seat label="C6" occupiedSeats={occupiedSeats} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Seat label="D1" occupiedSeats={occupiedSeats} />
                            <Seat label="D2" occupiedSeats={occupiedSeats} />
                            <Seat label="D3" occupiedSeats={occupiedSeats} />
                            <Seat label="D4" occupiedSeats={occupiedSeats} />
                            <Seat label="D5" occupiedSeats={occupiedSeats} />
                            <Seat label="D6" occupiedSeats={occupiedSeats} />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 flex flex-row gap-5 justify-center mb-4">
                    <Prefetcher route="/reservations/search-flight" />
                    <NavigationButton
                        label="Back"
                        iconPosition="left"
                        route="/reservations/search-flight"
                    />
                    <NavigationButton
                        onClick={onClick}
                        disabled={disabled}
                        label="Reserve"
                        iconPosition="right"
                        route="/reservations/search-flight"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchFlight;
