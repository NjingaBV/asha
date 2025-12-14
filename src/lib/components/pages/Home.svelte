<script lang="ts">
	import ProductLanding from '../templates/ProductLanding.svelte';
	import type { Product, Action } from '../../models/product.type';

	interface Props {
		/** Hero section title */
		heroTitle?: string;
		/** Hero section description */
		heroDescription?: string;
		/** Primary action button in hero */
		primaryAction?: Action;
		/** Secondary action button in hero */
		secondaryAction?: Action;
		/** Products section title */
		productsTitle?: string;
		/** Array of products to display */
		products?: Product[];
		/** Features section title */
		featuresTitle?: string;
		/** Custom CSS classes */
		className?: string;
	}

	let {
		heroTitle = 'Welcome to Asha',
		heroDescription = 'Discover our premium collection of products designed with excellence and crafted with care.',
		primaryAction = { label: 'Shop Now', href: '/products' },
		secondaryAction = { label: 'Learn More', href: '/about' },
		productsTitle = 'Featured Products',
		products = [],
		featuresTitle = 'Why Choose Asha',
		className = ''
	}: Props = $props();
</script>

<ProductLanding
	{heroTitle}
	{heroDescription}
	{primaryAction}
	{secondaryAction}
	{productsTitle}
	{products}
	{featuresTitle}
	{className}
/>
