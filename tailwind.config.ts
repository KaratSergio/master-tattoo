import type { Config } from 'tailwindcss';

export default {
    content: [
        './page-components/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            xs: '320px',
            sm: '480px',
            xl: '1440px',
            '2xl': '1920px',
        },
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                roboto: ['var(--font-roboto)', 'sans-serif'],
                robotoMono: ['var(--font-roboto_mono)', 'monospace'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '20px',
                    sm: '20px',
                    xl: '70px',
                    '2xl': '135px',
                },
            },
            colors: {
                dark: '#3C444C',

                blue: '#1686AE',
                blue_alfa: '#1B324980',
                blue_light: '#1FACE4',
                silver: '#71A6D0',
                electric: '#13C5FC',
                white: '#FDFFFF',
                gray_sky: '#EFF7FC',
                milk: 'rgba(236, 241, 242, 0.3)',
                gray_light: 'rgba(13, 51, 82, 0.10)',
                gray_opacity: 'rgba(13, 51, 82, 0.20)',
            },
            lineHeight: {
                '36': '36px',
            },
            letterSpacing: {
                '-0-24': '-0.24px',
            },
            backgroundImage: {
                health: 'linear-gradient(90deg, #13C5FC 0%, #2E619A 100%)',
                military: 'linear-gradient(90deg, #29643D 0%, #1C4329 100%)',
                horeca: 'linear-gradient(90deg, #D90303 0%, #900404 100%)',
                sports: 'linear-gradient(90deg, #466B97 0%, #314256 100%)',
                textiles: 'linear-gradient(90deg, #FD21B2 0%, #9E0168 100%)',
                barricade: 'linear-gradient(90deg, #13C5FC 0%, #2E619A 100%)',
            },
        },
    },

    plugins: [],
} satisfies Config;
