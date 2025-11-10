import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ProductGrid from './ProductGrid.svelte';

describe('ProductGrid', () => {
	const mockProducts = [
		{
			title: 'iPhone 15 Pro',
			subtitle: 'Nouveau',
			description: 'Le plus puissant',
			image: '/iphone.jpg',
			colors: ['Noir', 'Blanc']
		},
		{
			title: 'iPad Air',
			subtitle: 'Léger',
			description: 'Polyvalent',
			image: '/ipad.jpg',
			colors: ['Gris', 'Rose']
		},
		{
			title: 'MacBook Pro',
			subtitle: 'Pro',
			description: 'Performance maximale',
			image: '/mac.jpg',
			colors: ['Argent', 'Gris sidéral']
		}
	];

	describe('Rendu de base', () => {
		it('devrait rendre une grille vide', () => {
			const { container } = render(ProductGrid, { props: { products: [] } });
			const grid = container.querySelector('.grid');
			expect(grid).toBeInTheDocument();
		});

		it('devrait rendre tous les produits', () => {
			render(ProductGrid, { props: { products: mockProducts } });
			expect(screen.getByRole('heading', { name: 'iPhone 15 Pro' })).toBeInTheDocument();
			expect(screen.getByRole('heading', { name: 'iPad Air' })).toBeInTheDocument();
			expect(screen.getByRole('heading', { name: 'MacBook Pro' })).toBeInTheDocument();
		});

		it('devrait rendre le bon nombre de cartes', () => {
			const { container } = render(ProductGrid, { props: { products: mockProducts } });
			const cards = container.querySelectorAll('.group');
			expect(cards).toHaveLength(3);
		});
	});

	describe('Colonnes', () => {
		it('devrait avoir 3 colonnes par défaut', () => {
			const { container } = render(ProductGrid, { props: { products: mockProducts } });
			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('grid-cols-3');
		});

		it('devrait supporter 1 colonne', () => {
			const { container } = render(ProductGrid, {
				props: { products: mockProducts, columns: 1 }
			});
			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('grid-cols-1');
		});

		it('devrait supporter 2 colonnes', () => {
			const { container } = render(ProductGrid, {
				props: { products: mockProducts, columns: 2 }
			});
			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('grid-cols-2');
		});

		it('devrait supporter 4 colonnes', () => {
			const { container } = render(ProductGrid, {
				props: { products: mockProducts, columns: 4 }
			});
			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('grid-cols-4');
		});
	});

	describe('Espacement', () => {
		it('devrait avoir un espacement base par défaut', () => {
			const { container } = render(ProductGrid, { props: { products: mockProducts } });
			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('gap-6');
		});

		it('devrait supporter un espacement small', () => {
			const { container } = render(ProductGrid, {
				props: { products: mockProducts, gap: 'sm' }
			});
			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('gap-4');
		});

		it('devrait supporter un espacement large', () => {
			const { container } = render(ProductGrid, {
				props: { products: mockProducts, gap: 'lg' }
			});
			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('gap-8');
		});
	});

	describe('Props des produits', () => {
		it('devrait passer toutes les props aux cartes', () => {
			const productsWithAll = [
				{
					title: 'iPhone',
					subtitle: 'Nouveau',
					description: 'Description',
					image: '/img.jpg',
					imageAlt: 'Custom alt',
					colors: ['Noir'],
					badge: 'Best seller',
					primaryAction: { label: 'Acheter' },
					secondaryAction: { label: 'Comparer' }
				}
			];

			render(ProductGrid, { props: { products: productsWithAll } });

			expect(screen.getByRole('heading', { name: 'iPhone' })).toBeInTheDocument();
			expect(screen.getByText('Nouveau')).toBeInTheDocument();
			expect(screen.getByText('Description')).toBeInTheDocument();
			expect(screen.getByText('Best seller')).toBeInTheDocument();
			expect(screen.getByRole('button', { name: 'Acheter' })).toBeInTheDocument();
			expect(screen.getByRole('button', { name: 'Comparer' })).toBeInTheDocument();
		});

		it('devrait utiliser le titre comme imageAlt si non fourni', () => {
			const { container } = render(ProductGrid, { props: { products: mockProducts } });
			const images = container.querySelectorAll('img');
			expect(images[0]).toHaveAttribute('alt', 'iPhone 15 Pro');
		});
	});

	describe('Classes personnalisées', () => {
		it('devrait appliquer des classes personnalisées', () => {
			const { container } = render(ProductGrid, {
				props: { products: mockProducts, class: 'custom-grid' }
			});
			const grid = container.querySelector('.custom-grid');
			expect(grid).toBeInTheDocument();
		});

		it('devrait combiner les classes personnalisées avec les classes par défaut', () => {
			const { container } = render(ProductGrid, {
				props: { products: mockProducts, class: 'mb-8' }
			});
			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('grid');
			expect(grid?.className).toContain('mb-8');
		});
	});

	describe('Grille vide', () => {
		it('devrait gérer un tableau vide', () => {
			const { container } = render(ProductGrid, { props: { products: [] } });
			const cards = container.querySelectorAll('.group');
			expect(cards).toHaveLength(0);
		});
	});

	describe('Configuration complète', () => {
		it('devrait supporter toutes les options simultanément', () => {
			const { container } = render(ProductGrid, {
				props: {
					products: mockProducts,
					columns: 2,
					gap: 'lg',
					class: 'custom-product-grid'
				}
			});

			const grid = container.querySelector('.grid');
			expect(grid?.className).toContain('grid-cols-2');
			expect(grid?.className).toContain('gap-8');
			expect(grid?.className).toContain('custom-product-grid');

			const cards = container.querySelectorAll('.group');
			expect(cards).toHaveLength(3);
		});
	});
});
