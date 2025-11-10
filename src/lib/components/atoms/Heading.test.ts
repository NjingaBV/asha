import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Heading from './Heading.svelte';

describe('Heading', () => {
	describe('Rendu de base', () => {
		it('devrait rendre un h1 par défaut', () => {
			render(Heading, { props: { children: 'Titre' } });
			const heading = screen.getByRole('heading', { level: 1 });
			expect(heading).toBeInTheDocument();
			expect(heading.textContent).toBe('Titre');
		});

		it('devrait rendre le bon niveau de titre', () => {
			for (let level = 1; level <= 6; level++) {
				const { container } = render(Heading, {
					props: { level: level as 1 | 2 | 3 | 4 | 5 | 6, children: `Niveau ${level}` }
				});
				const heading = container.querySelector(`h${level}`);
				expect(heading).toBeInTheDocument();
				expect(heading?.textContent).toBe(`Niveau ${level}`);
			}
		});
	});

	describe('Tailles', () => {
		it('devrait appliquer la taille base par défaut', () => {
			render(Heading, { props: { children: 'Base' } });
			const heading = screen.getByRole('heading');
			expect(heading.className).toContain('text-base');
		});

		it('devrait appliquer les différentes tailles', () => {
			const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] as const;

			sizes.forEach((size) => {
				const { container } = render(Heading, {
					props: { size, children: `Taille ${size}` }
				});
				const heading = container.querySelector('h1');
				expect(heading?.className).toContain(`text-${size}`);
			});
		});

		it('devrait appliquer les très grandes tailles', () => {
			const largeSizes = ['7xl', '8xl', '9xl'] as const;

			largeSizes.forEach((size) => {
				const { container } = render(Heading, {
					props: { size, children: `Grande taille ${size}` }
				});
				const heading = container.querySelector('h1');
				expect(heading?.className).toContain(`text-${size}`);
			});
		});
	});

	describe('Poids de police', () => {
		it('devrait appliquer le poids normal par défaut', () => {
			render(Heading, { props: { children: 'Normal' } });
			const heading = screen.getByRole('heading');
			expect(heading.className).toContain('font-normal');
		});

		it('devrait appliquer les différents poids', () => {
			const weights = ['light', 'normal', 'medium', 'semibold', 'bold', 'black'] as const;

			weights.forEach((weight) => {
				const { container } = render(Heading, {
					props: { weight, children: `Poids ${weight}` }
				});
				const heading = container.querySelector('h1');
				expect(heading?.className).toContain(`font-${weight}`);
			});
		});
	});

	describe('Couleurs', () => {
		it('devrait appliquer text-slate-900 par défaut', () => {
			render(Heading, { props: { children: 'Couleur' } });
			const heading = screen.getByRole('heading');
			expect(heading.className).toContain('text-slate-900');
		});

		it('devrait appliquer une couleur personnalisée', () => {
			render(Heading, { props: { color: 'text-blue-600', children: 'Bleu' } });
			const heading = screen.getByRole('heading');
			expect(heading.className).toContain('text-blue-600');
		});
	});

	describe('Alignement', () => {
		it('devrait aligner à gauche par défaut', () => {
			render(Heading, { props: { children: 'Gauche' } });
			const heading = screen.getByRole('heading');
			expect(heading.className).toContain('text-left');
		});

		it('devrait appliquer les différents alignements', () => {
			const aligns = ['left', 'center', 'right', 'justify'] as const;

			aligns.forEach((align) => {
				const { container } = render(Heading, {
					props: { align, children: `Aligné ${align}` }
				});
				const heading = container.querySelector('h1');
				expect(heading?.className).toContain(`text-${align}`);
			});
		});
	});

	describe('Interlignage (leading)', () => {
		it('ne devrait pas avoir de leading par défaut', () => {
			render(Heading, { props: { children: 'Sans leading' } });
			const heading = screen.getByRole('heading');
			expect(heading.className).not.toContain('leading-');
		});

		it('devrait appliquer les différents interlignes', () => {
			const leadings = ['tight', 'snug', 'normal', 'relaxed', 'loose'] as const;

			leadings.forEach((leading) => {
				const { container } = render(Heading, {
					props: { leading, children: `Leading ${leading}` }
				});
				const heading = container.querySelector('h1');
				expect(heading?.className).toContain(`leading-${leading}`);
			});
		});
	});

	describe('Espacement des lettres (tracking)', () => {
		it('ne devrait pas avoir de tracking par défaut', () => {
			render(Heading, { props: { children: 'Sans tracking' } });
			const heading = screen.getByRole('heading');
			expect(heading.className).not.toContain('tracking-');
		});

		it('devrait appliquer les différents espacements', () => {
			const trackings = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'] as const;

			trackings.forEach((tracking) => {
				const { container } = render(Heading, {
					props: { tracking, children: `Tracking ${tracking}` }
				});
				const heading = container.querySelector('h1');
				expect(heading?.className).toContain(`tracking-${tracking}`);
			});
		});
	});

	describe('Classes personnalisées', () => {
		it('devrait appliquer des classes personnalisées', () => {
			render(Heading, {
				props: { class: 'custom-heading special', children: 'Personnalisé' }
			});
			const heading = screen.getByRole('heading');
			expect(heading.className).toContain('custom-heading');
			expect(heading.className).toContain('special');
		});

		it('devrait combiner les classes personnalisées avec les classes par défaut', () => {
			render(Heading, {
				props: {
					size: 'xl',
					weight: 'bold',
					class: 'custom',
					children: 'Combiné'
				}
			});
			const heading = screen.getByRole('heading');
			expect(heading.className).toContain('text-xl');
			expect(heading.className).toContain('font-bold');
			expect(heading.className).toContain('custom');
		});
	});

	describe('Configuration complexe', () => {
		it('devrait appliquer plusieurs propriétés simultanément', () => {
			render(Heading, {
				props: {
					level: 2,
					size: '4xl',
					weight: 'bold',
					color: 'text-primary',
					align: 'center',
					leading: 'tight',
					tracking: 'wide',
					class: 'mb-4',
					children: 'Titre complet'
				}
			});

			const heading = screen.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading.className).toContain('text-4xl');
			expect(heading.className).toContain('font-bold');
			expect(heading.className).toContain('text-primary');
			expect(heading.className).toContain('text-center');
			expect(heading.className).toContain('leading-tight');
			expect(heading.className).toContain('tracking-wide');
			expect(heading.className).toContain('mb-4');
		});
	});
});
