const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ["primary-lighter"]: "var(--color-primary-lighter)",
        ["primary-dark"]: "var(--color-primary-dark)",
        ["secondary-lighter"]: "var(--color-secondary-lighter)",
        ["secondary-dark"]: "var(--color-secondary-dark)",
        white: "var(--color-white)",
        lighter: "var(--color-lighter)",
        light: "var(--color-light)",
        black: "var(--color-black)",
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
    }
  },
  experiments: {
    shadowLookup: true
  }
};
