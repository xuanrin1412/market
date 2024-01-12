/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                40: '3.75rem',
            },
            fontFamily: {
                tinos: ['"Tinos"', ...defaultTheme.fontFamily.sans],
                CormorantGaramond: [
                    '"Cormorant Garamond"',
                    ...defaultTheme.fontFamily.sans,
                ],
                SpaceMono: ['"Space Mono"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
