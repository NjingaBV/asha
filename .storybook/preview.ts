import type { Preview } from '@storybook/svelte';
import '../src/app.css'; // contient tailwind + tokens + thèmes

const preview: Preview = {
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#000000' },
				{ name: 'light', value: '#f5f5f7' }
			]
		}
	}
};

export default preview;
