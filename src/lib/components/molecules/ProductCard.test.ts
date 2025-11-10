import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import ProductCard from './ProductCard.svelte';

describe('ProductCard', () => {
	const defaultProps = {
		title: 'iPhone 15 Pro',
		subtitle: 'Nouveau',
		description: 'Le smartphone le plus puissant',
		image: '/iphone.jpg',
		imageAlt: 'iPhone 15 Pro',
		colors: [],
		primaryAction: undefined,
		secondaryAction: undefined,
		badge: undefined
	};

	describe('Rendu de base', () => {
		it('devrait rendre une carte produit avec titre', () => {
			render(ProductCard, { props: defaultProps });
			expect(screen.getByRole('heading', { name: 'iPhone 15 Pro' })).toBeInTheDocument();
		});

		it('devrait rendre le sous-titre', () => {
			render(ProductCard, { props: defaultProps });
			expect(screen.getByText('Nouveau')).toBeInTheDocument();
		});

		it('devrait rendre la description', () => {
			render(ProductCard, { props: defaultProps });
			expect(screen.getByText('Le smartphone le plus puissant')).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('devrait afficher l\'image du produit', () => {
			const { container } = render(ProductCard, { props: defaultProps });
			const img = container.querySelector('img');
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute('src', '/iphone.jpg');
			expect(img).toHaveAttribute('alt', 'iPhone 15 Pro');
		});

		it('devrait utiliser le titre comme alt si imageAlt n\'est pas fourni', () => {
			const props = { ...defaultProps, imageAlt: '' };
			const { container } = render(ProductCard, { props });
			const img = container.querySelector('img');
			expect(img).toHaveAttribute('alt', 'iPhone 15 Pro');
		});

		it('devrait avoir un effet hover sur l\'image', () => {
			const { container } = render(ProductCard, { props: defaultProps });
			const img = container.querySelector('img');
			expect(img?.className).toContain('group-hover:scale-110');
		});
	});

	describe('Badge', () => {
		it('ne devrait pas afficher de badge par défaut', () => {
			render(ProductCard, { props: defaultProps });
			expect(screen.queryByText(/nouveau/i)).toBeInTheDocument(); // Le sous-titre
		});

		it('devrait afficher un badge quand fourni', () => {
			const props = { ...defaultProps, badge: 'Exclusif' };
			const { container } = render(ProductCard, { props });
			const badge = container.querySelector('.absolute.top-5');
			expect(badge).toBeInTheDocument();
			expect(badge?.textContent).toContain('Exclusif');
		});
	});

	describe('Couleurs', () => {
		it('ne devrait pas afficher de sélecteur de couleur par défaut', () => {
			render(ProductCard, { props: defaultProps });
			expect(screen.queryByText('Couleurs :')).not.toBeInTheDocument();
		});

		it('devrait afficher le sélecteur de couleurs', () => {
			const props = { ...defaultProps, colors: ['Noir', 'Blanc', 'Bleu'] };
			render(ProductCard, { props });
			expect(screen.getByText('Couleurs :')).toBeInTheDocument();
		});

		it('devrait afficher les pastilles de couleur', () => {
			const props = { ...defaultProps, colors: ['Noir', 'Blanc', 'Bleu'] };
			const { container } = render(ProductCard, { props });
			const colorDots = container.querySelectorAll('.w-5.h-5.rounded-full');
			expect(colorDots).toHaveLength(3);
		});

		it('devrait mapper les couleurs correctement', () => {
			const props = { ...defaultProps, colors: ['Noir'] };
			const { container } = render(ProductCard, { props });
			const colorDot = container.querySelector('.bg-black');
			expect(colorDot).toBeInTheDocument();
		});
	});

	describe('Actions', () => {
		it('ne devrait pas afficher de boutons par défaut', () => {
			render(ProductCard, { props: defaultProps });
			expect(screen.queryByRole('button')).not.toBeInTheDocument();
		});

		it('devrait afficher le bouton d\'action primaire', () => {
			const props = {
				...defaultProps,
				primaryAction: { label: 'Acheter', onClick: vi.fn() }
			};
			render(ProductCard, { props });
			expect(screen.getByRole('button', { name: 'Acheter' })).toBeInTheDocument();
		});

		it('devrait afficher le bouton d\'action secondaire', () => {
			const props = {
				...defaultProps,
				secondaryAction: { label: 'En savoir plus', onClick: vi.fn() }
			};
			render(ProductCard, { props });
			expect(screen.getByRole('button', { name: 'En savoir plus' })).toBeInTheDocument();
		});

		it('devrait afficher les deux boutons', () => {
			const props = {
				...defaultProps,
				primaryAction: { label: 'Acheter', onClick: vi.fn() },
				secondaryAction: { label: 'Comparer', onClick: vi.fn() }
			};
			render(ProductCard, { props });
			expect(screen.getByRole('button', { name: 'Acheter' })).toBeInTheDocument();
			expect(screen.getByRole('button', { name: 'Comparer' })).toBeInTheDocument();
		});

		it('devrait appeler onClick pour l\'action primaire', async () => {
			const user = userEvent.setup();
			const onClick = vi.fn();
			const props = {
				...defaultProps,
				primaryAction: { label: 'Acheter', onClick }
			};
			render(ProductCard, { props });

			await user.click(screen.getByRole('button', { name: 'Acheter' }));

			expect(onClick).toHaveBeenCalledTimes(1);
		});

		it('devrait appeler onClick pour l\'action secondaire', async () => {
			const user = userEvent.setup();
			const onClick = vi.fn();
			const props = {
				...defaultProps,
				secondaryAction: { label: 'Comparer', onClick }
			};
			render(ProductCard, { props });

			await user.click(screen.getByRole('button', { name: 'Comparer' }));

			expect(onClick).toHaveBeenCalledTimes(1);
		});
	});

	describe('Apparence', () => {
		it('devrait avoir un effet hover', () => {
			const { container } = render(ProductCard, { props: defaultProps });
			const card = container.querySelector('.group');
			expect(card?.className).toContain('hover:shadow-lg');
			expect(card?.className).toContain('hover:scale-[1.02]');
		});

		it('devrait être arrondi', () => {
			const { container } = render(ProductCard, { props: defaultProps });
			const card = container.querySelector('.group');
			expect(card?.className).toContain('rounded-2xl');
		});

		it('devrait appliquer des classes personnalisées', () => {
			const props = { ...defaultProps, class: 'custom-product' };
			const { container } = render(ProductCard, { props });
			const card = container.querySelector('.group');
			expect(card?.className).toContain('custom-product');
		});
	});

	describe('Configuration complète', () => {
		it('devrait rendre une carte complète avec toutes les options', () => {
			const props = {
				...defaultProps,
				badge: 'Nouveau',
				colors: ['Noir', 'Argent', 'Or'],
				primaryAction: { label: 'Acheter maintenant', onClick: vi.fn() },
				secondaryAction: { label: 'En savoir plus', onClick: vi.fn() }
			};

			render(ProductCard, { props });

			expect(screen.getByRole('heading', { name: 'iPhone 15 Pro' })).toBeInTheDocument();
			expect(screen.getByText('Nouveau')).toBeInTheDocument();
			expect(screen.getByText('Couleurs :')).toBeInTheDocument();
			expect(screen.getByRole('button', { name: 'Acheter maintenant' })).toBeInTheDocument();
			expect(screen.getByRole('button', { name: 'En savoir plus' })).toBeInTheDocument();
		});
	});
});
