import type { Config } from 'tailwindcss';

export default {
    content: [
        './page-components/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            xs: '375px',
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
                dark_a: '#2E2C3B',
                dark_b: '#333',
                sky_blue: '#33B7EF',
                deep_blue: '#428DFF',
            },
            lineHeight: {
                '10px': '10px',
                '22px': '22px',
                '25px': '25px',
            },
            fontSize: {
                '15px': '15px',
                '20px': '20px',
                '25px': '25px',
            },
            letterSpacing: {
                '-0-24': '-0.24px',
            },
            backgroundImage: {
                a_gradient: 'linear-gradient(261deg, #33B7EF 13.79%, #6AE8D1 83.98%)',
                b_gradient:
                    'linear-gradient(180deg, #AFE7FF 0%, #E5F8FF 0.01%, #E0FFF9 100%, #E4FFFA 100%)',
                c_gradient: 'linear-gradient(180deg, #33B7EF 0%, #6AE8D1 100%)',
            },
        },
    },

    plugins: [],
} satisfies Config;
