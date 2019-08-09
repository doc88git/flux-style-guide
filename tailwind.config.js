const { colors, fontFamily, boxShadow } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ["primary-light"]: "var(--color-primary-light)",
        ["primary-dark"]: "var(--color-primary-dark)",
        ["secondary-light"]: "var(--color-secondary-light)",
        ["secondary-dark"]: "var(--color-secondary-dark)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        black: "#000000",
        White: "#FFFFFF",
        gray: {
          ...colors.gray,
          default: colors.gray[500]
        },
        red: {
          ...colors.red,
          default: colors.red[500]
        },
        orange: {
          ...colors.orange,
          default: colors.orange[500]
        },
        yellow: {
          ...colors.yellow,
          default: colors.yellow[500]
        },
        green: {
          ...colors.green,
          default: colors.green[500]
        },
        teal: {
          ...colors.teal,
          default: colors.teal[500]
        },
        blue: {
          ...colors.blue,
          default: colors.blue[500]
        },
        indigo: {
          ...colors.indigo,
          default: colors.indigo[500]
        },
        purple: {
          ...colors.purple,
          default: colors.purple[500]
        },
        pink: {
          ...colors.pink,
          default: colors.pink[500]
        }
      }
    },

    fontFamily: {
      ...fontFamily,
      primary: [
        "Titillium Web",
        "-apple-system",
        "BlinkMacSystemFont",
        "sans-serif"
      ],
      secondary: ["Roboto", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
    },

    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      xxl: '0 25px 50px -12px rgba(0, 0, 0, .25)',
      xxxl: '0 35px 60px -15px rgba(0, 0, 0, .3)',
      xxxl: '10px 10px 60px rgba(68, 68, 68, 0.1)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(66,153,225,0.5)',
      focus: '0 0 0 3px rgba(66,153,225,0.5)',
      'none': 'none',
    }
  },
  experiments: {
    shadowLookup: true
  }
};
