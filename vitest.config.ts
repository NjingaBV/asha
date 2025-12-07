import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		svelte({
			hot: !process.env.VITEST,
			compilerOptions: {
				dev: !process.env.VITEST,
				hydratable: true
			}
		}),
		tailwindcss()
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: [],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: ['node_modules/', 'src/stories', 'src/routes', '**/*.stories.*', '**/*.spec.*']
		}
	},
	resolve: {
		conditions: ['browser'],
		alias: {
			'@': resolve(__dirname, './src'),
			$lib: resolve(__dirname, './src/lib')
		}
	}
});
