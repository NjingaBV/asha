<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import PillButton from '../atoms/PillButton.svelte';

	/**
	 * MacHeroSection component - displays the main hero section with video
	 *
	 * @example
	 * <MacHeroSection />
	 */
</script>

<section class="relative bg-black text-white overflow-hidden">
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
			<div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
		</video>
		<!-- Overlay -->
		<div class="absolute inset-0 bg-black/40"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
		<div class="text-center">
			<Heading
				level={1}
				class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
			>
				If you can dream it,<br />
				<span class="text-blue-400">Mac can do it.</span>
			</Heading>

			<Paragraph
				class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
			>
				Great ideas start here.
				<span class="block mt-2">See how Mac helps ideas come to life.</span>
			</Paragraph>

			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<PillButton
					tone="primary"
					size="lg"
					class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
				>
					Watch the film
				</PillButton>
				<PillButton
					tone="secondary"
					size="lg"
					class="text-white border-white hover:bg-white hover:text-black px-8 py-4"
				>
					Learn more
				</PillButton>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
		<div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
			<div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
		</div>
	</div>
</section>
