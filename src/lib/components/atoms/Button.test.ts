import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Button from './Button.svelte';
import { createRawSnippet } from 'svelte';

describe('Button.svelte', () => {
	it('should render with default props', () => {
		render(Button, {
			props: { children: createRawSnippet(() => ({ render: () => 'Click me' })) }
		});
		const button = screen.getByRole('button', { name: 'Click me' });
		expect(button).toBeTruthy();
		expect(button.getAttribute('data-variant')).toBe('solid');
		expect(button.getAttribute('data-tone')).toBe('primary');
	});

	it('should apply variant and tone', () => {
		render(Button, {
			props: {
				variant: 'outline',
				tone: 'danger',
				children: createRawSnippet(() => ({ render: () => 'Delete' }))
			}
		});
		const button = screen.getByRole('button', { name: 'Delete' });
		expect(button.getAttribute('data-variant')).toBe('outline');
		expect(button.getAttribute('data-tone')).toBe('danger');
	});

	it('should handle loading state', () => {
		render(Button, {
			props: {
				loading: true,
				children: createRawSnippet(() => ({ render: () => 'Submit' }))
			}
		});
		const button = screen.getByRole('button');
		expect(button.getAttribute('data-loading')).toBe('true');
		expect(button.getAttribute('aria-busy')).toBe('true');
		expect(button.hasAttribute('disabled')).toBe(true);
	});

	it('should handle disabled state', () => {
		render(Button, {
			props: {
				disabled: true,
				children: createRawSnippet(() => ({ render: () => 'Disabled' }))
			}
		});
		const button = screen.getByRole('button', { name: 'Disabled' });
		expect(button.hasAttribute('disabled')).toBe(true);
		expect(button.getAttribute('data-disabled')).toBe('true');
	});

	it('should render as a link when href is provided', () => {
		render(Button, {
			props: {
				href: '/about',
				children: createRawSnippet(() => ({ render: () => 'About' }))
			}
		});
		const link = screen.getByRole('link', { name: 'About' });
		expect(link).toBeTruthy();
		expect(link.getAttribute('href')).toBe('/about');
	});
});
