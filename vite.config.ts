import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte(), tailwindcss()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/lib/index.ts'),
			name: 'SvelteComponentLibrary',
			fileName: (format) => `svelte-component-library.${format}.js`
		},
		rollupOptions: {
			external: ['svelte', 'svelte/internal'],
			output: {
				globals: {
					svelte: 'Svelte'
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'$lib': resolve(__dirname, './src/lib')
		}
	}
});
