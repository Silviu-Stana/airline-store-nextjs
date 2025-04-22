'use client';
import UserReservation from '@/components/search-results/UserReservation';
import { getAllUserReservations } from '@/lib/db/reservation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const MyReservationsPage = () => {
    const router = useRouter();
    const [userReservations, setUserReservations] = useState<
        { reservationId: string; flightId: string }[]
    >([]);
    const { data, status } = useSession();

    useEffect(() => {
        const getAll = async () => {
            if (status === 'unauthenticated') router.push('/login');

            if (data?.user) {
                const { reservationIds, flightIds } =
                    await getAllUserReservations(data?.user.id);

                const combined = reservationIds.map((r, i) => ({
                    reservationId: r.toString(),
                    flightId: flightIds[i],
                }));

                setUserReservations(combined);
            }
        };
        getAll();
    }, [status]);

    return (
        <div className="flex flex-col items-center">
            {userReservations.length === 0 && (
                <h1 className="text-gray-400 text-2xl">
                    You seem to have no reservations yet...
                </h1>
            )}
            <div className="w-full">
                {userReservations.map(({ reservationId, flightId }) => (
                    <UserReservation
                        key={reservationId}
                        reservationId={reservationId}
                        flightId={flightId}
                    />
                ))}
            </div>
            <button
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-32 h-14 shadow-md rounded-full font-bold text-lg text-cyan-500
                                    hover:text-xl transition-all duration-300
                                    hover:bg-cyan-300 hover:text-white mt-5"
            >
                <span className="transform">
                    <FaArrowLeft size={20} />
                </span>
                Back
            </button>
        </div>
    );
};

export default MyReservationsPage;
