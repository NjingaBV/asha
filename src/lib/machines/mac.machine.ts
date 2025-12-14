/**
 * @deprecated Use product.machine.ts instead
 *
 * This file is kept for backward compatibility only.
 * It will be removed in v1.0.0.
 *
 * Migration:
 * ```ts
 * // Before
 * import { macMachine, MacContext, MacEvents } from '$lib/machines/mac.machine';
 *
 * // After
 * import { productMachine, ProductContext, ProductEvents } from '$lib/machines/product.machine';
 * ```
 */

export {
	productMachine as macMachine,
	type ProductContext as MacContext,
	type ProductEvents as MacEvents
} from './product.machine';
