import type { Preview } from '@storybook/svelte';
import './storybook.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: { color: /(background|color)$/i, date: /Date$/ }
		},

		layout: 'fullscreen',

		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#0f172a' }
			]
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		}
	},
	decorators: [
		(Story) => {
			if (typeof document !== 'undefined') {
				const b = document.body;
				b.classList.add('min-h-screen', 'bg-white', 'text-slate-800');
			}
			return Story();
		}
	]
};

export default preview;
