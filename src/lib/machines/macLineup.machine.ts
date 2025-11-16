import { setup } from 'xstate';
import type { MacProduct } from '$lib/models';

const getProductIndex = (products: MacProduct[], slug: string) =>
	products.findIndex((product) => product.slug === slug);

export const macLineupMachine = setup({
	types: {
		context: {} as {
			products: MacProduct[];
			activeSlug: string;
			selectedColor?: string;
		},
		events: {} as
			| { type: 'SELECT_PRODUCT'; slug: string }
			| { type: 'SELECT_COLOR'; color: string }
			| { type: 'NEXT' }
			| { type: 'PREVIOUS' }
	}
}).createMachine({
	id: 'macLineup',
	context: ({ input }) => {
		const products = input?.products ?? [];
		const first = products[0];

		return {
			products,
			activeSlug: first?.slug ?? '',
			selectedColor: first?.colors?.[0]?.name
		};
	},
	on: {
		SELECT_PRODUCT: {
			guard: ({ context, event }) =>
				context.products.some((product) => product.slug === event.slug),
			actions: [
				({ context, event }) => {
					context.activeSlug = event.slug;
					const nextProduct = context.products.find(
						(product) => product.slug === event.slug
					);
					context.selectedColor = nextProduct?.colors?.[0]?.name;
				}
			]
		},
		SELECT_COLOR: {
			actions: [({ context, event }) => (context.selectedColor = event.color)]
		},
		NEXT: {
			guard: ({ context }) => context.products.length > 0,
			actions: [
				({ context }) => {
					const currentIndex = getProductIndex(context.products, context.activeSlug);
					const nextIndex =
						currentIndex >= 0 ? (currentIndex + 1) % context.products.length : 0;
					const nextProduct = context.products[nextIndex];
					context.activeSlug = nextProduct.slug;
					context.selectedColor = nextProduct.colors?.[0]?.name;
				}
			]
		},
		PREVIOUS: {
			guard: ({ context }) => context.products.length > 0,
			actions: [
				({ context }) => {
					const currentIndex = getProductIndex(context.products, context.activeSlug);
					const prevIndex =
						currentIndex > 0 ? currentIndex - 1 : context.products.length - 1;
					const prevProduct = context.products[prevIndex];
					context.activeSlug = prevProduct.slug;
					context.selectedColor = prevProduct.colors?.[0]?.name;
				}
			]
		}
	}
});
