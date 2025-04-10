module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                baloo: ['"Baloo 2"', 'cursive'], // Add Baloo 2 as a custom font
            },
        },
    },
    plugins: [],
};
