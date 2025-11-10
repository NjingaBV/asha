import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Paragraph from './Paragraph.svelte';

describe('Paragraph', () => {
	describe('Rendu de base', () => {
		it('devrait rendre un paragraphe avec du texte', () => {
			const { container } = render(Paragraph, {
				props: { children: 'Ceci est un paragraphe' }
			});
			const paragraph = container.querySelector('p');
			expect(paragraph).toBeInTheDocument();
			expect(paragraph?.textContent).toBe('Ceci est un paragraphe');
		});

		it('devrait rendre du contenu HTML', () => {
			const { container } = render(Paragraph, {
				props: { children: '<strong>Texte en gras</strong>' }
			});
			const paragraph = container.querySelector('p');
			expect(paragraph).toBeInTheDocument();
		});
	});
});
