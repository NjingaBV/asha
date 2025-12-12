<script lang="ts">
	import type { Snippet } from 'svelte';
	import Image from '$lib/atoms/Image.svelte';
	import Heading from '$lib/atoms/Heading.svelte';
	import Text from '$lib/atoms/Text.svelte';
	import Rating from '$lib/molecules/Rating.svelte';

	interface Props {
		/** Testimonial quote text */
		quote?: string;
		/** Author name */
		author?: string;
		/** Author title/role */
		title?: string;
		/** Author company */
		company?: string;
		/** Author avatar URL */
		avatar?: string;
		/** Star rating (1-5) */
		rating?: number;
		/** Layout variant */
		variant?: 'default' | 'compact' | 'featured';
		/** Custom CSS classes */
		class?: string;
		/** Custom content */
		children?: Snippet;
	}

	let {
		quote,
		author,
		title,
		company,
		avatar,
		rating,
		variant = 'default',
		class: className = '',
		children
	}: Props = $props();

	const variantClasses = {
		default: 'bg-bg-subtle p-6 rounded-2xl',
		compact: 'bg-bg-subtle p-4 rounded-xl',
		featured:
			'bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-3xl border border-accent/20'
	};
</script>

<article class={[variantClasses[variant], className].join(' ')}>
	{#if rating}
		<div class="mb-4">
			<Rating value={rating} readonly size={variant === 'compact' ? 'sm' : 'md'} />
		</div>
	{/if}

	{#if quote}
		<blockquote
			class={[
				'text-fg italic mb-6',
				variant === 'compact' ? 'text-sm' : variant === 'featured' ? 'text-xl' : 'text-base'
			].join(' ')}
		>
			"{quote}"
		</blockquote>
	{/if}

	{@render children?.()}

	{#if author || title || company || avatar}
		<footer class="flex items-center gap-3">
			{#if avatar}
				<Image
					src={avatar}
					alt={author || 'Testimonial author'}
					class={[
						'rounded-full object-cover',
						variant === 'compact' ? 'w-10 h-10' : 'w-12 h-12'
					].join(' ')}
				/>
			{/if}

			<div>
				{#if author}
					<Heading level={4} class="text-sm font-semibold text-fg">
						{author}
					</Heading>
				{/if}
				{#if title || company}
					<Text class="text-xs text-fg-muted">
						{#if title}{title}{/if}
						{#if title && company}
							at
						{/if}
						{#if company}{company}{/if}
					</Text>
				{/if}
			</div>
		</footer>
	{/if}
</article>
