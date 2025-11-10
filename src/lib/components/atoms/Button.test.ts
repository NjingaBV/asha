import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Button from './Button.svelte';

describe('Button', () => {
	describe('Rendu de base', () => {
		it('devrait rendre un bouton avec du texte', () => {
			render(Button, { props: { children: 'Cliquez-moi' } });
			expect(screen.getByRole('button', { name: 'Cliquez-moi' })).toBeInTheDocument();
		});

		it('devrait rendre un lien quand href est fourni', () => {
			render(Button, { props: { href: '/test', children: 'Lien' } });
			const link = screen.getByRole('link', { name: 'Lien' });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', '/test');
		});

		it('devrait appliquer les classes personnalisées', () => {
			render(Button, { props: { className: 'custom-class', children: 'Bouton' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('custom-class');
		});
	});

	describe('Variantes', () => {
		it('devrait appliquer la variante primary par défaut', () => {
			render(Button, { props: { children: 'Primary' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('bg-primary');
		});

		it('devrait appliquer la variante ghost', () => {
			render(Button, { props: { variant: 'ghost', children: 'Ghost' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('bg-transparent');
		});

		it('devrait appliquer la variante outline', () => {
			render(Button, { props: { variant: 'outline', children: 'Outline' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('border');
		});

		it('devrait normaliser solid vers primary', () => {
			render(Button, { props: { variant: 'solid', children: 'Solid' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('bg-primary');
		});
	});

	describe('Tailles', () => {
		it('devrait appliquer la taille medium par défaut', () => {
			render(Button, { props: { children: 'Medium' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('px-4');
		});

		it('devrait appliquer la taille small', () => {
			render(Button, { props: { size: 'sm', children: 'Small' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('px-3');
		});

		it('devrait appliquer la taille large', () => {
			render(Button, { props: { size: 'lg', children: 'Large' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('px-5');
		});

		it('devrait normaliser les alias de taille', () => {
			render(Button, { props: { size: 'small', children: 'Petit' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('px-3');
		});
	});

	describe('Tons de couleur', () => {
		it('devrait appliquer le ton primary', () => {
			render(Button, { props: { tone: 'primary', children: 'Primary' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('bg-primary');
		});

		it('devrait appliquer le ton secondary', () => {
			render(Button, { props: { tone: 'secondary', children: 'Secondary' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('bg-secondary');
		});

		it('devrait appliquer le ton neutral', () => {
			render(Button, { props: { tone: 'neutral', children: 'Neutral' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('bg-surface');
		});
	});

	describe('États', () => {
		it('devrait être désactivé quand disabled est true', () => {
			render(Button, { props: { disabled: true, children: 'Désactivé' } });
			const button = screen.getByRole('button');
			expect(button).toBeDisabled();
		});

		it('devrait être désactivé quand loading est true', () => {
			render(Button, { props: { loading: true, children: 'Chargement' } });
			const button = screen.getByRole('button');
			expect(button).toBeDisabled();
		});

		it('devrait afficher le spinner de chargement', () => {
			render(Button, { props: { loading: true, children: 'Chargement' } });
			const spinner = document.querySelector('svg.animate-spin');
			expect(spinner).toBeInTheDocument();
		});

		it('ne devrait pas rendre de lien quand href est fourni mais disabled', () => {
			render(Button, { props: { href: '/test', disabled: true, children: 'Lien' } });
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
			expect(screen.getByRole('button')).toBeInTheDocument();
		});
	});

	describe('Apparence', () => {
		it('devrait avoir une largeur complète quand fullWidth est true', () => {
			render(Button, { props: { fullWidth: true, children: 'Full Width' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('w-full');
		});

		it('devrait être arrondi en pilule quand rounded est true', () => {
			render(Button, { props: { rounded: true, children: 'Rounded' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('rounded-full');
		});

		it('devrait appliquer une couleur personnalisée', () => {
			render(Button, { props: { color: '#ff0000', children: 'Coloré' } });
			const button = screen.getByRole('button');
			expect(button).toHaveStyle({ backgroundColor: '#ff0000' });
		});
	});

	describe('Interaction', () => {
		it('devrait appeler onClick quand cliqué', async () => {
			const user = userEvent.setup();
			const onClick = vi.fn();
			render(Button, { props: { onClick, children: 'Cliquer' } });

			const button = screen.getByRole('button');
			await user.click(button);

			expect(onClick).toHaveBeenCalledTimes(1);
		});

		it('ne devrait pas appeler onClick quand désactivé', async () => {
			const user = userEvent.setup();
			const onClick = vi.fn();
			render(Button, { props: { onClick, disabled: true, children: 'Désactivé' } });

			const button = screen.getByRole('button');
			await user.click(button);

			expect(onClick).not.toHaveBeenCalled();
		});

		it('ne devrait pas appeler onClick quand en chargement', async () => {
			const user = userEvent.setup();
			const onClick = vi.fn();
			render(Button, { props: { onClick, loading: true, children: 'Chargement' } });

			const button = screen.getByRole('button');
			await user.click(button);

			expect(onClick).not.toHaveBeenCalled();
		});
	});

	describe('Type de bouton', () => {
		it('devrait avoir le type button par défaut', () => {
			render(Button, { props: { children: 'Bouton' } });
			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('type', 'button');
		});

		it('devrait appliquer le type submit', () => {
			render(Button, { props: { type: 'submit', children: 'Soumettre' } });
			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('type', 'submit');
		});

		it('devrait appliquer le type reset', () => {
			render(Button, { props: { type: 'reset', children: 'Réinitialiser' } });
			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('type', 'reset');
		});
	});

	describe('Accessibilité', () => {
		it('devrait appliquer aria-label quand fourni', () => {
			render(Button, {
				props: { ariaLabel: 'Bouton de test', children: 'Icône' }
			});
			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('aria-label', 'Bouton de test');
		});

		it('devrait avoir les attributs focus-visible', () => {
			render(Button, { props: { children: 'Focus' } });
			const button = screen.getByRole('button');
			expect(button.className).toContain('focus-visible:outline-none');
			expect(button.className).toContain('focus-visible:ring-2');
		});
	});
});
