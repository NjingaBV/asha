<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Text from '../atoms/Text.svelte';
	import Button from '../atoms/Button.svelte';

	/**
	 * VideoHero component - displays the main hero section with video
	 *
	 * @example
	 * <VideoHero />
	 */
</script>

<section class="relative bg-bg-inverse text-fg-inverse overflow-hidden">
	<!-- Background Video -->
	<div class="absolute inset-0 z-0">
		<video
			class="w-full h-full object-cover"
			autoplay
			muted
			loop
			playsinline
			preload="metadata"
		>
			<source src="/videos/mac-hero.mp4" type="video/mp4" />
			<!-- Fallback image -->
			<div class="absolute inset-0 bg-gradient-to-br from-bg-inverse/90 to-bg-inverse"></div>
		</video>
		<!-- Overlay -->
		<div class="absolute inset-0 bg-bg-inverse/40"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
		<div class="text-center">
			<Heading
				level={1}
				class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
			>
				If you can dream it,<br />
				<span class="text-accent">Mac can do it.</span>
			</Heading>

			<Text
				class="text-xl md:text-2xl text-fg-inverse/70 mb-12 max-w-3xl mx-auto leading-relaxed"
			>
				Great ideas start here.
				<span class="block mt-2">See how Mac helps ideas come to life.</span>
			</Text>

			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<Button
					tone="primary"
					size="lg"
					class="bg-accent hover:bg-accent-hover text-fg-on-accent px-8 py-4"
				>
					Watch the film
				</Button>
				<Button
					tone="secondary"
					size="lg"
					class="text-fg-inverse border-fg-inverse hover:bg-fg-inverse hover:text-bg-inverse px-8 py-4"
				>
					Learn more
				</Button>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
		<div class="w-6 h-10 border-2 border-fg-inverse/50 rounded-full flex justify-center">
			<div class="w-1 h-3 bg-fg-inverse/50 rounded-full mt-2 animate-bounce"></div>
		</div>
	</div>
</section>
