'use client';
import NavigationButton from '@/components/NavigationButton';
import SearchResult, {
    SearchResultProps,
} from '@/components/search-results/SearchResult';
import SearchFlightsButton from '@/components/SearchFlightsButton';
import { useReservation } from '@/contexts/ReservationContext';
import { getAllFlightLocations, searchFlight } from '@/lib/db/supabase';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchFlight = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const [startCities, setStartCities] = useState(['']);
    const [endCities, setEndCities] = useState(['']);

    const [isLoading, setIsLoading] = useState(false);

    const [searchResults, setSearchResults] = useState<SearchResultProps[]>([]);

    const { selectedDate, flightId } = useReservation();

    useEffect(() => {
        async function getCities() {
            let loc = await getAllFlightLocations();
            setStartCities(['...................', ...loc.startCities]);
            setEndCities(['...................', ...loc.endCities]);
            setFrom('');
            setTo('');
        }

        getCities();
    }, []);

    async function handleSearch() {
        setIsLoading(true);
        const results = await searchFlight(from, to, selectedDate);
        console.log(results);
        setSearchResults(results);
        setIsLoading(false);
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
                            const selected = startCities.find(
                                (loc) => loc === e.target.value
                            );
                            if (selected) setFrom(selected);
                            if (selected === '...................') setFrom('');
                        }}
                        className="ml-4 font-medium text-[18px] text-cyan-500 focus:outline-none cursor-pointer"
                    >
                        {startCities
                            .filter(
                                (loc) =>
                                    loc !== to || loc === '...................'
                            )
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
                            const selected = endCities.find(
                                (loc) => loc === e.target.value
                            );
                            if (selected) setTo(selected);
                            if (selected === '...................') setTo('');
                        }}
                        className="ml-4 font-medium text-[18px] text-cyan-500 focus:outline-none cursor-pointer"
                    >
                        {endCities
                            .filter(
                                (loc) =>
                                    loc !== from ||
                                    loc === '...................'
                            )
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

            <SearchFlightsButton
                handleSearch={handleSearch}
                isLoading={isLoading}
            />

            <div className="mt-10"></div>
            {searchResults &&
                searchResults.map((res) => (
                    <SearchResult
                        key={res.id}
                        id={res.id}
                        flight_date={res.flight_date}
                        flight_duration={res.flight_duration}
                        start_location={res.start_location}
                        end_location={res.end_location}
                        price={res.price}
                    />
                ))}

            <div className="relative z-10 flex flex-row gap-5 justify-center mb-4 mt-20">
                <NavigationButton
                    label="Back"
                    iconPosition="left"
                    route="/reservations/date"
                />
                <NavigationButton
                    disabled={flightId === ''}
                    label="Next"
                    iconPosition="right"
                    route="/reservations/select-seat"
                />
            </div>
        </div>
    );
};

export default SearchFlight;
