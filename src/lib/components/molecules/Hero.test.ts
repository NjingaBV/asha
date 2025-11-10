import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Hero from './Hero.svelte';

describe('Hero', () => {
	describe('Rendu de base', () => {
		it('devrait rendre un hero avec un titre', () => {
			render(Hero, {
				props: {
					title: 'Titre Hero',
					overview: '',
					details: '',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#ffffff'
				}
			});
			expect(screen.getByRole('heading', { name: 'Titre Hero' })).toBeInTheDocument();
		});

		it('devrait rendre un hero avec un aperçu', () => {
			render(Hero, {
				props: {
					title: '',
					overview: 'Description complète',
					details: '',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#ffffff'
				}
			});
			expect(screen.getByText('Description complète')).toBeInTheDocument();
		});

		it('devrait rendre un hero avec des détails', () => {
			render(Hero, {
				props: {
					title: '',
					overview: '',
					details: 'Nouveau produit',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#ffffff'
				}
			});
			expect(screen.getByText('Nouveau produit')).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('devrait afficher une image de fond', () => {
			const imgSrc = {
				mobile: '/mobile.jpg',
				tablet: '/tablet.jpg',
				desktop: '/desktop.jpg'
			};
			const { container } = render(Hero, {
				props: {
					title: 'Avec image',
					overview: '',
					details: '',
					imgSrc,
					callToActions: [],
					backgroundColor: '#000000'
				}
			});
			const img = container.querySelector('img');
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute('src', '/mobile.jpg');
		});

		it('devrait avoir des sources responsive', () => {
			const imgSrc = {
				mobile: '/mobile.jpg',
				tablet: '/tablet.jpg',
				desktop: '/desktop.jpg'
			};
			const { container } = render(Hero, {
				props: {
					title: 'Responsive',
					overview: '',
					details: '',
					imgSrc,
					callToActions: [],
					backgroundColor: '#000000'
				}
			});
			const sources = container.querySelectorAll('source');
			expect(sources.length).toBeGreaterThanOrEqual(2);
		});
	});

	describe('Couleur de fond', () => {
		it('devrait appliquer la couleur de fond', () => {
			const { container } = render(Hero, {
				props: {
					title: 'Coloré',
					overview: '',
					details: '',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#123456'
				}
			});
			const gradient = container.querySelector('.bg-gradient-to-t');
			expect(gradient).toBeInTheDocument();
		});

		it('devrait calculer la couleur de texte en fonction de la luminosité', () => {
			const { container } = render(Hero, {
				props: {
					title: 'Contraste',
					overview: '',
					details: '',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#ffffff'
				}
			});
			const contentDiv = container.querySelector('[style*="color"]');
			expect(contentDiv).toBeInTheDocument();
		});
	});

	describe('Call to Actions', () => {
		it('devrait afficher des boutons CTA', () => {
			const callToActions = [
				{ label: 'Acheter', url: '/buy', icon: '', color: '#0a84ff' },
				{ label: 'En savoir plus', url: '/info', icon: '', color: '#5856d6' }
			];
			render(Hero, {
				props: {
					title: 'Avec CTAs',
					overview: '',
					details: '',
					imgSrc: undefined,
					callToActions,
					backgroundColor: '#000000'
				}
			});

			expect(screen.getByText('Acheter')).toBeInTheDocument();
			expect(screen.getByText('En savoir plus')).toBeInTheDocument();
		});

		it('devrait afficher des icônes dans les CTA', () => {
			const callToActions = [
				{
					label: 'Action',
					url: '/action',
					icon: 'M12 2L2 7l10 5 10-5-10-5z',
					color: '#0a84ff'
				}
			];
			const { container } = render(Hero, {
				props: {
					title: 'Avec icône',
					overview: '',
					details: '',
					imgSrc: undefined,
					callToActions,
					backgroundColor: '#000000'
				}
			});
			const svg = container.querySelector('svg');
			expect(svg).toBeInTheDocument();
		});
	});

	describe('Line clamp', () => {
		it('devrait tronquer un texte long avec line-clamp', () => {
			const longText = 'A'.repeat(300);
			const { container } = render(Hero, {
				props: {
					title: '',
					overview: longText,
					details: '',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#ffffff'
				}
			});
			const paragraph = container.querySelector('p');
			expect(paragraph?.classList.contains('line-clamp-4')).toBe(true);
		});

		it('devrait afficher un bouton "Lire plus" pour du texte tronqué', () => {
			const longText = 'A'.repeat(300);
			render(Hero, {
				props: {
					title: '',
					overview: longText,
					details: '',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#ffffff'
				}
			});
			expect(screen.getByRole('button', { name: 'Lire plus' })).toBeInTheDocument();
		});

		it('devrait basculer le line clamp au clic', async () => {
			const user = userEvent.setup();
			const longText = 'A'.repeat(300);
			render(Hero, {
				props: {
					title: '',
					overview: longText,
					details: '',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#ffffff'
				}
			});

			const button = screen.getByRole('button', { name: 'Lire plus' });
			await user.click(button);

			expect(screen.getByRole('button', { name: 'Réduire' })).toBeInTheDocument();
		});
	});

	describe('Aspect ratio', () => {
		it('devrait avoir aspect-[9/13] pour mobile avec image', () => {
			const imgSrc = {
				mobile: '/img.jpg'
			};
			const { container } = render(Hero, {
				props: {
					title: 'Ratio mobile',
					overview: '',
					details: '',
					imgSrc,
					callToActions: [],
					backgroundColor: '#000000'
				}
			});
			const wrapper = container.querySelector('.relative.w-screen');
			expect(wrapper?.className).toContain('aspect-[9/13]');
		});

		it('devrait avoir aspect-square sans image', () => {
			const { container } = render(Hero, {
				props: {
					title: 'Sans image',
					overview: '',
					details: '',
					imgSrc: undefined,
					callToActions: [],
					backgroundColor: '#000000'
				}
			});
			const wrapper = container.querySelector('.relative.w-screen');
			expect(wrapper?.className).toContain('aspect-square');
		});
	});
});
