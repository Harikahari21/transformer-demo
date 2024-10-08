/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20679D",
        // secondary: "#0EA861",
        facebook: "#4267B2",
        instagram: "#bc2a8d",
        twitter: "#1da1f2",
        linkedin: "#0077b5",
        pinterest: "#E60023",
        whatsapp: "#25d366",
        youtube: "#cd201f",
        light: "#EFF6FF",
        dark: "#0e0e23",
        // "pink-blue": "#6259ca",
      },
      fontSize: {
        small: "15px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "shadow-primary": "[0_0.25rem_1.125rem_rgba(75,70,92,0.1)]",
      },
      textColor: {
        "primary-text": "#5d596c",
      },
    },
  },
  plugins: [],
};
