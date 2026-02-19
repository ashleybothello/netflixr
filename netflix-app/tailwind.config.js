/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                netflix: {
                    red: '#E50914',
                    dark: '#141414',
                    light: '#e5e5e5',
                },
            },
            fontFamily: {
                netflix: ["'Netflix Sans'", "'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
            },
            animation: {
                'slide-up': 'slideUp 0.8s ease-out',
                'fade-in': 'fadeIn 1s ease-out',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
