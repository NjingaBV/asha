import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Button from './Button.svelte';

describe('Button.svelte', () => {
	it('should have black text on a light background', () => {
		const lightColor = 'rgb(255, 255, 0)'; // Yellow
		render(Button, { props: { color: lightColor, children: 'Test Button' } });
		const button = screen.getByRole('button', { name: 'Test Button' });
		expect(button.style.color).toBe('rgb(0, 0, 0)');
	});

	it('should have white text on a dark background', () => {
		const darkColor = 'rgb(0, 0, 255)'; // Blue
		render(Button, { props: { color: darkColor, children: 'Test Button' } });
		const button = screen.getByRole('button', { name: 'Test Button' });
		expect(button.style.color).toBe('rgb(255, 255, 255)');
	});

	it('should handle hex colors correctly', () => {
		const lightHex = '#FFFF00'; // Yellow
		render(Button, { props: { color: lightHex, children: 'Test Button Light' } });
		const lightButton = screen.getByRole('button', { name: 'Test Button Light' });
		expect(lightButton.style.color).toBe('rgb(0, 0, 0)');

		const darkHex = '#0000FF'; // Blue
		render(Button, { props: { color: darkHex, children: 'Test Button Dark' } });
		const darkButton = screen.getByRole('button', { name: 'Test Button Dark' });
		expect(darkButton.style.color).toBe('rgb(255, 255, 255)');
	});
});
