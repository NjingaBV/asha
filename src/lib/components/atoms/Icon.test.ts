import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Icon from './Icon.svelte';

describe('Icon', () => {
	describe('Rendu de base', () => {
		it('devrait rendre une icône avec un nom', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon).toBeInTheDocument();
		});

		it('ne devrait pas rendre si le nom est vide', () => {
			const { container } = render(Icon, {
				props: { name: '', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon).not.toBeInTheDocument();
		});
	});

	describe('Tailles', () => {
		it('devrait appliquer la taille base par défaut', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.className).toContain('w-5');
			expect(icon?.className).toContain('h-5');
		});

		it('devrait appliquer la taille xs', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', size: 'xs', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.className).toContain('w-3');
			expect(icon?.className).toContain('h-3');
		});

		it('devrait appliquer la taille sm', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', size: 'sm', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.className).toContain('w-4');
			expect(icon?.className).toContain('h-4');
		});

		it('devrait appliquer la taille lg', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', size: 'lg', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.className).toContain('w-6');
			expect(icon?.className).toContain('h-6');
		});

		it('devrait appliquer la taille xl', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', size: 'xl', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.className).toContain('w-8');
			expect(icon?.className).toContain('h-8');
		});

		it('devrait appliquer la taille 2xl', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', size: '2xl', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.className).toContain('w-12');
			expect(icon?.className).toContain('h-12');
		});
	});

	describe('Icônes prédéfinies', () => {
		it('devrait rendre l\'icône heart', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.innerHTML).toContain('path');
		});

		it('devrait rendre l\'icône activity', () => {
			const { container } = render(Icon, {
				props: { name: 'activity', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.innerHTML).toContain('path');
		});

		it('devrait rendre l\'icône shield', () => {
			const { container } = render(Icon, {
				props: { name: 'shield', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.innerHTML).toContain('path');
		});
	});

	describe('Classes personnalisées', () => {
		it('devrait appliquer des classes personnalisées', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', color: 'currentColor', class: 'custom-icon' }
			});
			const icon = container.querySelector('span');
			expect(icon?.className).toContain('custom-icon');
		});

		it('devrait toujours avoir les classes de base', () => {
			const { container } = render(Icon, {
				props: { name: 'heart', color: 'currentColor' }
			});
			const icon = container.querySelector('span');
			expect(icon?.className).toContain('inline-flex');
			expect(icon?.className).toContain('items-center');
			expect(icon?.className).toContain('justify-center');
		});
	});
});
