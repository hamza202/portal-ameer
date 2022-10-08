/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'smUp': {'min': '576px'},
            'mdUp': {'min': '768px'},
            '3mdUp':{'min': '960px'},
            'lgUp': {'min': '992px'},
            'xlUp': {'min': '1200px'},
            'xxlUp': {'min': '1400px'},
            'xxxlUp': {'min': '1600px'},
            'xxxlDown': {'max': '1600px'},
            'xxlDown': {'max': '1400px'},
            'xlDown': {'max': '1200px'},
            'lgDown': {'max': '992px'},
            '3mdDown':{'max': '960px'},
            'mdDown': {'max': '768px'},
            'smDown': {'max': '576px'},
        },
        colors: {
            white:{
              100: '#FFFFFF',
            },
            green: {
                100: '#092633',
                200: '#143C4E',
                300: '#2B5F76',
                500: '#1BE5B7'
            },
            yellow: {
                100: '#FFCC02'
            },
            red: {
                100: '#E51B1B',
            },
            gray: {
                800: '#EBEBEB',
                900: '#F8F8F8',
            }
        },
        zIndex: {
            auto: 'auto',
            0: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
            service: '0px 20px 40px -10px rgba(0, 0, 0, 0.1)',
            none: 'none',
        },
    },
    plugins: [],
}
