/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#bdd0fc",
        "royal-indigo": "#3F15EA",
        "vivid-red": "#EA1515",
        "peach-blush": "#fcc8bd",
        "cotton-candy": "#fcbdf2",
        "hot-pink": "#EA15BB",
        "mint-green": "#bdfcd2",
        "whisper-white": "#f6f6f6",
        "soft-gray": "#D3D3D3",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
