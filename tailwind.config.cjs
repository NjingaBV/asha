module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './.storybook/**/*.{js,ts,svelte,html}'],
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			animation: {
				blink: 'blink 7s linear infinite',
				blob: 'blob 7s infinite'
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 }
				},
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)'
					}
				}
			}
		}
	}
};
