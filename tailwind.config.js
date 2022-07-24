/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                pink: '#ff43ac',
                'pink-alt': '#ff81ba',
                blue: '#299bfd',
                'blue-alt': '#59b8ff',
                red: '#ff5459',
                yellow: '#ffb85e',
                'yellow-alt': '#ffcd8c',
                green: '#8dffde',
                gray: '#2d2e2f',
                back: '#121212',
            },
        },
    },
    plugins: [],
};
