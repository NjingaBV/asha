import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Card from './Card.svelte';

describe('Card', () => {
	describe('Rendu de base', () => {
		it('devrait rendre une carte avec un titre', () => {
			const { container } = render(Card, { props: { title: 'Titre de test' } });
			expect(screen.getByText('Titre de test')).toBeInTheDocument();
		});

		it('devrait rendre une carte avec un sous-titre', () => {
			render(Card, { props: { subtitle: 'Sous-titre' } });
			expect(screen.getByText('Sous-titre')).toBeInTheDocument();
		});

		it('devrait rendre une carte avec un aperçu', () => {
			render(Card, { props: { overview: 'Texte d\'aperçu' } });
			expect(screen.getByText('Texte d\'aperçu')).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('devrait afficher une image mobile', () => {
			const imgSrc = {
				mobile: '/mobile.jpg'
			};
			const { container } = render(Card, { props: { imgSrc, title: 'Avec image' } });
			const img = container.querySelector('img');
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute('src', '/mobile.jpg');
		});

		it('devrait afficher des sources responsive', () => {
			const imgSrc = {
				mobile: '/mobile.jpg',
				tablet: '/tablet.jpg',
				desktop: '/desktop.jpg'
			};
			const { container } = render(Card, { props: { imgSrc, title: 'Responsive' } });
			const sources = container.querySelectorAll('source');
			expect(sources).toHaveLength(2);
		});

		it('devrait appliquer mix-blend-screen si mixColor est true', () => {
			const imgSrc = { mobile: '/image.jpg' };
			const { container } = render(Card, {
				props: { imgSrc, mixColor: true, title: 'Mix' }
			});
			const img = container.querySelector('img');
			expect(img?.classList.contains('mix-blend-screen')).toBe(true);
		});
	});

	describe('Bouton', () => {
		it('devrait afficher un bouton si buttonName et buttonLink sont fournis', () => {
			render(Card, {
				props: { buttonName: 'Cliquer', buttonLink: '/link', title: 'Carte' }
			});
			expect(screen.getByRole('link', { name: 'Cliquer' })).toBeInTheDocument();
		});

		it('ne devrait pas afficher de bouton si buttonName est absent', () => {
			render(Card, { props: { buttonLink: '/link', title: 'Sans bouton' } });
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
		});

		it('devrait appliquer la couleur de fond au bouton', () => {
			const { container } = render(Card, {
				props: {
					buttonName: 'Action',
					buttonLink: '/link',
					backgroundColor: '#ff0000',
					title: 'Coloré'
				}
			});
			const link = screen.getByRole('link');
			expect(link).toHaveStyle({ backgroundColor: '#ff0000' });
		});
	});

	describe('Apparence', () => {
		it('devrait être arrondi par défaut', () => {
			const { container } = render(Card, { props: { title: 'Arrondi' } });
			const card = container.querySelector('div');
			expect(card?.classList.contains('rounded-2xl')).toBe(true);
		});

		it('ne devrait pas être arrondi si rounded est false', () => {
			const { container } = render(Card, {
				props: { title: 'Non arrondi', rounded: false }
			});
			const card = container.querySelector('div > div');
			expect(card?.classList.contains('rounded-2xl')).toBe(false);
		});

		it('devrait appliquer la couleur de fond', () => {
			const { container } = render(Card, {
				props: { title: 'Coloré', backgroundColor: '#123456' }
			});
			const bgDiv = container.querySelector('.bg');
			expect(bgDiv).toBeInTheDocument();
		});

		it('devrait avoir un effet hover', () => {
			const { container } = render(Card, { props: { title: 'Hover' } });
			const card = container.querySelector('div');
			expect(card?.className).toContain('hover:scale-[1.02]');
		});
	});

	describe('Texte sur image', () => {
		it('devrait afficher le texte sur l\'image par défaut', () => {
			const imgSrc = { mobile: '/img.jpg' };
			const { container } = render(Card, {
				props: { title: 'Sur image', imgSrc, buttonName: 'Action', buttonLink: '/link' }
			});
			const textContainer = container.querySelector('.absolute.w-full.h-fit.bottom-0');
			expect(textContainer).toBeInTheDocument();
		});

		it('devrait afficher le texte en dessous de l\'image si textOnImage est false', () => {
			const imgSrc = { mobile: '/img.jpg' };
			const { container } = render(Card, {
				props: {
					title: 'En dessous',
					imgSrc,
					buttonName: 'Action',
					buttonLink: '/link',
					textOnImage: false
				}
			});
			const textContainer = container.querySelector('.p-6.md\\:p-8');
			expect(textContainer).toBeInTheDocument();
		});
	});

	describe('Aspect ratio', () => {
		it('devrait avoir aspect-[4/5] avec bouton et image', () => {
			const imgSrc = { mobile: '/img.jpg' };
			const { container } = render(Card, {
				props: { imgSrc, buttonName: 'Action', buttonLink: '/link', title: 'Ratio' }
			});
			const card = container.querySelector('div');
			expect(card?.className).toContain('aspect-[4/5]');
		});

		it('devrait avoir aspect-video si isVideo est true', () => {
			const imgSrc = { mobile: '/video.jpg' };
			const { container } = render(Card, {
				props: { imgSrc, isVideo: true, title: 'Vidéo' }
			});
			const card = container.querySelector('div');
			expect(card?.className).toContain('aspect-video');
		});

		it('devrait avoir aspect-square pour les images sans vidéo ni bouton', () => {
			const imgSrc = { mobile: '/img.jpg' };
			const { container } = render(Card, {
				props: { imgSrc, title: 'Carré' }
			});
			const card = container.querySelector('div');
			expect(card?.className).toContain('aspect-square');
		});
	});

	describe('Linkable', () => {
		it('devrait rendre un lien cliquable si buttonLink est fourni sans buttonName', () => {
			render(Card, { props: { buttonLink: '/destination', title: 'Lien entier' } });
			const link = screen.getByRole('link');
			expect(link).toBeInTheDocument();
		});
	});
});
