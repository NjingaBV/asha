<script lang="ts">
	import type { Snippet } from 'svelte';
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import Icon from '../atoms/Icon.svelte';

	/**
	 * BenefitCard component - displays benefit/feature cards with icons and descriptions
	 *
	 * @example
	 * <BenefitCard
	 *   icon="star"
	 *   title="Amazing Feature"
	 *   description="This feature provides incredible benefits."
	 *   link={{ label: "Learn more", href: "/feature" }}
	 * />
	 */

	interface Link {
		label: string;
		href?: string;
		onClick?: () => void;
	}

	interface Props {
		/** Icon name from Icon component */
		icon?: string;
		/** Card title */
		title: string;
		/** Card description */
		description: string;
		/** Optional link */
		link?: Link;
		/** Custom CSS classes */
		class?: string;
		/** Slot for custom content (text, html, or Svelte snippet) */
		children?: Snippet | any;
	}

	let { icon, title, description, link, class: className = '', children }: Props = $props();

	// Card container classes
	const cardClasses = $derived(
		[
			'bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300',
			'border border-gray-200 hover:border-gray-300',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={cardClasses}>
	{#if icon}
		<div class="mb-6">
			<div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
				<Icon name="chip" className="w-6 h-6 text-blue-600" />
			</div>
		</div>
	{/if}

	<div class="space-y-4">
		<Heading level={3} class="text-xl font-bold text-gray-900 leading-tight">
			{title}
		</Heading>

		<Paragraph class="text-gray-600 leading-relaxed">
			{description}
		</Paragraph>

		{#if link}
			<div class="pt-2">
				<a
					href={link.href}
					class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
					onclick={link.onClick}
				>
					{link.label}
					<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>
		{/if}

		{#if children}
			<div class="pt-4">
				{#if typeof children === 'function'}
					{@render children()}
				{:else}
					{children}
				{/if}
			</div>
		{/if}
	</div>
</div>
