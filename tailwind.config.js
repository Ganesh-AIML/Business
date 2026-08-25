/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary':                    '#000000',
        'on-primary':                 '#ffffff',
        'primary-container':          '#131b2e',
        'on-primary-container':       '#7c839b',
        'primary-fixed':              '#dae2fd',
        'primary-fixed-dim':          '#bec6e0',
        'on-primary-fixed':           '#131b2e',
        'on-primary-fixed-variant':   '#3f465c',
        'inverse-primary':            '#bec6e0',

        'secondary':                  '#006c49',
        'on-secondary':               '#ffffff',
        'secondary-container':        '#6cf8bb',
        'on-secondary-container':     '#00714d',
        'secondary-fixed':            '#6ffbbe',
        'secondary-fixed-dim':        '#4edea3',
        'on-secondary-fixed':         '#002113',
        'on-secondary-fixed-variant': '#005236',

        'tertiary':                   '#000000',
        'on-tertiary':                '#ffffff',
        'tertiary-container':         '#001a42',
        'on-tertiary-container':      '#3980f4',
        'tertiary-fixed':             '#d8e2ff',
        'tertiary-fixed-dim':         '#adc6ff',
        'on-tertiary-fixed':          '#001a42',
        'on-tertiary-fixed-variant':  '#004395',

        'error':                      '#ba1a1a',
        'on-error':                   '#ffffff',
        'error-container':            '#ffdad6',
        'on-error-container':         '#93000a',

        'background':                 '#f7f9fb',
        'on-background':              '#191c1e',

        'surface':                    '#f7f9fb',
        'surface-dim':                '#d8dadc',
        'surface-bright':             '#f7f9fb',
        'surface-container-lowest':   '#ffffff',
        'surface-container-low':      '#f2f4f6',
        'surface-container':          '#eceef0',
        'surface-container-high':     '#e6e8ea',
        'surface-container-highest':  '#e0e3e5',
        'surface-variant':            '#e0e3e5',
        'surface-tint':               '#565e74',
        'on-surface':                 '#191c1e',
        'on-surface-variant':         '#45464d',

        'outline':                    '#76777d',
        'outline-variant':            '#c6c6cd',

        'inverse-surface':            '#2d3133',
        'inverse-on-surface':         '#eff1f3',
      },

      borderRadius: {
        DEFAULT: '0.125rem',
        lg:      '0.25rem',
        xl:      '0.5rem',
        full:    '0.75rem',
      },

      spacing: {
        'section-gap':      '80px',
        'base':             '8px',
        'margin-mobile':    '16px',
        'gutter':           '24px',
        'container-max':    '1280px',
        'margin-desktop':   '40px',
      },

      fontFamily: {
        'display-lg':        ['Montserrat', 'sans-serif'],
        'display-lg-mobile': ['Montserrat', 'sans-serif'],
        'headline-md':       ['Montserrat', 'sans-serif'],
        'headline-sm':       ['Montserrat', 'sans-serif'],
        'body-lg':           ['Inter', 'sans-serif'],
        'body-md':           ['Inter', 'sans-serif'],
        'body-sm':           ['Inter', 'sans-serif'],
        'label-bold':        ['Inter', 'sans-serif'],
      },

      fontSize: {
        'display-lg':        ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md':       ['30px', { lineHeight: '38px', fontWeight: '600' }],
        'headline-sm':       ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg':           ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md':           ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':           ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-bold':        ['14px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
      },

      maxWidth: {
        'container-max': '1280px',
      },

      boxShadow: {
        'trust':    '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
        'green-md': '0px 4px 14px 0px rgba(0, 108, 73, 0.39)',
        'green-sm': '0px 4px 6px -1px rgba(0, 108, 73, 0.2)',
      },
    },
  },
  plugins: [],
}
