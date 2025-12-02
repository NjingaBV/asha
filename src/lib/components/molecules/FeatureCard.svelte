<script lang="ts">
	import Card from './Card.svelte';

	/**
	 * FeatureCard - Thin wrapper around Card with feature variant
	 * Displays side-by-side image and content (Apple Watch inspired layout)
	 *
	 * @deprecated Use Card component with variant="feature" instead
	 * @example
	 * <Card variant="feature" title="Title" image="..." />
	 */

	interface Props {
		title: string;
		description: string;
		image: string;
		imageAlt?: string;
		imagePosition?: 'left' | 'right';
		icon?: string;
		badge?: string;
		class?: string;
	}

	let {
		title,
		description,
		image,
		imageAlt = undefined,
		imagePosition = 'right',
		icon = undefined,
		badge = undefined,
		class: className = undefined
	}: Props = $props();
</script>

<Card
	variant="feature"
	{title}
	{description}
	{image}
	{imageAlt}
	{imagePosition}
	{icon}
	{badge}
	{className}
/>
