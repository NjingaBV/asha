/**
 * Product Browser State Machine
 *
 * Generic product browsing, filtering, and cart management.
 * Replaces mac.machine.ts with brand-agnostic implementation.
 */

import { createMachine } from 'xstate';

export type ProductEvents =
	| { type: 'SELECT_PRODUCT'; productId: string }
	| { type: 'VIEW_PRODUCT_DETAILS'; productId: string }
	| { type: 'COMPARE_PRODUCTS'; productIds: string[] }
	| { type: 'FILTER_PRODUCTS'; category: string }
	| { type: 'SEARCH_PRODUCTS'; query: string }
	| { type: 'CLEAR_FILTERS' }
	| { type: 'ADD_TO_CART'; productId: string }
	| { type: 'VIEW_CART' };

export interface ProductContext {
	selectedProductId: string | null;
	filteredCategory: string | null;
	searchQuery: string;
	comparedProductIds: string[];
	cartItems: string[];
}

export const productMachine = createMachine(
	{
		id: 'productMachine',
		context: {
			selectedProductId: null,
			filteredCategory: null,
			searchQuery: '',
			comparedProductIds: [],
			cartItems: []
		} as ProductContext,
		types: {} as {
			context: ProductContext;
			events: ProductEvents;
		},
		initial: 'browsing',
		states: {
			browsing: {
				on: {
					SELECT_PRODUCT: {
						target: 'productSelected',
						actions: ['setSelectedProduct']
					},
					FILTER_PRODUCTS: {
						actions: ['setFilter']
					},
					SEARCH_PRODUCTS: {
						actions: ['setSearchQuery']
					},
					COMPARE_PRODUCTS: {
						target: 'comparing',
						actions: ['setComparedProducts']
					},
					CLEAR_FILTERS: {
						actions: ['clearFilters']
					}
				}
			},
			productSelected: {
				on: {
					VIEW_PRODUCT_DETAILS: {
						target: 'viewingDetails',
						actions: ['setSelectedProduct']
					},
					ADD_TO_CART: {
						actions: ['addToCart']
					},
					SELECT_PRODUCT: {
						actions: ['setSelectedProduct']
					}
				}
			},
			viewingDetails: {
				on: {
					ADD_TO_CART: {
						actions: ['addToCart']
					},
					SELECT_PRODUCT: {
						target: 'productSelected',
						actions: ['setSelectedProduct']
					}
				}
			},
			comparing: {
				on: {
					SELECT_PRODUCT: {
						target: 'productSelected',
						actions: ['setSelectedProduct']
					},
					COMPARE_PRODUCTS: {
						actions: ['setComparedProducts']
					},
					CLEAR_FILTERS: {
						target: 'browsing',
						actions: ['clearComparison']
					}
				}
			}
		}
	},
	{
		actions: {
			setSelectedProduct: ({ context, event }) => {
				if (event.type === 'SELECT_PRODUCT' || event.type === 'VIEW_PRODUCT_DETAILS') {
					context.selectedProductId = event.productId;
				}
			},
			setFilter: ({ context, event }) => {
				if (event.type === 'FILTER_PRODUCTS') {
					context.filteredCategory = event.category;
				}
			},
			setSearchQuery: ({ context, event }) => {
				if (event.type === 'SEARCH_PRODUCTS') {
					context.searchQuery = event.query;
				}
			},
			setComparedProducts: ({ context, event }) => {
				if (event.type === 'COMPARE_PRODUCTS') {
					context.comparedProductIds = event.productIds;
				}
			},
			addToCart: ({ context, event }) => {
				if (event.type === 'ADD_TO_CART') {
					context.cartItems.push(event.productId);
				}
			},
			clearFilters: ({ context }) => {
				context.filteredCategory = null;
				context.searchQuery = '';
			},
			clearComparison: ({ context }) => {
				context.comparedProductIds = [];
			}
		}
	}
);
