import '../src/app.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	layout: 'fullscreen',
	backgrounds: {
		default: 'light',
		values: [
			{ name: 'light', value: '#ffffff' },
			{ name: 'dark', value: '#0f172a' }
		]
	}
};

// Déco globale pour un contexte de page cohérent
export const decorators = [
	(Story) => {
		if (typeof document !== 'undefined') {
			const b = document.body;
			b.classList.add('min-h-screen', 'bg-white', 'text-slate-800');
		}
		return Story();
	}
];
