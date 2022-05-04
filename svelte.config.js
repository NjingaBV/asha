import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [
				tailwind, 
				autoprefixer
			]
		}
	}),

	kit: {
		adapter: adapter(),
		package: {
			emitTypes: true,
			exports: (filepath) => !/^_|\/_|\.d\.ts$|\.stories\.svelte$/.test(filepath),
			files: () => true
		},
	}
};

export default config;
