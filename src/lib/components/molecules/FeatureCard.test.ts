import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import FeatureCard from './FeatureCard.svelte';

describe('FeatureCard', () => {
	const defaultProps = {
		title: 'Performance incroyable',
		description: 'La puce A17 Pro offre des performances exceptionnelles',
		image: '/feature.jpg',
		imageAlt: 'Feature image',
		imagePosition: 'right' as const,
		icon: undefined,
		badge: undefined
	};

	describe('Rendu de base', () => {
		it('devrait rendre une carte feature avec titre', () => {
			render(FeatureCard, { props: defaultProps });
			expect(
				screen.getByRole('heading', { name: 'Performance incroyable' })
			).toBeInTheDocument();
		});

		it('devrait rendre la description', () => {
			render(FeatureCard, { props: defaultProps });
			expect(
				screen.getByText('La puce A17 Pro offre des performances exceptionnelles')
			).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('devrait afficher l\'image', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const img = container.querySelector('img');
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute('src', '/feature.jpg');
			expect(img).toHaveAttribute('alt', 'Feature image');
		});

		it('devrait utiliser le titre comme alt si imageAlt n\'est pas fourni', () => {
			const props = { ...defaultProps, imageAlt: '' };
			const { container } = render(FeatureCard, { props });
			const img = container.querySelector('img');
			expect(img).toHaveAttribute('alt', 'Performance incroyable');
		});

		it('devrait positionner l\'image à droite par défaut', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const imageContainer = container.querySelector('.relative.h-64');
			expect(imageContainer?.className).toContain('lg:order-2');
		});

		it('devrait positionner l\'image à gauche', () => {
			const props = { ...defaultProps, imagePosition: 'left' as const };
			const { container } = render(FeatureCard, { props });
			const imageContainer = container.querySelector('.relative.h-64');
			expect(imageContainer?.className).toContain('lg:order-1');
		});
	});

	describe('Badge', () => {
		it('ne devrait pas afficher de badge par défaut', () => {
			render(FeatureCard, { props: defaultProps });
			const badges = screen.queryByText(/nouveau/i);
			expect(badges).not.toBeInTheDocument();
		});

		it('devrait afficher un badge quand fourni', () => {
			const props = { ...defaultProps, badge: 'Nouvelle fonctionnalité' };
			render(FeatureCard, { props });
			expect(screen.getByText('Nouvelle fonctionnalité')).toBeInTheDocument();
		});

		it('devrait styler le badge correctement', () => {
			const props = { ...defaultProps, badge: 'Nouveau' };
			const { container } = render(FeatureCard, { props });
			const badge = container.querySelector('.bg-blue-50');
			expect(badge).toBeInTheDocument();
			expect(badge?.className).toContain('text-blue-700');
		});
	});

	describe('Icône', () => {
		it('ne devrait pas afficher d\'icône par défaut', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const iconContainer = container.querySelector('.w-14.h-14.bg-blue-50');
			expect(iconContainer).not.toBeInTheDocument();
		});

		it('devrait afficher une icône quand fournie', () => {
			const props = { ...defaultProps, icon: 'heart' };
			const { container } = render(FeatureCard, { props });
			const iconContainer = container.querySelector('.w-14.h-14.bg-blue-50');
			expect(iconContainer).toBeInTheDocument();
		});
	});

	describe('Layout', () => {
		it('devrait utiliser une grille responsive', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const grid = container.querySelector('.grid.lg\\:grid-cols-2');
			expect(grid).toBeInTheDocument();
		});

		it('devrait avoir une hauteur minimale', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const grid = container.querySelector('.min-h-\\[480px\\]');
			expect(grid).toBeInTheDocument();
		});

		it('devrait ajuster l\'ordre du contenu selon la position de l\'image', () => {
			const propsLeft = { ...defaultProps, imagePosition: 'left' as const };
			const { container: containerLeft } = render(FeatureCard, { props: propsLeft });
			const contentLeft = containerLeft.querySelector('.flex.flex-col.justify-center');
			expect(contentLeft?.className).toContain('lg:order-2');

			const propsRight = { ...defaultProps, imagePosition: 'right' as const };
			const { container: containerRight } = render(FeatureCard, { props: propsRight });
			const contentRight = containerRight.querySelector('.flex.flex-col.justify-center');
			expect(contentRight?.className).toContain('lg:order-1');
		});
	});

	describe('Apparence', () => {
		it('devrait avoir un fond blanc', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const card = container.querySelector('.bg-white');
			expect(card).toBeInTheDocument();
		});

		it('devrait être arrondi', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const card = container.querySelector('.rounded-2xl');
			expect(card).toBeInTheDocument();
		});

		it('devrait avoir une ombre', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const card = container.querySelector('.shadow-sm');
			expect(card).toBeInTheDocument();
		});

		it('devrait appliquer des classes personnalisées', () => {
			const props = { ...defaultProps, class: 'custom-feature' };
			const { container } = render(FeatureCard, { props });
			const card = container.querySelector('.custom-feature');
			expect(card).toBeInTheDocument();
		});
	});

	describe('Responsive', () => {
		it('devrait avoir un padding responsive sur le contenu', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const content = container.querySelector('.p-8.md\\:p-12.lg\\:p-14');
			expect(content).toBeInTheDocument();
		});

		it('devrait avoir une hauteur responsive pour l\'image', () => {
			const { container } = render(FeatureCard, { props: defaultProps });
			const imageContainer = container.querySelector('.h-64.md\\:h-80.lg\\:h-full');
			expect(imageContainer).toBeInTheDocument();
		});
	});

	describe('Configuration complète', () => {
		it('devrait rendre une carte complète avec toutes les options', () => {
			const props = {
				...defaultProps,
				badge: 'Nouveau',
				icon: 'heart',
				imagePosition: 'left' as const
			};

			const { container } = render(FeatureCard, { props });

			expect(
				screen.getByRole('heading', { name: 'Performance incroyable' })
			).toBeInTheDocument();
			expect(screen.getByText('Nouveau')).toBeInTheDocument();
			expect(
				screen.getByText('La puce A17 Pro offre des performances exceptionnelles')
			).toBeInTheDocument();

			const iconContainer = container.querySelector('.w-14.h-14');
			expect(iconContainer).toBeInTheDocument();

			const img = container.querySelector('img');
			expect(img).toBeInTheDocument();
		});
	});
});
