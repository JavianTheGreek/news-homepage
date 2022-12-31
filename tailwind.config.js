/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            // primary
            "soft-red": "hsl(5, 85%, 63%)",
            "soft-orange": "hsl(35, 77%, 62%)",

            // Neutral
            "off-white": "hsl(36, 100%, 99%)",
            "grayish-blue": "hsl(233, 8%, 79%)",
            "dark-grayish-blue": "hsl(236, 13%, 42%)",
            "very-dark-blue": "hsl(240, 100%, 5%)",
        },
        extend: {},
    },
    plugins: [],
};
