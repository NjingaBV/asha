<script lang="ts">
	import type { Snippet } from 'svelte';
	import Heading from '$lib/atoms/Heading.svelte';
	import Text from '$lib/atoms/Text.svelte';
	import Badge from '$lib/atoms/Badge.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import Icon from '$lib/atoms/Icon.svelte';

	interface Feature {
		text: string;
		included?: boolean;
	}

	interface Props {
		/** Plan name */
		name?: string;
		/** Plan description */
		description?: string;
		/** Price amount */
		price?: string;
		/** Price period (e.g., "/month") */
		period?: string;
		/** Currency symbol */
		currency?: string;
		/** Original price (for discounts) */
		originalPrice?: string;
		/** Badge text (e.g., "Popular") */
		badge?: string;
		/** List of features */
		features?: Feature[];
		/** CTA button text */
		ctaText?: string;
		/** CTA button link */
		ctaHref?: string;
		/** Whether this is the highlighted plan */
		highlighted?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** CTA click handler */
		onclick?: () => void;
		/** Custom footer content */
		footer?: Snippet;
	}

	let {
		name,
		description,
		price,
		period = '/month',
		currency = '$',
		originalPrice,
		badge,
		features = [],
		ctaText = 'Get Started',
		ctaHref,
		highlighted = false,
		class: className = '',
		onclick,
		footer
	}: Props = $props();
</script>

<article
	class={[
		'relative flex flex-col rounded-2xl p-6',
		highlighted
			? 'bg-gradient-to-b from-accent to-accent-dark text-on-accent ring-2 ring-accent shadow-xl'
			: 'bg-bg-subtle border border-border',
		className
	].join(' ')}
>
	{#if badge}
		<Badge
			class={[
				'absolute -top-3 left-1/2 -translate-x-1/2',
				highlighted ? 'bg-on-accent text-accent' : ''
			].join(' ')}
		>
			{badge}
		</Badge>
	{/if}

	<header class="text-center mb-6">
		{#if name}
			<Heading
				level={3}
				class={['text-xl font-bold mb-2', highlighted ? '' : 'text-fg'].join(' ')}
			>
				{name}
			</Heading>
		{/if}

		{#if description}
			<Text class={['text-sm', highlighted ? 'opacity-90' : 'text-fg-muted'].join(' ')}>
				{description}
			</Text>
		{/if}
	</header>

	<div class="text-center mb-6">
		{#if originalPrice}
			<span
				class={[
					'text-lg line-through mr-2',
					highlighted ? 'opacity-60' : 'text-fg-muted'
				].join(' ')}
			>
				{currency}{originalPrice}
			</span>
		{/if}
		{#if price}
			<span class={['text-4xl font-bold', highlighted ? '' : 'text-fg'].join(' ')}>
				{currency}{price}
			</span>
			{#if period}
				<span class={['text-sm', highlighted ? 'opacity-75' : 'text-fg-muted'].join(' ')}>
					{period}
				</span>
			{/if}
		{/if}
	</div>

	{#if features.length > 0}
		<ul class="flex-1 space-y-3 mb-6">
			{#each features as feature}
				<li class="flex items-start gap-2">
					<Icon
						name={feature.included !== false ? 'check' : 'x'}
						size={18}
						class={[
							'flex-shrink-0 mt-0.5',
							feature.included !== false
								? highlighted
									? 'text-on-accent'
									: 'text-success'
								: highlighted
									? 'opacity-50'
									: 'text-fg-muted'
						].join(' ')}
					/>
					<span
						class={[
							'text-sm',
							feature.included !== false
								? highlighted
									? ''
									: 'text-fg'
								: highlighted
									? 'opacity-50 line-through'
									: 'text-fg-muted line-through'
						].join(' ')}
					>
						{feature.text}
					</span>
				</li>
			{/each}
		</ul>
	{/if}

	<Button tone={highlighted ? 'secondary' : 'primary'} href={ctaHref} {onclick} class="w-full">
		{ctaText}
	</Button>

	{#if footer}
		<div class="mt-4 text-center">
			{@render footer()}
		</div>
	{/if}
</article>
