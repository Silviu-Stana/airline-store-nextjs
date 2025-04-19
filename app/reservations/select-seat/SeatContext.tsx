'use client';
import React, { createContext, useContext, useState } from 'react';

type SeatContextType = {
    selectedSeat: string;
    setSelectedSeat: (seat: string) => void;
};

const SeatContext = createContext<SeatContextType | undefined>(undefined);

export const SeatProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedSeat, setSelectedSeat] = useState('');

    return (
        <SeatContext.Provider value={{ selectedSeat, setSelectedSeat }}>
            {children}
        </SeatContext.Provider>
    );
};

export const useSeat = () => {
    const context = useContext(SeatContext);
    if (!context) throw new Error('useSeat must be used within SeatProvider');
    return context;
};
