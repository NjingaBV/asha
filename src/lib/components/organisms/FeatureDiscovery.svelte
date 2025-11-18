<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';

	/**
	 * FeatureDiscovery component - displays "Get to know" features section
	 *
	 * @example
	 * <FeatureDiscovery />
	 */

	interface Feature {
		title: string;
		description: string;
		focusParam: string;
	}

	const features: Feature[] = [
		{
			title: 'Performance and Battery Life',
			description: 'Go fast. Go far.',
			focusParam: 'performance-and-battery'
		},
		{
			title: 'Built for AI',
			description: 'Smart. Secure. On device.',
			focusParam: 'built-for-ai'
		},
		{
			title: 'macOS and Apple Intelligence',
			description: 'Easy to use. Easy to love.',
			focusParam: 'apple-intelligence'
		},
		{
			title: 'Mac + iPhone',
			description: 'Together they work wonders.',
			focusParam: 'mac-and-iphone'
		},
		{
			title: 'Compatibility',
			description: 'Mac runs your favorite apps.',
			focusParam: 'compatibility'
		},
		{
			title: 'Privacy and Security',
			description: "Your business is nobody else's.",
			focusParam: 'privacy-and-security'
		},
		{
			title: 'Durability',
			description: 'Built to stand the test of time.',
			focusParam: 'durability'
		},
		{
			title: 'Apple Values',
			description: 'Our values drive everything we do.',
			focusParam: 'apple-values'
		}
	];
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<Heading level={2} class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
				Get to know Mac.
			</Heading>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each features as feature}
				<a
					href="?focus={feature.focusParam}"
					class="group block bg-gray-50 hover:bg-gray-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
				>
					<div class="text-center">
						<Heading
							level={3}
							class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
						>
							{feature.title}
						</Heading>
						<Paragraph
							class="text-gray-600 group-hover:text-gray-700 transition-colors"
						>
							{feature.description}
						</Paragraph>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
