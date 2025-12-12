<script lang="ts">
	import type { Snippet } from 'svelte';
	import Heading from '$lib/atoms/Heading.svelte';
	import Text from '$lib/atoms/Text.svelte';
	import Caption from '$lib/atoms/Caption.svelte';

	interface Props {
		/** Eyebrow/label text above the title */
		eyebrow?: string;
		/** Section title */
		title?: string;
		/** Section description */
		description?: string;
		/** Heading level for the title */
		level?: 1 | 2 | 3 | 4 | 5 | 6;
		/** Text alignment */
		align?: 'left' | 'center' | 'right';
		/** Size variant */
		size?: 'sm' | 'md' | 'lg';
		/** Custom CSS classes */
		class?: string;
		/** Actions slot (buttons, links) */
		actions?: Snippet;
	}

	let {
		eyebrow,
		title,
		description,
		level = 2,
		align = 'center',
		size = 'md',
		class: className = '',
		actions
	}: Props = $props();

	const alignClasses = {
		left: 'text-left',
		center: 'text-center mx-auto',
		right: 'text-right ml-auto'
	};

	const sizeClasses = {
		sm: {
			container: 'max-w-xl mb-8',
			title: 'text-2xl md:text-3xl',
			description: 'text-base'
		},
		md: {
			container: 'max-w-2xl mb-12',
			title: 'text-3xl md:text-4xl',
			description: 'text-lg'
		},
		lg: {
			container: 'max-w-3xl mb-16',
			title: 'text-4xl md:text-5xl',
			description: 'text-xl'
		}
	};
</script>

<header class={[alignClasses[align], sizeClasses[size].container, className].join(' ')}>
	{#if eyebrow}
		<Caption class="mb-3 text-accent">{eyebrow}</Caption>
	{/if}

	{#if title}
		<Heading {level} class="{sizeClasses[size].title} font-semibold text-fg mb-4">
			{title}
		</Heading>
	{/if}

	{#if description}
		<Text class="{sizeClasses[size].description} text-fg-muted">
			{description}
		</Text>
	{/if}

	{#if actions}
		<div
			class={[
				'mt-6 flex gap-4',
				align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''
			].join(' ')}
		>
			{@render actions()}
		</div>
	{/if}
</header>
