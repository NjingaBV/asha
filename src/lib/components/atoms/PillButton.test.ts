import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import PillButton from './PillButton.svelte';

describe('PillButton', () => {
	describe('Rendu de base', () => {
		it('devrait rendre un bouton avec un label', () => {
			render(PillButton, { props: { label: 'Cliquez-moi' } });
			expect(screen.getByRole('button', { name: 'Cliquez-moi' })).toBeInTheDocument();
		});

		it('devrait rendre un lien quand href est fourni', () => {
			render(PillButton, { props: { href: '/test', label: 'Lien' } });
			const link = screen.getByRole('link', { name: 'Lien' });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', '/test');
		});
	});

	describe('Tons de couleur', () => {
		it('devrait appliquer le ton primary par défaut', () => {
			const { container } = render(PillButton, { props: { label: 'Primary' } });
			const button = container.querySelector('button');
			expect(button?.className).toContain('bg-[#0a84ff]');
			expect(button?.className).toContain('text-white');
		});

		it('devrait appliquer le ton secondary', () => {
			const { container } = render(PillButton, {
				props: { tone: 'secondary', label: 'Secondary' }
			});
			const button = container.querySelector('button');
			expect(button?.className).toContain('bg-white');
			expect(button?.className).toContain('text-black');
			expect(button?.className).toContain('border');
		});

		it('devrait appliquer le ton dark', () => {
			const { container } = render(PillButton, {
				props: { tone: 'dark', label: 'Dark' }
			});
			const button = container.querySelector('button');
			expect(button?.className).toContain('bg-black');
			expect(button?.className).toContain('text-white');
		});
	});

	describe('Tailles', () => {
		it('devrait appliquer la taille md par défaut', () => {
			const { container } = render(PillButton, { props: { label: 'Medium' } });
			const button = container.querySelector('button');
			expect(button?.className).toContain('px-4');
			expect(button?.className).toContain('py-2');
		});

		it('devrait appliquer la taille sm', () => {
			const { container } = render(PillButton, {
				props: { size: 'sm', label: 'Small' }
			});
			const button = container.querySelector('button');
			expect(button?.className).toContain('px-3');
			expect(button?.className).toContain('py-1');
			expect(button?.className).toContain('text-sm');
		});

		it('devrait appliquer la taille lg', () => {
			const { container } = render(PillButton, {
				props: { size: 'lg', label: 'Large' }
			});
			const button = container.querySelector('button');
			expect(button?.className).toContain('px-6');
			expect(button?.className).toContain('py-3');
			expect(button?.className).toContain('text-lg');
		});
	});

	describe('États', () => {
		it('devrait être désactivé quand disabled est true', () => {
			render(PillButton, { props: { disabled: true, label: 'Désactivé' } });
			const button = screen.getByRole('button');
			expect(button).toBeDisabled();
			expect(button.className).toContain('opacity-50');
		});

		it('devrait désactiver un lien avec aria-disabled', () => {
			const { container } = render(PillButton, {
				props: { href: '/test', disabled: true, label: 'Lien désactivé' }
			});
			const link = container.querySelector('a');
			expect(link).toHaveAttribute('aria-disabled', 'true');
			expect(link).toHaveAttribute('tabindex', '-1');
			expect(link?.className).toContain('pointer-events-none');
		});
	});

	describe('Largeur complète', () => {
		it('ne devrait pas avoir de largeur complète par défaut', () => {
			const { container } = render(PillButton, { props: { label: 'Normal' } });
			const button = container.querySelector('button');
			expect(button?.className).not.toContain('w-full');
		});

		it('devrait avoir une largeur complète quand fullWidth est true', () => {
			const { container } = render(PillButton, {
				props: { fullWidth: true, label: 'Full' }
			});
			const button = container.querySelector('button');
			expect(button?.className).toContain('w-full');
		});
	});

	describe('Forme', () => {
		it('devrait toujours être arrondi en pilule', () => {
			const { container } = render(PillButton, { props: { label: 'Pill' } });
			const button = container.querySelector('button');
			expect(button?.className).toContain('rounded-full');
		});
	});

	describe('Accessibilité', () => {
		it('devrait avoir les attributs focus-visible', () => {
			const { container } = render(PillButton, { props: { label: 'Focus' } });
			const button = container.querySelector('button');
			expect(button?.className).toContain('focus-visible:outline-none');
			expect(button?.className).toContain('focus-visible:ring-2');
		});

		it('devrait avoir le bon type de bouton', () => {
			render(PillButton, { props: { label: 'Button' } });
			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('type', 'button');
		});
	});
});
