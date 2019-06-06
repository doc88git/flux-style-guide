const { colors, fontFamily } = require("tailwindcss/defaultTheme");

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
    }
  },
  experiments: {
    shadowLookup: true
  }
};
