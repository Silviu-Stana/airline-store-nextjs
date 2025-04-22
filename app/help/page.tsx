'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft, FaQuestion } from 'react-icons/fa';

const HelpPanel = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center m-5 mx-10">
            <h1 className="flex font-bold justify-center text-cyan-500 text-4xl mb-8">
                <span className="mr-5">
                    <FaQuestion />
                </span>
                Help
            </h1>
            <ol className="list-decimal">
                <li className="font-bold text-xl text-cyan-500">
                    Search for Flights:
                </li>
                <p className="text-md mb-3">
                    Use the "Search Flights" feature to find available flights.
                    Select your departure and destination cities, and specify
                    your travel date to view matching results.
                </p>
                <li className="font-bold text-xl text-cyan-500">
                    Select a Flight:
                </li>
                <p className="text-md mb-3">
                    Browse the search results and choose a flight that suits
                    your schedule. Click on the flight to proceed to seat
                    selection.
                </p>
                <li className="font-bold text-xl text-cyan-500">
                    Choose Your Seat:
                </li>
                <p className="text-md mb-3">
                    After selecting a flight, pick your preferred seat from the
                    seating layout. Confirm your selection to proceed to the
                    reservation summary.
                </p>
                <li className="font-bold text-xl text-cyan-500">
                    Complete Your Reservation:
                </li>
                <p className="text-md mb-3">
                    Review your reservation details and confirm your booking.
                    You will receive a confirmation message upon successful
                    booking.
                </p>
                <li className="font-bold text-xl text-cyan-500">Navigation:</li>
                <p className="text-md mb-3">
                    Use the navigation buttons at the bottom of each page to
                    move between steps in the reservation process.
                </p>
                <li className="font-bold text-xl text-cyan-500">
                    Need Assistance?
                </li>
                <p className="text-md mb-3">
                    If you encounter any issues or have questions, feel free to
                    reach out to our support team.
                </p>
            </ol>

            <button
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-32 h-14 shadow-md rounded-full font-bold text-lg text-cyan-500
                                hover:text-xl transition-all duration-300
                                hover:bg-cyan-300 hover:text-white mt-5"
            >
                <span className="transform">
                    <FaArrowLeft size={20} />
                </span>
                Back
            </button>
        </div>
    );
};

export default HelpPanel;
