import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/app.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		defaultViewport: 'iphone6'
	}
};
