export type City = 'Bucharest' | 'Sofia' | 'Paris' | 'Berlin' | 'Tokyo';

export const distances: Record<City, Record<City, number>> = {
    Bucharest: {
        Sofia: 75,
        Paris: 2100,
        Berlin: 1600,
        Tokyo: 450,
        Bucharest: 0,
    },
    Sofia: {
        Bucharest: 75,
        Paris: 2250,
        Berlin: 1500,
        Tokyo: 600,
        Sofia: 0,
    },
    Paris: {
        Bucharest: 2100,
        Sofia: 2250,
        Berlin: 1050,
        Tokyo: 2200,
        Paris: 0,
    },
    Berlin: {
        Bucharest: 1600,
        Sofia: 1500,
        Paris: 1050,
        Tokyo: 1400,
        Berlin: 0,
    },
    Tokyo: {
        Bucharest: 450,
        Sofia: 600,
        Paris: 2200,
        Berlin: 1400,
        Tokyo: 0,
    },
};
