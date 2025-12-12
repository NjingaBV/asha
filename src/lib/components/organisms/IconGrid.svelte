<script lang="ts">
	import type { Snippet } from 'svelte';
	import IconCard from './IconCard.svelte';
	import SectionHeader from './SectionHeader.svelte';

	interface IconItem {
		icon: string;
		title: string;
		description?: string;
		href?: string;
	}

	interface Props {
		/** Section eyebrow text */
		eyebrow?: string;
		/** Section title */
		title?: string;
		/** Section description */
		description?: string;
		/** Grid items */
		items?: IconItem[];
		/** Number of columns */
		columns?: 2 | 3 | 4 | 6;
		/** Card size variant */
		cardSize?: 'sm' | 'md' | 'lg';
		/** Card alignment */
		cardAlign?: 'left' | 'center';
		/** Custom CSS classes */
		class?: string;
		/** Header actions slot */
		actions?: Snippet;
		/** Custom item content */
		children?: Snippet;
	}

	let {
		eyebrow,
		title,
		description,
		items = [],
		columns = 3,
		cardSize = 'md',
		cardAlign = 'center',
		class: className = '',
		actions,
		children
	}: Props = $props();

	const columnClasses = {
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
		6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
	};
</script>

<section class={['py-16 px-4 sm:px-6 lg:px-8', className].join(' ')}>
	<div class="max-w-7xl mx-auto">
		{#if eyebrow || title || description || actions}
			<SectionHeader {eyebrow} {title} {description} {actions} />
		{/if}

		{#if children}
			{@render children()}
		{:else if items.length > 0}
			<div class={['grid gap-6', columnClasses[columns]].join(' ')}>
				{#each items as item}
					<IconCard
						icon={item.icon}
						title={item.title}
						description={item.description}
						href={item.href}
						size={cardSize}
						align={cardAlign}
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>
