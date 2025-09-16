/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
            extend: {
                colors: {
                ink: '#0A0A0A',
                mist: '#f8fafc',
                acid: '#22d3ee',
            },
            fontFamily: {
                sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Avenir', 'Helvetica', 'Arial'],
            },
            boxShadow: {
                glow: '0 0 0 1px rgba(34,211,238,0.3), 0 10px 30px rgba(34,211,238,0.2)'
            }
        },
    },
    plugins: [],
}