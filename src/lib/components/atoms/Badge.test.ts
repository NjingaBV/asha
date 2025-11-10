import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Badge from './Badge.svelte';

describe('Badge', () => {
	describe('Rendu de base', () => {
		it('devrait rendre un badge avec un label', () => {
			render(Badge, { props: { label: 'Nouveau' } });
			expect(screen.getByText('Nouveau')).toBeInTheDocument();
		});

		it('devrait rendre un badge avec du contenu children', () => {
			render(Badge, { props: { children: 'Badge personnalisé' } });
			expect(screen.getByText('Badge personnalisé')).toBeInTheDocument();
		});
	});

	describe('Variantes', () => {
		it('devrait appliquer la variante solid par défaut', () => {
			const { container } = render(Badge, { props: { label: 'Solid' } });
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('bg-blue-600');
		});

		it('devrait appliquer la variante outline', () => {
			const { container } = render(Badge, {
				props: { variant: 'outline', label: 'Outline' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('border');
			expect(badge?.className).toContain('border-blue-600');
		});

		it('devrait appliquer la variante ghost', () => {
			const { container } = render(Badge, {
				props: { variant: 'ghost', label: 'Ghost' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('text-blue-600');
			expect(badge?.className).not.toContain('bg-');
		});
	});

	describe('Couleurs', () => {
		it('devrait appliquer la couleur primary par défaut', () => {
			const { container } = render(Badge, { props: { label: 'Primary' } });
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('blue-600');
		});

		it('devrait appliquer la couleur secondary', () => {
			const { container } = render(Badge, {
				props: { color: 'secondary', label: 'Secondary' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('slate-600');
		});

		it('devrait appliquer la couleur success', () => {
			const { container } = render(Badge, {
				props: { color: 'success', label: 'Succès' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('emerald-600');
		});

		it('devrait appliquer la couleur warning', () => {
			const { container } = render(Badge, {
				props: { color: 'warning', label: 'Attention' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('amber-600');
		});

		it('devrait appliquer la couleur danger', () => {
			const { container } = render(Badge, {
				props: { color: 'danger', label: 'Danger' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('red-600');
		});

		it('devrait appliquer la couleur neutral', () => {
			const { container } = render(Badge, {
				props: { color: 'neutral', label: 'Neutre' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('gray-900');
		});
	});

	describe('Tailles', () => {
		it('devrait appliquer la taille base par défaut', () => {
			const { container } = render(Badge, { props: { label: 'Base' } });
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('px-2.5');
			expect(badge?.className).toContain('text-xs');
		});

		it('devrait appliquer la taille small', () => {
			const { container } = render(Badge, {
				props: { badgeSize: 'sm', label: 'Small' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('px-2');
			expect(badge?.className).toContain('text-xs');
		});

		it('devrait appliquer la taille large', () => {
			const { container } = render(Badge, {
				props: { badgeSize: 'lg', label: 'Large' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('px-3');
			expect(badge?.className).toContain('text-sm');
		});
	});

	describe('Forme', () => {
		it('devrait être arrondi en pilule par défaut', () => {
			const { container } = render(Badge, { props: { label: 'Arrondi' } });
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('rounded-full');
		});

		it('devrait appliquer des coins arrondis standards', () => {
			const { container } = render(Badge, {
				props: { rounded: false, label: 'Coins' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('rounded');
			expect(badge?.className).not.toContain('rounded-full');
		});
	});

	describe('Combinaisons de couleur et variante', () => {
		it('devrait combiner success avec outline', () => {
			const { container } = render(Badge, {
				props: { color: 'success', variant: 'outline', label: 'Succès outline' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('border-emerald-600');
			expect(badge?.className).toContain('text-emerald-600');
		});

		it('devrait combiner danger avec ghost', () => {
			const { container } = render(Badge, {
				props: { color: 'danger', variant: 'ghost', label: 'Danger ghost' }
			});
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('text-red-600');
			expect(badge?.className).not.toContain('bg-');
		});
	});

	describe('Classes de base', () => {
		it('devrait toujours avoir les classes de base', () => {
			const { container } = render(Badge, { props: { label: 'Base' } });
			const badge = container.querySelector('span');
			expect(badge?.className).toContain('inline-flex');
			expect(badge?.className).toContain('items-center');
			expect(badge?.className).toContain('font-medium');
		});
	});
});
