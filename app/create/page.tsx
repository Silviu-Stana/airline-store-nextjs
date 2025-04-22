'use client';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '@/public/styles/dayPicker.css';
import { FaCalendarPlus } from 'react-icons/fa';
import { createFlight } from '@/lib/db/flight';
import { useRouter } from 'next/navigation';

const CreateFlightPanel = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [hour, setHour] = useState('07');
    const [minute, setMinute] = useState('00');

    const [startCity, setStartCity] = useState('');
    const [endCity, setEndCity] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');

    const [error, setError] = useState('');

    const route = useRouter();

    const handleHour = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setHour(value);
        }
    };

    const handleHourSave = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (parseInt(value) > 24 || parseInt(value) < 0) setHour('00');
        else if (value.length === 1) setHour('0' + value);
        else setHour(value);
    };

    const handleMinute = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setMinute(value);
        }
    };

    const handleMinuteSave = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (parseInt(value) > 59 || parseInt(value) < 0) setMinute('00');
        else if (value.length === 1) setMinute('0' + value);
        else setMinute(value);
    };

    const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            if (parseInt(value) > 999) setDuration('');
            else setDuration(value);
        }
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            if (parseInt(value) > 9999) setPrice('');
            else setPrice(value);
        }
    };

    const handleCreateFlight = async () => {
        if (
            startCity === '' ||
            endCity === '' ||
            hour === '' ||
            minute === '' ||
            price === '' ||
            duration === ''
        ) {
            setError('Missing required fields! Fill them in!');
            return;
        }

        if (startCity === endCity) {
            setError('Start city, and Destination city, must be different.');
            return;
        }

        const date = new Date(selectedDate);
        date.setHours(Number(hour));
        date.setMinutes(Number(minute));

        const { data, error } = await createFlight(
            startCity,
            endCity,
            date,
            price,
            duration
        );
        if (error) return;

        console.log(data);
        route.push('/');
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-cyan-400 my-5 mb-10 under">
                Create a New Flight!
            </h1>
            <div className="mb-5">
                <p className="text-xl text-cyan-500 font-semibold">
                    Start City
                </p>
                <input
                    value={startCity}
                    onChange={(e) => setStartCity(e.target.value)}
                    className="border-2 border-cyan-400 rounded-md w-90 h-10 text-xl p-3"
                />
            </div>
            <div className="mb-5">
                <p className="text-xl text-cyan-500 font-semibold">
                    Destination City
                </p>
                <input
                    value={endCity}
                    onChange={(e) => setEndCity(e.target.value)}
                    className="border-2 border-cyan-400 rounded-md w-90 h-10 text-xl p-3"
                />
            </div>
            <div className="mb-5">
                <p className="text-xl text-cyan-500 font-semibold">
                    Flight Day
                </p>
                <DayPicker
                    className="flex flex-row justify-center border-cyan-400 border-2 rounded-2xl w-90"
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
            </div>
            <div className="mb-5">
                <div className="flex flex-row gap-4 justify-around">
                    <p className="text-xl text-cyan-500 font-semibold">Hour</p>
                    <p className="text-xl text-cyan-500 font-semibold">
                        Minute
                    </p>
                </div>
                <div className="flex flex-row gap-4">
                    <input
                        maxLength={2}
                        onChange={(e) => handleHour(e)}
                        onBlur={handleHourSave}
                        value={hour}
                        inputMode="numeric"
                        className="border-2 border-cyan-400 rounded-md w-23 h-10 text-xl p-3 text-center"
                    />
                    <input
                        maxLength={2}
                        onChange={(e) => handleMinute(e)}
                        onBlur={handleMinuteSave}
                        value={minute}
                        inputMode="numeric"
                        className="border-2 border-cyan-400 rounded-md w-23 h-10 text-xl p-3 text-center"
                    />
                </div>
            </div>
            <div className="mb-5">
                <p className="text-xl text-cyan-500 font-semibold">Price</p>
                <input
                    value={price}
                    onChange={handlePriceChange}
                    className="border-2 border-cyan-400 rounded-md w-90 h-10 text-xl p-3"
                />
            </div>
            <div className="mb-5">
                <p className="flex items-center text-xl text-cyan-500 font-semibold">
                    Duration{' '}
                    <span className="ml-1.5 text-sm text-cyan-700">
                        (in minutes)
                    </span>
                </p>
                <input
                    value={duration}
                    onChange={handleDurationChange}
                    className="border-2 border-cyan-400 rounded-md w-90 h-10 text-xl p-3"
                />
            </div>
            {error && (
                <p className="text-red-500 font-medium text-lg mt-4 text-center">
                    {error}
                </p>
            )}
            <button
                onClick={handleCreateFlight}
                className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-14 py-8 shadow-md rounded-2xl font-bold text-[21px] text-cyan-500
                                hover:text-[22px] transition-all duration-300
                                hover:bg-cyan-300 mt-5"
            >
                <span className="transform">
                    <FaCalendarPlus size={25} />
                </span>
                Create Flight
            </button>
        </div>
    );
};

export default CreateFlightPanel;
