'use client';
import NavigationButton from '@/components/NavigationButton';
import SearchResult from '@/components/search-results/SearchResult';
import { useReservation } from '@/contexts/ReservationContext';
import { getAllFlightLocations, searchFlight } from '@/lib/db/supabase';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchFlight = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [locations, setLocations] = useState(['']);

    const [searchResults, setSearchResults] = useState<any[]>([]);

    const { selectedDate } = useReservation();

    useEffect(() => {
        async function getCities() {
            let loc = await getAllFlightLocations();
            setLocations(['...................', ...loc]);
            setTo('');
            setFrom('');
        }

        getCities();
    }, []);

    async function handleSearch() {
        const results = await searchFlight(from, to, selectedDate);
        setSearchResults(results);
    }

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
                        value={from}
                        onChange={(e) => {
                            const selected = locations.find(
                                (loc) => loc === e.target.value
                            );
                            if (selected) setFrom(selected);
                        }}
                        className="ml-4 font-medium text-[18px] text-cyan-500 focus:outline-none cursor-pointer"
                    >
                        {locations
                            .filter((loc) => loc !== to)
                            .map((loc) => {
                                return (
                                    <option
                                        key={loc}
                                        value={loc}
                                        className="font-semibold text-cyan-600"
                                    >
                                        {loc}
                                    </option>
                                );
                            })}
                    </select>
                    <div className="ml-5 text-[13px] text-cyan-800 font-bold ">
                        {/* {from.country} */}
                    </div>
                </div>
                <div
                    className="w-64 md:w-56 lg:w-70 h-27 bg-white rounded-2xl
                transition-all
                shadow-[0_4px_8px_rgba(0,154,206,0.3)] hover:shadow-[0_6px_24px_rgba(0,154,206,.6)] 
                "
                >
                    <div className="ml-5 mt-5 text-gray-500">To</div>
                    <select
                        value={to}
                        onChange={(e) => {
                            const selected = locations.find(
                                (loc) => loc === e.target.value
                            );
                            if (selected) setTo(selected);
                        }}
                        className="ml-4 font-medium text-[18px] text-cyan-500 focus:outline-none cursor-pointer"
                    >
                        {locations
                            .filter((loc) => loc !== from)
                            .map((loc) => {
                                return (
                                    <option
                                        key={loc}
                                        value={loc}
                                        className="font-semibold text-cyan-600"
                                    >
                                        {loc}
                                    </option>
                                );
                            })}
                    </select>
                    <div className="ml-5 text-[13px] text-cyan-800 font-bold ">
                        {/* {to.country} */}
                    </div>
                </div>
            </div>

            <div className="mt-10"></div>
            {searchResults &&
                searchResults.map((res) => (
                    <SearchResult key={res.id} res={res} />
                ))}

            <div className="relative flex flex-row justify-center mt-5">
                <button
                    onClick={handleSearch}
                    className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-14 shadow-md shadow-cyan-300 rounded-2xl font-bold text-xl cursor-pointer text-cyan-600
                                    hover:text-xl transition-all duration-300
                                    hover:bg-cyan-300 mt-5"
                >
                    <span>
                        <FaSearch size={20} />
                    </span>
                    Search Flights
                </button>
            </div>

            <div className="relative z-10 flex flex-row gap-5 justify-center mb-4 mt-20">
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
