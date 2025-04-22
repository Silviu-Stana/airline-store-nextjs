'use client';
import { getFlightById } from '@/lib/db/flight';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaWindowClose } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export interface UserReservationProps {
    flightId: string;
}

export interface ReservationProps {
    id: string;
    flight_date: Date;
    flight_duration: number;
    start_location: string;
    end_location: string;
    price: number;
}

const UserReservation: React.FC<UserReservationProps> = ({ flightId }) => {
    const [flight, setFlight] = useState<ReservationProps>();
    useEffect(() => {
        const fetchFlight = async () => {
            const data = await getFlightById(flightId);
            setFlight(data);
        };
        fetchFlight();
    }, []);

    if (!flight) return null;

    const {
        flight_date,
        flight_duration,
        start_location,
        end_location,
        price,
    } = flight;

    const date = new Date(flight_date);
    const monthName = date.toLocaleString('default', { month: 'long' });

    let departureTime = `${date.getHours()}:`;
    if (date.getMinutes() < 10) departureTime += `0${date.getMinutes()}`;
    else departureTime += date.getMinutes();

    let arrivalDate = new Date(date);
    arrivalDate.setMinutes(arrivalDate.getMinutes() + flight_duration);

    let arrivalTime = `${arrivalDate.getHours()}:`;
    if (arrivalDate.getMinutes() < 10)
        arrivalTime += `0${arrivalDate.getMinutes()}`;
    else arrivalTime += arrivalDate.getMinutes();

    return (
        <div className="flex flex-col items-center mb-0">
            <div
                className="w-full flex flex-row items-center justify-around mt-5 p-6 rounded-4xl shadow-xl outline-2 outline-cyan-400/10 bg-white
            mx-24 sm:mx-14  lg:mx-auto"
            >
                <div>
                    <p className="text-lg ">{departureTime}</p>
                    <h1 className="text-lg ">{start_location}</h1>
                    <p>
                        {monthName} {date.getDate()}
                    </p>
                </div>
                <span>
                    <FaArrowRight size={25} />
                </span>
                <div>
                    <p className="text-lg ">{arrivalTime}</p>
                    <h1 className="text-lg ">{end_location}</h1>
                    <p>
                        {Math.floor(flight_duration / 60)}h{' '}
                        {flight_duration % 60}
                        min
                    </p>
                    <p className="text-xl text-cyan-400"></p>
                </div>

                <div className="flex">
                    <svg
                        className="absolute w-8 h-8 p-1 hidden peer-checked:block fill-white pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>
                    <div>
                        <p className="ml-3 text-xl text-cyan-400 font-semibold">
                            To Pay:
                        </p>
                        <p className="ml-3 text-xl text-cyan-400">${price}</p>
                    </div>
                </div>
            </div>
            <button
                className="flex items-center justify-center gap-4 border-1 w-64 h-14 shadow-md rounded-2xl font-bold text-lg text-red-500 mb-10
                                        hover:text-xl transition-all duration-300
                                        hover:bg-red-200 mt-5"
            >
                <span className="transform">
                    <IoMdClose size={25} />
                </span>
                Cancel Reservation
            </button>
        </div>
    );
};

export default UserReservation;
