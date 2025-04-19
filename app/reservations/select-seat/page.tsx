import NavigationButton from '@/components/NavigationButton';
import Seat from '@/components/Seat';
import Image from 'next/image';
import React from 'react';

const SearchFlight = () => {
    return (
        <div>
            <h1 className="text-cyan-500 text-3xl justify-center text-center py-3">
                Select your seat!
            </h1>
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

                <div className="flex flex-row gap-5 justify-center mb-4">
                    <NavigationButton
                        label="Back"
                        iconPosition="left"
                        route="/"
                    />
                    <NavigationButton
                        label="Next"
                        iconPosition="right"
                        route="/reservations/search-flight"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchFlight;
