export const destinationList = [
    'Romania',
    'Bulgaria',
    'France',
    'Germany',
    'Moldova',
];

export type Country = 'Romania' | 'Bulgaria' | 'France' | 'Germany' | 'Moldova';

export const distances: Record<Country, Record<Country, number>> = {
    Romania: {
        Bulgaria: 75,
        France: 2100,
        Germany: 1600,
        Moldova: 450,
        Romania: 0,
    },
    Bulgaria: {
        Romania: 75,
        France: 2250,
        Germany: 1500,
        Moldova: 600,
        Bulgaria: 0,
    },
    France: {
        Romania: 2100,
        Bulgaria: 2250,
        Germany: 1050,
        Moldova: 2200,
        France: 0,
    },
    Germany: {
        Romania: 1600,
        Bulgaria: 1500,
        France: 1050,
        Moldova: 1400,
        Germany: 0,
    },
    Moldova: {
        Romania: 450,
        Bulgaria: 600,
        France: 2200,
        Germany: 1400,
        Moldova: 0,
    },
};
