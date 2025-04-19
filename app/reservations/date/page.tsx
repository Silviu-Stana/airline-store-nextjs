'use client';
import NavigationButton from '@/components/NavigationButton';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '@/public/styles/dayPicker.css';

const NewReservationPanel = () => {
    const [date, setDate] = useState<Date>(new Date());
    const router = useRouter();

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
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date() }} // disables all days before today
            />
            <h2 className="flex flex-row justify-center mt-5 text-xl">
                {date && <span className="font-bold mr-2">Selected:</span>}
                {date &&
                    date.toLocaleDateString('en-US', {
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

export default NewReservationPanel;
