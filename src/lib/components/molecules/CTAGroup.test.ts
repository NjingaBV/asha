import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import CTAGroup from './CTAGroup.svelte';

describe('CTAGroup', () => {
	describe('Rendu de base', () => {
		it('devrait rendre un groupe vide par défaut', () => {
			const { container } = render(CTAGroup);
			const group = container.querySelector('div');
			expect(group).toBeInTheDocument();
			expect(screen.queryByRole('button')).not.toBeInTheDocument();
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
		});

		it('devrait rendre un bouton primary', () => {
			render(CTAGroup, {
				props: { primary: { label: 'Bouton principal' } }
			});
			expect(screen.getByRole('button', { name: 'Bouton principal' })).toBeInTheDocument();
		});

		it('devrait rendre un bouton secondary', () => {
			render(CTAGroup, {
				props: { secondary: { label: 'Bouton secondaire' } }
			});
			expect(screen.getByRole('button', { name: 'Bouton secondaire' })).toBeInTheDocument();
		});

		it('devrait rendre les deux boutons', () => {
			render(CTAGroup, {
				props: {
					primary: { label: 'Primary' },
					secondary: { label: 'Secondary' }
				}
			});
			expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
			expect(screen.getByRole('button', { name: 'Secondary' })).toBeInTheDocument();
		});
	});

	describe('Liens', () => {
		it('devrait rendre un lien pour le bouton primary', () => {
			render(CTAGroup, {
				props: { primary: { label: 'Lien primary', href: '/primary' } }
			});
			const link = screen.getByRole('link', { name: 'Lien primary' });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', '/primary');
		});

		it('devrait rendre un lien pour le bouton secondary', () => {
			render(CTAGroup, {
				props: { secondary: { label: 'Lien secondary', href: '/secondary' } }
			});
			const link = screen.getByRole('link', { name: 'Lien secondary' });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', '/secondary');
		});
	});

	describe('Tons', () => {
		it('devrait appliquer le ton primary par défaut au bouton primary', () => {
			const { container } = render(CTAGroup, {
				props: { primary: { label: 'Primary' } }
			});
			const button = container.querySelector('button');
			expect(button?.className).toContain('bg-[#0a84ff]');
		});

		it('devrait appliquer le ton dark au bouton primary', () => {
			const { container } = render(CTAGroup, {
				props: { primary: { label: 'Dark', tone: 'dark' } }
			});
			const button = container.querySelector('button');
			expect(button?.className).toContain('bg-black');
		});

		it('devrait appliquer le ton secondary par défaut au bouton secondary', () => {
			const { container } = render(CTAGroup, {
				props: { secondary: { label: 'Secondary' } }
			});
			const button = container.querySelector('button');
			expect(button?.className).toContain('bg-white');
			expect(button?.className).toContain('text-black');
		});
	});

	describe('Alignement', () => {
		it('devrait centrer le groupe par défaut', () => {
			const { container } = render(CTAGroup, {
				props: { primary: { label: 'Centré' } }
			});
			const group = container.querySelector('div');
			expect(group?.className).toContain('justify-center');
		});

		it('devrait aligner à gauche si align est left', () => {
			const { container } = render(CTAGroup, {
				props: { primary: { label: 'Gauche' }, align: 'left' }
			});
			const group = container.querySelector('div');
			expect(group?.className).toContain('justify-start');
		});

		it('devrait toujours avoir un espacement flex gap', () => {
			const { container } = render(CTAGroup, {
				props: { primary: { label: 'Gap' } }
			});
			const group = container.querySelector('div');
			expect(group?.className).toContain('flex');
			expect(group?.className).toContain('gap-3');
		});
	});

	describe('Configuration complexe', () => {
		it('devrait gérer une configuration complète', () => {
			render(CTAGroup, {
				props: {
					primary: { label: 'Acheter maintenant', href: '/acheter', tone: 'dark' },
					secondary: { label: 'En savoir plus', href: '/info' },
					align: 'left'
				}
			});

			const primaryLink = screen.getByRole('link', { name: 'Acheter maintenant' });
			const secondaryLink = screen.getByRole('link', { name: 'En savoir plus' });

			expect(primaryLink).toHaveAttribute('href', '/acheter');
			expect(secondaryLink).toHaveAttribute('href', '/info');
		});
	});
});
