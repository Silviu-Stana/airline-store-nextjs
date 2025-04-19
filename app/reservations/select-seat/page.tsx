'use client';
import NavigationButton from '@/components/NavigationButton';
import Seat from '@/components/Seat';
import Image from 'next/image';
import React, { useState } from 'react';
import { SeatProvider, useSeat } from './SeatContext';
import { Prefetcher } from '@/components/Prefetcher';

const SearchFlight = () => {
    const { selectedSeat } = useSeat();

    let disabled = false;
    if (selectedSeat === '') disabled = true;
    else disabled = false;

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
                            <Seat label="A1" />
                            <Seat label="A2" />
                            <Seat label="A3" />
                            <Seat label="A4" />
                            <Seat label="A5" />
                            <Seat label="A6" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Seat label="B1" />
                            <Seat label="B2" />
                            <Seat label="B3" />
                            <Seat label="B4" />
                            <Seat label="B5" />
                            <Seat label="B6" />
                        </div>
                        {/* These empty divs allow for a bit of space in between "AB" and "CD" rows */}
                        <div></div>
                        <div></div>
                        <div className="flex flex-col gap-2">
                            <Seat label="C1" />
                            <Seat label="C2" />
                            <Seat label="C3" />
                            <Seat label="C4" />
                            <Seat label="C5" />
                            <Seat label="C6" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Seat label="D1" />
                            <Seat label="D2" />
                            <Seat label="D3" />
                            <Seat label="D4" />
                            <Seat label="D5" />
                            <Seat label="D6" />
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
