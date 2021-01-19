module.exports = {
    purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                blue: {
                    DEFAULT: '#2f45c5',
                    light: '#9babc5', //màu chữ
                },
                gray: {
                    darkest: '#151515',
                    dark: '#1b1b1b',
                    DEFAULT: '#333436',
                    light: '#434448', //màu border
                    lightest: '#717171',
                },
                progress: {
                    0: '#333436',
                    1: '#717171',
                    2: '#cd45a2',
                    3: '#8145cd',
                    4: '#4d53d9',
                    5: '#13cd3c',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
