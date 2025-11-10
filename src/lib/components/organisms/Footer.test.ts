import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Footer from './Footer.svelte';

describe('Footer', () => {
	const defaultProps = {
		logo: { title: 'Test Brand', imgUrl: '/logo.png', imgAlt: 'Logo' },
		link: '/',
		brandName: 'Test Company'
	};

	describe('Rendu de base', () => {
		it('devrait rendre un footer', () => {
			const { container } = render(Footer, { props: defaultProps });
			const footer = container.querySelector('footer');
			expect(footer).toBeInTheDocument();
		});

		it('devrait rendre le logo', () => {
			const { container } = render(Footer, { props: defaultProps });
			const logo = container.querySelector('a[href="/"]');
			expect(logo).toBeInTheDocument();
		});

		it('devrait afficher le nom de la marque', () => {
			render(Footer, { props: defaultProps });
			expect(screen.getByText(/Test Company/)).toBeInTheDocument();
		});
	});

	describe('Copyright', () => {
		it('devrait afficher l\'année actuelle', () => {
			render(Footer, { props: defaultProps });
			const currentYear = new Date().getFullYear();
			expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
		});

		it('devrait afficher le symbole copyright', () => {
			render(Footer, { props: defaultProps });
			expect(screen.getByText(/©/)).toBeInTheDocument();
		});

		it('devrait afficher le texte de copyright complet', () => {
			const { container } = render(Footer, { props: defaultProps });
			const copyright = container.querySelector('.text-xs.text-gray-500');
			expect(copyright).toBeInTheDocument();
			expect(copyright?.textContent).toContain('Copyright');
		});
	});

	describe('Logo', () => {
		it('devrait avoir un lien personnalisé', () => {
			const props = {
				...defaultProps,
				link: '/home'
			};
			const { container } = render(Footer, { props });
			const logoLink = container.querySelector('a[href="/home"]');
			expect(logoLink).toBeInTheDocument();
		});
	});

	describe('Apparence', () => {
		it('devrait avoir un fond gris', () => {
			const { container } = render(Footer, { props: defaultProps });
			const footer = container.querySelector('footer');
			expect(footer?.className).toContain('bg-gray-100');
		});

		it('devrait avoir une bordure supérieure', () => {
			const { container } = render(Footer, { props: defaultProps });
			const footer = container.querySelector('footer');
			expect(footer?.className).toContain('border-t');
		});

		it('devrait avoir un padding vertical', () => {
			const { container } = render(Footer, { props: defaultProps });
			const content = container.querySelector('.px-4.py-12');
			expect(content).toBeInTheDocument();
		});
	});

	describe('Responsive', () => {
		it('devrait avoir un padding responsive', () => {
			const { container } = render(Footer, { props: defaultProps });
			const content = container.querySelector('.sm\\:px-6.lg\\:px-8');
			expect(content).toBeInTheDocument();
		});

		it('devrait avoir un padding vertical responsive', () => {
			const { container } = render(Footer, { props: defaultProps });
			const content = container.querySelector('.py-12.lg\\:py-16');
			expect(content).toBeInTheDocument();
		});

		it('devrait avoir une largeur maximale', () => {
			const { container } = render(Footer, { props: defaultProps });
			const content = container.querySelector('.max-w-7xl');
			expect(content).toBeInTheDocument();
		});

		it('devrait être centré', () => {
			const { container } = render(Footer, { props: defaultProps });
			const content = container.querySelector('.mx-auto');
			expect(content).toBeInTheDocument();
		});
	});

	describe('Layout', () => {
		it('devrait avoir un flex layout sur md et plus', () => {
			const { container } = render(Footer, { props: defaultProps });
			const innerContent = container.querySelector('.md\\:flex');
			expect(innerContent).toBeInTheDocument();
		});

		it('devrait avoir des éléments centrés verticalement', () => {
			const { container } = render(Footer, { props: defaultProps });
			const innerContent = container.querySelector('.md\\:items-center');
			expect(innerContent).toBeInTheDocument();
		});

		it('devrait justifier le contenu', () => {
			const { container } = render(Footer, { props: defaultProps });
			const innerContent = container.querySelector('.md\\:justify-between');
			expect(innerContent).toBeInTheDocument();
		});
	});
});
