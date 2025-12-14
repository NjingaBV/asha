<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Text from '../atoms/Text.svelte';
	import Icon from '../atoms/Icon.svelte';

	/**
	 * FeatureDiscovery component - displays configurable feature discovery section
	 *
	 * @example
	 * <FeatureDiscovery
	 *   title="Discover Features"
	 *   subtitle="Explore what makes this special"
	 *   features={[
	 *     { icon: 'performance', title: 'Performance', description: 'Fast and efficient', link: '/performance' }
	 *   ]}
	 * />
	 */

	interface Feature {
		icon?: string;
		title: string;
		description: string;
		link?: string;
	}

	interface Props {
		title?: string;
		subtitle?: string;
		features?: Feature[];
		pattern?: 'cards' | 'tabs' | 'accordion';
	}

	let {
		title = 'Discover Features',
		subtitle,
		features = [],
		pattern = 'cards'
	}: Props = $props();
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8">
	<div class="max-w-360 mx-auto">
		<div class="text-center mb-16">
			<Heading level={2} class="text-3xl md:text-4xl font-bold text-primary mb-4">
				{title}
			</Heading>
			{#if subtitle}
				<Text class="text-secondary text-lg">
					{subtitle}
				</Text>
			{/if}
		</div>

		{#if pattern === 'cards'}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each features as feature}
					{#if feature.link}
						<a
							href={feature.link}
							class="group block bg-page-alt hover:bg-card-hover rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
						>
							<div class="text-center">
								{#if feature.icon}
									<div class="mb-4 flex justify-center">
										<Icon
											name={feature.icon}
											size="lg"
											class="text-accent-blue group-hover:scale-110 transition-transform"
										/>
									</div>
								{/if}
								<Heading
									level={3}
									class="text-xl font-bold text-primary mb-3 group-hover:text-accent-blue transition-colors"
								>
									{feature.title}
								</Heading>
								<Text
									class="text-secondary group-hover:text-primary transition-colors"
								>
									{feature.description}
								</Text>
							</div>
						</a>
					{:else}
						<div
							class="group block bg-page-alt rounded-3xl p-8 transition-all duration-300"
						>
							<div class="text-center">
								{#if feature.icon}
									<div class="mb-4 flex justify-center">
										<Icon
											name={feature.icon}
											size="lg"
											class="text-accent-blue"
										/>
									</div>
								{/if}
								<Heading level={3} class="text-xl font-bold text-primary mb-3">
									{feature.title}
								</Heading>
								<Text class="text-secondary">
									{feature.description}
								</Text>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		{:else if pattern === 'tabs'}
			<!-- TODO: Implement tabs pattern -->
			<div class="text-center text-secondary">Tabs pattern coming soon</div>
		{:else if pattern === 'accordion'}
			<!-- TODO: Implement accordion pattern -->
			<div class="text-center text-secondary">Accordion pattern coming soon</div>
		{/if}
	</div>
</section>
