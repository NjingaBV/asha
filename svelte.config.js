import adapter from 'svelte-adapter-deno';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
	preprocess: vitePreprocess({
		postcss: {
			plugins: [tailwind, autoprefixer]
		}
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
