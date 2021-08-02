module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      sidebar: "#f8f8f8",
      navbar: "#ffffff",
    }),
    textColor: (theme) => theme("colors"),
    textColor: {
      sidebar: "#707070",
      secondary: "#ffed4a",
      danger: "#e3342f",
      icons: "#566afa",
    },
    borderColor: (theme) => ({
      DEFAULT: theme("colors.gray.300", "currentColor"),
      "sidebar-divider": "#e5e5e5",
      secondary: "#ffed4a",
      danger: "#e3342f",
      icons: "#566afa",
    }),
    height: {
      "nav-height": "10vh",
      "main-height": "90vh",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
