import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header', () => {
	const defaultProps = {
		logo: { title: 'Test Brand', imgUrl: '/logo.png', imgAlt: 'Logo' },
		link: '/',
		navLinks: [],
		open: false
	};

	describe('Rendu de base', () => {
		it('devrait rendre un header', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header).toBeInTheDocument();
		});

		it('devrait rendre le logo', () => {
			const { container } = render(Header, { props: defaultProps });
			const logo = container.querySelector('a[href="/"]');
			expect(logo).toBeInTheDocument();
		});

		it('devrait rendre le menu hamburger', () => {
			const { container } = render(Header, { props: defaultProps });
			const hamburger = container.querySelector('button');
			expect(hamburger).toBeInTheDocument();
		});
	});

	describe('Navigation', () => {
		it('devrait rendre les liens de navigation', () => {
			const props = {
				...defaultProps,
				navLinks: [
					{ title: 'Accueil', url: '/' },
					{ title: 'Produits', url: '/products' },
					{ title: 'À propos', url: '/about' }
				]
			};
			const { container } = render(Header, { props });
			const nav = container.querySelector('nav');
			expect(nav).toBeInTheDocument();
		});

		it('devrait avoir un lien personnalisé', () => {
			const props = {
				...defaultProps,
				link: '/home'
			};
			const { container } = render(Header, { props });
			const logoLink = container.querySelector('a[href="/home"]');
			expect(logoLink).toBeInTheDocument();
		});
	});

	describe('Apparence', () => {
		it('devrait être sticky', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header?.className).toContain('sticky');
			expect(header?.className).toContain('top-0');
		});

		it('devrait avoir un backdrop blur', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header?.className).toContain('backdrop-blur-sm');
		});

		it('devrait avoir un z-index élevé', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header?.className).toContain('z-50');
		});

		it('devrait avoir un flex layout', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header?.className).toContain('flex');
			expect(header?.className).toContain('justify-between');
			expect(header?.className).toContain('items-center');
		});
	});

	describe('Responsive', () => {
		it('devrait avoir un padding responsive', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header?.className).toContain('px-2');
			expect(header?.className).toContain('md:px-0');
		});

		it('devrait être centré sur desktop', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header?.className).toContain('container');
			expect(header?.className).toContain('md:mx-auto');
		});
	});

	describe('Scroll behavior', () => {
		it('devrait avoir une transition', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header?.className).toContain('transition-transform');
			expect(header?.className).toContain('ease-in');
		});

		it('devrait avoir une hauteur variable CSS', () => {
			const { container } = render(Header, { props: defaultProps });
			const header = container.querySelector('header');
			expect(header?.className).toContain('h-[var(--header-height)]');
		});
	});
});
