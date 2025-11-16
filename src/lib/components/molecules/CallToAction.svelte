<script lang="ts">
	import type { Snippet } from 'svelte';
	import PillButton from '$lib/components/atoms/PillButton.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';

	/**
	 * CallToAction component - versatile section for driving user actions
	 *
	 * @example
	 * <CallToAction
	 *   title="Ready to get started?"
	 *   description="Join thousands of users..."
	 *   primaryAction={{ label: 'Start Free Trial', href: '/signup' }}
	 *   size="lg"
	 * />
	 */

	export type CTASize = 'sm' | 'md' | 'lg';
	export type CTABackgroundType = 'none' | 'color' | 'image' | 'gradient';
	export type OverlayColor = 'black' | 'blue' | 'gray' | 'transparent';

	interface ActionItem {
		/** Button label text */
		label: string;
		/** Link URL */
		href?: string;
		/** Click callback */
		onClick?: () => void;
		/** Button variant override */
		variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
	}

	interface Props {
		/** Title content - can be string or snippet */
		title?: string | Snippet;
		/** Subtitle content - can be string or snippet */
		subtitle?: string | Snippet;
		/** Description content - can be string or snippet */
		description?: string | Snippet;
		/** Primary action button config */
		primaryAction?: ActionItem;
		/** Secondary action button config */
		secondaryAction?: ActionItem;
		/** Background image URL */
		backgroundImage?: string;
		/** Background color for solid background */
		backgroundColor?: string;
		/** Background type: none, color, image, or gradient */
		backgroundType?: CTABackgroundType;
		/** Gradient from color (for gradient background) */
		gradientFrom?: string;
		/** Gradient to color (for gradient background) */
		gradientTo?: string;
		/** Show overlay on background */
		overlay?: boolean;
		/** Overlay color */
		overlayColor?: OverlayColor;
		/** Overlay opacity (0-100) */
		overlayOpacity?: number;
		/** Component size variant */
		size?: CTASize;
		/** Additional CSS classes */
		class?: string;
	}

	// Size configuration
	const sizeConfig: Record<CTASize, { padding: string; titleSize: string; spacing: string }> = {
		sm: {
			padding: 'py-8 lg:py-12',
			titleSize: '3xl',
			spacing: 'mb-3'
		},
		md: {
			padding: 'py-16 lg:py-24',
			titleSize: '4xl',
			spacing: 'mb-4'
		},
		lg: {
			padding: 'py-20 lg:py-32',
			titleSize: '5xl',
			spacing: 'mb-6'
		}
	};

	// Overlay color classes
	const overlayColorMap: Record<OverlayColor, (opacity: number) => string> = {
		black: (opacity) => `bg-black/${opacity}`,
		blue: (opacity) => `bg-blue-900/${opacity}`,
		gray: (opacity) => `bg-gray-900/${opacity}`,
		transparent: () => `bg-transparent`
	};

	let {
		title = undefined,
		subtitle = undefined,
		description = undefined,
		primaryAction = undefined,
		secondaryAction = undefined,
		backgroundImage = undefined,
		backgroundColor = undefined,
		backgroundType = 'none',
		gradientFrom = undefined,
		gradientTo = undefined,
		overlay = true,
		overlayColor = 'black',
		overlayOpacity = 40,
		size = 'md',
		class: className = undefined
	}: Props = $props();

	// Ensure overlayOpacity is between 0-100
	const clampedOpacity = Math.min(Math.max(overlayOpacity, 0), 100);

	// Build background styles
	const backgroundClasses = $derived.by(() => {
		if (backgroundType === 'image' && backgroundImage) {
			return 'absolute inset-0';
		}
		if (backgroundType === 'color' && backgroundColor) {
			return '';
		}
		if (backgroundType === 'gradient' && gradientFrom && gradientTo) {
			return '';
		}
		return '';
	});

	const backgroundStyles = $derived.by(() => {
		if (backgroundType === 'color' && backgroundColor) {
			return `background-color: ${backgroundColor};`;
		}
		if (backgroundType === 'gradient' && gradientFrom && gradientTo) {
			return `background: linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%);`;
		}
		return '';
	});

	// Determine text color based on background
	const hasBackground = $derived(backgroundType !== 'none');
	const textColor = $derived(hasBackground ? 'text-white' : 'text-slate-900');
	const subtextColor = $derived(hasBackground ? 'text-white/90' : 'text-slate-600');
	const descriptionColor = $derived(hasBackground ? 'text-white/80' : 'text-slate-600');

	const currentSize = sizeConfig[size];
</script>

<section
	class={[
		'relative',
		currentSize.padding,
		backgroundType === 'color' || backgroundType === 'gradient' ? 'overflow-hidden' : '',
		className
	]
		.filter(Boolean)
		.join(' ')}
	style={backgroundStyles}
>
	<!-- Background Image with Overlay -->
	{#if backgroundType === 'image' && backgroundImage}
		<div class={backgroundClasses}>
			<img src={backgroundImage} alt="" class="w-full h-full object-cover" />
			{#if overlay}
				<div
					class={`absolute inset-0 ${overlayColorMap[overlayColor](clampedOpacity)}`}
				></div>
			{/if}
		</div>
	{/if}

	<!-- Content -->
	<div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
		<!-- Title -->
		{#if title}
			<Heading
				level={2}
				size={currentSize.titleSize}
				weight="bold"
				class={`${currentSize.spacing} ${textColor}`}
			>
				{#if typeof title === 'function'}
					{@render title()}
				{:else}
					{title}
				{/if}
			</Heading>
		{/if}

		<!-- Subtitle -->
		{#if subtitle}
			<Heading level={3} size="xl" weight="medium" class={`mb-6 ${subtextColor}`}>
				{#if typeof subtitle === 'function'}
					{@render subtitle()}
				{:else}
					{subtitle}
				{/if}
			</Heading>
		{/if}

		<!-- Description -->
		{#if description}
			<Paragraph
				size="lg"
				color={descriptionColor}
				leading="relaxed"
				class="mb-8 max-w-2xl mx-auto"
			>
				{#if typeof description === 'function'}
					{@render description()}
				{:else}
					{description}
				{/if}
			</Paragraph>
		{/if}

		<!-- Actions -->
		{#if primaryAction || secondaryAction}
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				{#if primaryAction}
					<PillButton
						href={primaryAction.href}
						tone="primary"
						size="lg"
						class={hasBackground
							? 'bg-white text-slate-900 hover:bg-gray-50 hover:scale-105'
							: ''}
						onClick={primaryAction.onClick}
					>
						{primaryAction.label}
					</PillButton>
				{/if}

				{#if secondaryAction}
					<PillButton
						href={secondaryAction.href}
						tone={hasBackground ? 'neutral' : 'secondary'}
						size="lg"
						class={hasBackground
							? 'text-white border border-white/30 hover:bg-white/10'
							: ''}
						onClick={secondaryAction.onClick}
					>
						{secondaryAction.label}
					</PillButton>
				{/if}
			</div>
		{/if}
	</div>
</section>
