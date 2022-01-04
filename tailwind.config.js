module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#0B0C2A",
        "base-darker-color": "#070720",
        "header-color": "#0b0c2a",
        "search-input": "#203967",
        "hover-input": "#183d7d",
        "hover-input-dark": "#082961",
        "blue-dark": "#344462",
        "blue-light": "#1b4ba4",
      },
      boxShadow: {
        "2xl": "-1px 1px 0px 8px #0B0C2A",
      },
      spacing: {
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
