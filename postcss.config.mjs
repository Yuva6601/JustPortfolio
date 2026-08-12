import tailwindcss from "@tailwindcss/postcss";

const config = {
  plugins: [
    tailwindcss({
      optimize: false,
    }),
  ],
};

export default config;
