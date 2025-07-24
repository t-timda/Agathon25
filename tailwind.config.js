export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ph: "360px",
        dt: "1440px",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"], // font-sans 쓰면 Pretendard가 나옴!
      },
    },
  },
  plugins: [],
};
