/**
 * Generic Product Types
 *
 * Brand-agnostic product model for building product marketing pages.
 * Replaces Mac-specific types and removes Apple-specific dependencies.
 */

/**
 * Call-to-Action configuration
 */
export interface Action {
	label: string;
	href?: string;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'tertiary';
}

/**
 * Generic color option (no brand assumptions)
 */
export interface ColorOption {
	id?: string;
	name: string; // Generic name: "Space Gray", "Silver", "Midnight Blue"
	swatch: string; // Hex color or image URL
	hex?: string; // Hex value for programmatic use
}

/**
 * Product specification entry
 */
export interface ProductSpec {
	label: string;
	value: string;
	emphasize?: boolean;
	icon?: string;
}

/**
 * Display specifications
 */
export interface DisplaySpec {
	size?: string; // e.g., "14-inch", "16-inch"
	resolution?: string; // e.g., "2560 x 1664"
	technology?: string; // e.g., "HD Display", "High Refresh"
	brightness?: string; // e.g., "500 nits"
}

/**
 * Product category
 */
export type ProductCategory = 'laptop' | 'tablet' | 'phone' | 'audio' | 'accessory' | 'other';

/**
 * Basic Product interface (for simple cards/grids)
 */
export interface Product {
	title: string;
	subtitle?: string;
	description: string;
	colors?: ColorOption[];
	primaryAction?: Action;
	secondaryAction?: Action;
	image?: string;
	imageAlt?: string;
	badge?: string;
}

/**
 * Extended Product Model (for detailed pages)
 *
 * Use this for product detail pages, comparisons, etc.
 * All fields are optional to support different product types.
 */
export interface ProductDetail extends Product {
	// Identity
	slug?: string;
	name?: string; // Alias for title
	category?: ProductCategory;
	variant?: string; // e.g., "Pro", "Air", "Standard"

	// Marketing content
	tagline?: string; // Alias for subtitle
	startingPrice?: string;

	// Visual
	heroImage?: string; // Alias for image
	heroAlt?: string; // Alias for imageAlt
	background?: string;
	textOnDark?: boolean;

	// Specifications (generic)
	processor?: string; // e.g., "Ultra CPU", "Max CPU"
	display?: string | DisplaySpec;
	battery?: string;
	memory?: string[]; // e.g., ["8GB", "16GB", "32GB"]
	storage?: string[]; // e.g., ["256GB", "512GB", "1TB"]

	// Variants
	sizes?: string[]; // e.g., ["14-inch", "16-inch"]

	// Additional specs
	specs?: ProductSpec[];
	highlights?: string[];
	features?: string[];

	// Actions (extended)
	ctas?: {
		primary?: Action;
		secondary?: Action;
		tertiary?: Action;
	};

	// Metadata
	releaseDate?: string;
	discontinued?: boolean;
}

/**
 * Product lineup/comparison configuration
 */
export interface ProductLineup {
	title?: string;
	description?: string;
	products: (Product | ProductDetail)[];
	compareSpecs?: string[]; // Which specs to compare
}

/**
 * Product family (for family landing pages)
 */
export interface ProductFamily {
	name: string;
	tagline?: string;
	description?: string;
	products: (Product | ProductDetail)[];
	heroImage?: string;
}

/**
 * Benefit/Feature item
 */
export interface Benefit {
	icon?: string;
	title: string;
	description: string;
	link?: Action;
}

// ==============================
// Legacy Aliases (Deprecated)
// For backward compatibility with Mac-specific code
// ==============================

/**
 * @deprecated Use ProductDetail instead
 */
export type MacProduct = ProductDetail;

/**
 * @deprecated Use Action instead
 */
export type MacCTA = Action;

/**
 * @deprecated Use ColorOption instead
 */
export type MacColorOption = ColorOption;

/**
 * @deprecated Use ProductSpec instead
 */
export type MacSpec = ProductSpec;
