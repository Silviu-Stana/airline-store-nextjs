import React from 'react';

interface SeatProps {
    label: string;
}

const Seat: React.FC<SeatProps> = ({ label }) => {
    return (
        <div className="w-6 h-6 rounded-sm border-2 border-gray-500 flex justify-center items-center hover:bg-gray-300 hover:cursor-pointer">
            <p className="text-[12px] font-medium">{label}</p>
        </div>
    );
};

export default Seat;
