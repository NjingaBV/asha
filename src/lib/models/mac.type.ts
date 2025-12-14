/**
 * @deprecated This file is deprecated. Use product.type.ts instead.
 *
 * Mac-specific types have been moved to product.type.ts as generic types.
 * Import directly from product.type.ts instead.
 *
 * Migration:
 * ```ts
 * // Before
 * import { MacProduct } from '$lib/models/mac.type';
 *
 * // After
 * import { ProductDetail } from '$lib/models/product.type';
 * ```
 *
 * This file will be removed in v1.0.0.
 */

// Re-export for backward compatibility
// Note: Aliases are already exported from product.type.ts
// This file is kept empty to avoid duplicate exports
export {};
