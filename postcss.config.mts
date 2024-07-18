import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import tailwindcss from "tailwindcss";

const isDev = Deno.env.get("DENO_ENV") !== "production";

const config = {
  plugins: [tailwindcss, autoprefixer, ...(!isDev ? [cssnano] : [])],
};

export default config;
