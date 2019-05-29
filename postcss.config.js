module.exports = {
  plugins: {
    tailwindcss: {
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
            black: "var(--color-black)"
          }
        }
      },
      experiments: {
        shadowLookup: true
      }
    },
    autoprefixer: {}
  }
};
