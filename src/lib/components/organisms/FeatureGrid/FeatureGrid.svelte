<script lang="ts">
	import { FeatureItem } from '$lib/components/molecules';
	import FeatureCard from '../../molecules/FeatureCard/FeatureCard.svelte';

	let {
		features = [],
		layout = 'stacked'
	}: {
		features: Array<{
			title: string;
			description: string;
			image: string;
			imageAlt?: string;
			imagePosition?: 'left' | 'right';
			icon?: string;
			badge?: string;
		}>;
		layout: 'stacked' | 'alternating';
	} = $props();

	let containerClasses = $derived(
		['space-y-16 lg:space-y-24', $$props.class].filter(Boolean).join(' ')
	);
</script>

<div class={containerClasses}>
	{#each features as feature, index}
		{#if feature.image}
			<FeatureCard
				title={feature.title}
				description={feature.description}
				image={feature.image}
				imageAlt={feature.imageAlt || feature.title}
				imagePosition={layout === 'alternating'
					? index % 2 === 0
						? 'right'
						: 'left'
					: feature.imagePosition || 'right'}
				icon={feature.icon}
				badge={feature.badge}
			/>
		{:else}
			<!-- Fallback for features without images -->
			<div class="max-w-4xl mx-auto">
				<div class="p-8 rounded-2xl bg-slate-50">
					<FeatureItem
						title={feature.title}
						description={feature.description}
						icon={feature.icon ?? null}
					/>
				</div>
			</div>
		{/if}
	{/each}
</div>
