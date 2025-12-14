<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Text from '../atoms/Text.svelte';
	import Button from '../atoms/Button.svelte';

	interface Action {
		label: string;
		href?: string;
		onClick?: () => void;
	}

	interface Props {
		title: string;
		subtitle?: string;
		description?: string;
		primaryAction?: Action;
		secondaryAction?: Action;
		backgroundImage?: string;
		backgroundVideo?: string;
		backgroundColor?: string;
		textColor?: 'light' | 'dark';
		overlayOpacity?: number;
		showScrollIndicator?: boolean;
	}

	let {
		title,
		subtitle,
		description,
		primaryAction,
		secondaryAction,
		backgroundImage,
		backgroundVideo,
		backgroundColor = '#000000',
		textColor = 'light',
		overlayOpacity = 0.4,
		showScrollIndicator = true
	}: Props = $props();

	/**
	 * HeroBanner component - displays a configurable hero banner with optional background image/video
	 *
	 * @example
	 * <HeroBanner
	 *   title="Welcome to Our Platform"
	 *   subtitle="Discover amazing features"
	 *   description="Experience the power of modern web development."
	 *   primaryAction={{ label: 'Get Started', href: '/start' }}
	 *   secondaryAction={{ label: 'Learn More', href: '/about' }}
	 *   backgroundImage="/images/hero.jpg"
	 *   textColor="light"
	 * />
	 */
</script>

<section
	class="relative overflow-hidden"
	style="background-color: {backgroundColor}; color: {textColor === 'light'
		? 'var(--color-fg-inverse)'
		: 'var(--color-fg-default)'}"
>
	<!-- Background Media -->
	{#if backgroundVideo}
		<div class="absolute inset-0 z-0">
			<video
				class="w-full h-full object-cover"
				autoplay
				muted
				loop
				playsinline
				preload="metadata"
			>
				<source src={backgroundVideo} type="video/mp4" />
				<!-- Fallback -->
				<div class="absolute inset-0" style="background-color: {backgroundColor}"></div>
			</video>
			<!-- Overlay -->
			<div
				class="absolute inset-0"
				style="background-color: {backgroundColor}; opacity: {overlayOpacity}"
			></div>
		</div>
	{:else if backgroundImage}
		<div class="absolute inset-0 z-0">
			<img src={backgroundImage} alt="" class="w-full h-full object-cover" />
			<!-- Overlay -->
			<div
				class="absolute inset-0"
				style="background-color: {backgroundColor}; opacity: {overlayOpacity}"
			></div>
		</div>
	{/if}

	<!-- Content -->
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
		<div class="text-center">
			<Heading
				level={1}
				class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
			>
				{@html title}
			</Heading>

			{#if subtitle}
				<Heading
					level={2}
					class="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight"
				>
					{@html subtitle}
				</Heading>
			{/if}

			{#if description}
				<Text
					class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
					style="color: {textColor === 'light'
						? 'var(--color-fg-inverse)'
						: 'var(--color-fg-default)'}; opacity: 0.7"
				>
					{@html description}
				</Text>
			{/if}

			{#if primaryAction || secondaryAction}
				<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
					{#if primaryAction}
						<Button
							tone="primary"
							size="lg"
							class="bg-accent hover:bg-accent-hover text-fg-on-accent px-8 py-4"
							href={primaryAction.href}
							onclick={primaryAction.onClick}
						>
							{primaryAction.label}
						</Button>
					{/if}
					{#if secondaryAction}
						<Button
							tone="secondary"
							size="lg"
							class="text-current border-current hover:bg-current hover:text-bg-default px-8 py-4"
							href={secondaryAction.href}
							onclick={secondaryAction.onClick}
						>
							{secondaryAction.label}
						</Button>
					{/if}
				</div>
			{/if}
		</div>
	</div>

	<!-- Scroll indicator -->
	{#if showScrollIndicator}
		<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
			<div
				class="w-6 h-10 border-2 border-current rounded-full flex justify-center opacity-50"
			>
				<div class="w-1 h-3 bg-current rounded-full mt-2 animate-bounce opacity-50"></div>
			</div>
		</div>
	{/if}
</section>
