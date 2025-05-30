import 'react-day-picker/dist/style.css';
import '@/public/styles/dayPicker.css';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
    return {
        title: {
            default: `Choose Date`,
            template: `%s / Silviu Airline`,
        },
        description: 'High quality, reliable Airline!',
    };
};

import React from 'react';
import SelectDatePanel from './SelectDatePanel';

const DatePanel = () => {
    return <SelectDatePanel />;
};

export default DatePanel;
