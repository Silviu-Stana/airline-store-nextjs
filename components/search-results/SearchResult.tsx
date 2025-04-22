'use client';
import { useReservation } from '@/contexts/ReservationContext';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export interface SearchResultProps {
    id: string;
    flight_date: string; // assuming ISO string
    flight_duration: number; // in minutes
    start_location: string;
    end_location: string;
    price: number;
}

const SearchResult: React.FC<SearchResultProps> = ({
    id,
    flight_date,
    flight_duration,
    start_location,
    end_location,
    price,
}) => {
    const { flightId, setFlightId } = useReservation();

    const handleCheck = () => {
        if (flightId !== id) setFlightId(id);
        else setFlightId('');
    };

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
        <div className="flex flex-row items-center justify-around mx-auto mt-5 p-6 rounded-4xl shadow-xl outline-2 outline-cyan-400/10 bg-white">
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
                    {Math.floor(flight_duration / 60)}h {flight_duration % 60}
                    min
                </p>
                <p className="text-xl text-cyan-400"></p>
            </div>

            <div className="flex">
                <input
                    onChange={handleCheck}
                    checked={flightId === id}
                    type="checkbox"
                    id={id}
                    className="appearance-none relative peer w-8 h-8 border-2 border-cyan-400 rounded-lg bg-white
        checked:bg-cyan-400"
                />
                <svg
                    className="absolute w-8 h-8 p-1 hidden peer-checked:block fill-white pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
                <p className="ml-3 text-xl text-cyan-400">${price}</p>
            </div>
        </div>
    );
};

export default SearchResult;
