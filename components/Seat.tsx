'use client';
import { useSeat } from '@/app/reservations/select-seat/SeatContext';
import React, { useState } from 'react';

interface SeatProps {
    label: string;
}

const Seat: React.FC<SeatProps> = ({ label }) => {
    const { selectedSeat, setSelectedSeat } = useSeat();

    return (
        <div
            onClick={() => setSelectedSeat(label)}
            className={`w-6 h-6 rounded-sm border-2 border-gray-500 flex justify-center items-center active:bg-cyan-400 hover:cursor-pointer
                       ${selectedSeat === label && ' bg-cyan-400'}
                       ${
                           selectedSeat === label
                               ? ' hover:bg-cyan-300'
                               : 'hover:bg-gray-300'
                       }
                       `}
        >
            <p className="text-[12px] font-medium select-none">{label}</p>
        </div>
    );
};

export default Seat;
