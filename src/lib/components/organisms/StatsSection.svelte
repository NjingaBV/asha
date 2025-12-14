<script lang="ts">
	import type { Snippet } from 'svelte';
	import Stat from '$lib/components/molecules/Stat.svelte';
	import SectionHeader from './SectionHeader.svelte';

	interface StatItem {
		value: string | number;
		label: string;
		change?: number;
		prefix?: string;
		suffix?: string;
	}

	interface Props {
		/** Section eyebrow text */
		eyebrow?: string;
		/** Section title */
		title?: string;
		/** Section description */
		description?: string;
		/** Stats to display */
		stats?: StatItem[];
		/** Number of columns */
		columns?: 2 | 3 | 4;
		/** Stat size */
		size?: 'sm' | 'md' | 'lg';
		/** Background variant */
		variant?: 'default' | 'muted' | 'accent';
		/** Custom CSS classes */
		class?: string;
		/** Header actions slot */
		actions?: Snippet;
		/** Custom content */
		children?: Snippet;
	}

	let {
		eyebrow,
		title,
		description,
		stats = [],
		columns = 4,
		size = 'md',
		variant = 'default',
		class: className = '',
		actions,
		children
	}: Props = $props();

	const columnClasses = {
		2: 'grid-cols-1 sm:grid-cols-2',
		3: 'grid-cols-1 sm:grid-cols-3',
		4: 'grid-cols-2 sm:grid-cols-4'
	};

	const variantClasses = {
		default: 'bg-bg',
		muted: 'bg-bg-subtle',
		accent: 'bg-accent/5'
	};
</script>

<section class={['py-16 px-4 sm:px-6 lg:px-8', variantClasses[variant], className].join(' ')}>
	<div class="max-w-7xl mx-auto">
		{#if eyebrow || title || description || actions}
			<SectionHeader {eyebrow} {title} {description} {actions} />
		{/if}

		{#if children}
			{@render children()}
		{:else if stats.length > 0}
			<div class={['grid gap-8', columnClasses[columns]].join(' ')}>
				{#each stats as stat}
					<Stat
						value={stat.value}
						label={stat.label}
						change={stat.change}
						prefix={stat.prefix}
						suffix={stat.suffix}
						{size}
						class="text-center"
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>
