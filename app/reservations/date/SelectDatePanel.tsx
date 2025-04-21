'use client';
import NavigationButton from '@/components/NavigationButton';
import { useReservation } from '@/contexts/ReservationContext';
import React from 'react';
import { DayPicker } from 'react-day-picker';

const SelectDatePanel = () => {
    const { selectedDate, setSelectedDate } = useReservation();

    return (
        <div>
            <h1 className="text-cyan-500 text-3xl justify-center text-center pt-20 p-10">
                When would you like to{' '}
                <span className="underline"> reserve</span> your flight?
            </h1>
            <DayPicker
                className="flex flex-row justify-center"
                mode="single"
                required={true}
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={{ before: new Date() }} // disables all days before today
            />
            <h2 className="flex flex-row justify-center mt-5 text-xl">
                {selectedDate && (
                    <span className="font-bold mr-2">Selected:</span>
                )}
                {selectedDate &&
                    selectedDate.toLocaleDateString('en-US', {
                        weekday: 'long', // full day name
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
            </h2>
            <div className="flex flex-row gap-5 justify-center">
                <NavigationButton label="Back" iconPosition="left" route="/" />
                <NavigationButton
                    label="Next"
                    iconPosition="right"
                    route="/reservations/search-flight"
                />
            </div>
        </div>
    );
};

export default SelectDatePanel;
