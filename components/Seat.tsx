'use client';
import { useReservation } from '@/contexts/ReservationContext';
import React from 'react';

interface SeatProps {
    label: string;
    occupiedSeats?: string[];
}

const Seat: React.FC<SeatProps> = ({ label, occupiedSeats }) => {
    const { selectedSeat, setSelectedSeat } = useReservation();
    const isOccupied = occupiedSeats?.includes(label);

    const handleClick = () => {
        if (!isOccupied) setSelectedSeat(label);
    };

    return (
        <div
            onClick={handleClick}
            className={`w-6 h-6 rounded-sm border-2 border-gray-500 flex justify-center items-center active:bg-cyan-400
                       ${selectedSeat === label && ' bg-cyan-400'}
                       ${
                           selectedSeat === label
                               ? ' hover:bg-cyan-300'
                               : 'hover:bg-gray-300'
                       }
                       ${
                           isOccupied &&
                           'bg-red-300 hover:bg-red-300 active:bg-red-300'
                       }
                       ${
                           isOccupied
                               ? 'hover:cursor-not-allowed'
                               : 'hover:cursor-pointer'
                       }
                       `}
        >
            <p className="text-[12px] font-medium select-none">{label}</p>
        </div>
    );
};

export default Seat;
