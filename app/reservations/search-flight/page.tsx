import NavigationButton from '@/components/NavigationButton';
import Image from 'next/image';
import React from 'react';

const SearchFlight = () => {
    return (
        <div>
            <h1 className="text-cyan-500 text-3xl justify-center text-center pt-15 p-10">
                Select a destination!
            </h1>
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
