'use client';
import React, { createContext, useContext, useState } from 'react';

type ReservationContextType = {
    selectedDate: Date;
    selectedSeat: string;
    setSelectedSeat: (seat: string) => void;
    setSelectedDate: (date: Date) => void;
};

const ReservationContext = createContext<ReservationContextType | undefined>(
    undefined
);

export const ReservationProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedSeat, setSelectedSeat] = useState('');

    return (
        <ReservationContext.Provider
            value={{
                selectedDate,
                setSelectedDate,
                selectedSeat,
                setSelectedSeat,
            }}
        >
            {children}
        </ReservationContext.Provider>
    );
};

export const useReservation = () => {
    const context = useContext(ReservationContext);
    if (!context)
        throw new Error('useReservation must be used within SeatProvider');
    return context;
};
