<script lang="ts">
	import { FeatureItem } from '$lib/components/molecules';
	import FeatureCard from '../../molecules/FeatureCard/FeatureCard.svelte';

	// Backward compatibility props
	export let items: Array<{ title: string; description: string; icon?: string }> | undefined =
		undefined;

	// New Apple Watch inspired props
	export let features: Array<{
		title: string;
		description: string;
		image: string;
		imageAlt?: string;
		imagePosition?: 'left' | 'right';
		icon?: string;
		badge?: string;
	}> = [];
	export let layout: 'stacked' | 'alternating' = 'stacked';

	$: actualFeatures =
		features.length > 0
			? features
			: (items || []).map((item) => ({
					title: item.title,
					description: item.description,
					image: '', // fallback for old items without images
					imageAlt: item.title,
					imagePosition: 'right' as const,
					icon: item.icon,
					badge: undefined
				}));

	$: containerClasses = ['space-y-16 lg:space-y-24', $$props.class].filter(Boolean).join(' ');
</script>

{#if features.length > 0}
	<!-- New Apple Watch style feature grid -->
	<div class={containerClasses}>
		{#each actualFeatures as feature, index}
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
				<!-- Fallback to old style for backward compatibility -->
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
{:else}
	<!-- Backward compatibility -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each items || [] as f}
			<div class="p-4 rounded-[30px] bg-slate-50">
				<FeatureItem title={f.title} description={f.description} icon={f.icon ?? null} />
			</div>
		{/each}
	</div>
{/if}
