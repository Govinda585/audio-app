module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      sidebar: "#f8f8f8",
      navbar: "#ffffff",
      danger: "#e3342f",
      mainBg: "#efefef",
      btn: "#566afa",
      post: "#61c4be",
    }),
    textColor: (theme) => theme("colors"),
    textColor: {
      sidebar: "#707070",
      secondary: "#ffed4a",
      danger: "#e3342f",
      icons: "#566afa",
      hardGray: "#727272",
      lightGray: "#565656",
      heart: "#546a79",
      facebook: "#4267B2",
      whatsApp: "#25d366",
      navbar: "#ffffff",
      twitter: "#00acee",
    },
    borderColor: (theme) => ({
      DEFAULT: theme("colors.gray.300", "currentColor"),
      "sidebar-divider": "#e5e5e5",
      secondary: "#ffed4a",
      danger: "#e3342f",
      icons: "#566afa",
      hardGray: "#727272",
    }),
    height: {
      "nav-height": "60px",
      "main-height": "90vh",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
