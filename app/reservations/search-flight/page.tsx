'use client';
import NavigationButton from '@/components/NavigationButton';
import Image from 'next/image';
import React, { useState } from 'react';

const locations = [
    { city: 'Bucuresti', country: 'Romania' },
    { city: 'Paris', country: 'France' },
    { city: 'Berlin', country: 'Germany' },
    { city: 'Sofia', country: 'Bulgaria' },
    { city: 'Tokyo', country: 'Japan' },
];

const SearchFlight = () => {
    const [from, setFrom] = useState({
        city: 'Bucuresti',
        country: 'Romania',
    });
    const [to, setTo] = useState({
        city: 'Sofia',
        country: 'Bulgaria',
    });

    return (
        <div>
            <h1 className="text-cyan-500 text-3xl justify-center text-center pt-15 p-10">
                Select a destination!
            </h1>
            <div className="flex justify-center gap-3 md:gap-4 lg:gap-5 px-2 sm:px-5">
                <div
                    className="w-64 md:w-56 lg:w-70 h-27 bg-white rounded-2xl
                    transition-all
                    shadow-[0_4px_8px_rgba(0,154,206,0.3)] hover:shadow-[0_6px_24px_rgba(0,154,206,.6)] "
                >
                    <div className="ml-5 mt-5 text-gray-500">From</div>
                    <select
                        value={from.city}
                        onChange={(e) => {
                            const selected = locations.find(
                                (loc) => loc.city === e.target.value
                            );
                            setFrom(selected || from);
                        }}
                        className="ml-4 font-medium text-[18px] text-cyan-500 focus:outline-none"
                    >
                        {locations
                            .filter((loc) => loc.city !== to.city)
                            .map((loc) => {
                                return (
                                    <option
                                        key={loc.city}
                                        value={loc.city}
                                        className="font-semibold text-cyan-600"
                                    >
                                        {loc.city}
                                    </option>
                                );
                            })}
                    </select>
                    <div className="ml-5 text-[13px] text-cyan-800 font-bold ">
                        {from.country}
                    </div>
                </div>
                <div
                    className="w-64 md:w-56 lg:w-70 h-27 bg-white rounded-2xl
                transition-all
                shadow-[0_4px_8px_rgba(0,154,206,0.3)] hover:shadow-[0_6px_24px_rgba(0,154,206,.6)] 
                "
                >
                    <div className="ml-5 mt-5 text-gray-500">To</div>
                    <div className="ml-5 font-medium text-[18px] text-cyan-500">
                        {to.city}
                    </div>
                    <div className="ml-5 text-[13px] text-cyan-800 font-bold ">
                        {to.country}
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-row gap-5 justify-center mb-4">
                <NavigationButton
                    label="Back"
                    iconPosition="left"
                    route="/reservations/date"
                />
                <NavigationButton
                    label="Next"
                    iconPosition="right"
                    route="/reservations/select-seat"
                />
            </div>
        </div>
    );
};

export default SearchFlight;
