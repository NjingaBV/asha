import { setup, assign } from 'xstate';
import type { MacProduct } from 'src/lib/models';

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
			| { type: 'PREVIOUS' },
		input: {} as {
			products?: MacProduct[];
		}
	},
	actions: {
		selectProduct: assign(({ context, event }) => {
			if (event.type !== 'SELECT_PRODUCT') return context;
			const nextProduct = context.products.find((product) => product.slug === event.slug);
			return {
				...context,
				activeSlug: event.slug,
				selectedColor: nextProduct?.colors?.[0]?.name
			};
		}),
		selectColor: assign(({ context, event }) => {
			if (event.type !== 'SELECT_COLOR') return context;
			return {
				...context,
				selectedColor: event.color
			};
		}),
		nextProduct: assign(({ context }) => {
			const currentIndex = getProductIndex(context.products, context.activeSlug);
			const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % context.products.length : 0;
			const nextProduct = context.products[nextIndex];
			return {
				...context,
				activeSlug: nextProduct.slug,
				selectedColor: nextProduct.colors?.[0]?.name
			};
		}),
		previousProduct: assign(({ context }) => {
			const currentIndex = getProductIndex(context.products, context.activeSlug);
			const prevIndex = currentIndex > 0 ? currentIndex - 1 : context.products.length - 1;
			const prevProduct = context.products[prevIndex];
			return {
				...context,
				activeSlug: prevProduct.slug,
				selectedColor: prevProduct.colors?.[0]?.name
			};
		})
	},
	guards: {
		hasProducts: ({ context }) => context.products.length > 0,
		productExists: ({ context, event }) =>
			event.type === 'SELECT_PRODUCT' &&
			context.products.some((product) => product.slug === event.slug)
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
			guard: 'productExists',
			actions: ['selectProduct']
		},
		SELECT_COLOR: {
			actions: ['selectColor']
		},
		NEXT: {
			guard: 'hasProducts',
			actions: ['nextProduct']
		},
		PREVIOUS: {
			guard: 'hasProducts',
			actions: ['previousProduct']
		}
	}
});
