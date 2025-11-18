<script lang="ts">
	import Card from './Card.svelte';

	/**
	 * CommerceCard - Thin wrapper around Card with mac variant
	 * Displays product with image, title, price, and CTAs
	 *
	 * @deprecated Use Card component with variant="mac" instead
	 * @example
	 * <Card variant="mac" title="MacBook" price="$1,299" image="..." />
	 */

	interface Props {
		/** Product name */
		title: string;
		/** Product tagline */
		tagline?: string;
		/** Product image */
		image: string;
		/** Image alt text */
		imageAlt?: string;
		/** Starting price */
		price?: string;
		/** New badge */
		isNew?: boolean;
		/** Color options */
		colors?: string[];
		/** Learn more link */
		learnMoreHref?: string;
		/** Buy link */
		buyHref?: string;
		/** Additional CSS classes */
		className?: string;
	}

	let {
		title,
		tagline = undefined,
		image,
		imageAlt = undefined,
		price = undefined,
		isNew = false,
		colors = [],
		learnMoreHref = '#',
		buyHref = '#',
		className = ''
	}: Props = $props();
</script>

<Card
	variant="mac"
	{title}
	{tagline}
	{image}
	{imageAlt}
	{price}
	{isNew}
	{colors}
	{learnMoreHref}
	{buyHref}
	{className}
/>
