module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        extend: {
          backgroundImage: {
            "banner-bg": "url('/src/assets/images/bg.png')",
            "footer-bg": "url('/src/assets/images/footer.png')",
          },
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
