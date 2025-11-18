<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import Label from '$lib/components/atoms/Label.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import Eyebrow from '$lib/components/atoms/Eyebrow.svelte';
	import CTAGroup from '$lib/components/molecules/CTAGroup.svelte';
	import type { ImageType } from '$lib/models';

	/**
	 * Hero component - Unified hero banner with multiple variants
	 * Variants:
	 * - molecule: Full-featured with dynamic background and line-clamping
	 * - default: Standard layout with title, subtitle, description, and image
	 * - section: Two-column layout with optional product grid
	 * - banner: Minimal layout with eyebrow and CTAs
	 */

	type HeroVariant = 'molecule' | 'default' | 'section' | 'banner';

	interface Props {
		/** Hero variant/layout type */
		variant?: HeroVariant;
		/** Hero title */
		title: string;
		/** Hero subtitle/tagline */
		subtitle?: string | null;
		/** Hero description/overview text */
		description?: string;
		/** Hero eyebrow/label text */
		eyebrow?: string | null;
		/** Hero image source(s) */
		image?: {
			src?: string;
			desktop?: string;
			tablet?: string;
			mobile?: string;
			alt?: string;
		};
		/** Background color (hex) */
		backgroundColor?: string;
		/** Text color mode */
		textColor?: 'light' | 'dark';
		/** Show "New" badge */
		isNew?: boolean;
		/** Details text (molecule variant) */
		details?: string;
		/** Call-to-action buttons */
		ctas?: Array<{ label: string; url?: string; href?: string; icon?: string; color?: string }>;
		/** Primary action button */
		primaryAction?: { label: string; href?: string; onClick?: () => void };
		/** Secondary action button */
		secondaryAction?: { label: string; href?: string; onClick?: () => void };
		/** Learn more link */
		learnMoreHref?: string;
		/** Buy link */
		buyHref?: string;
		/** Background image */
		backgroundImage?: string;
		/** Product grid items */
		products?: Array<{ name: string; image: string; badge?: string }>;
		/** Additional CSS classes */
		className?: string;
		/** Line clamp toggle callback */
		onLineClampToggle?: (enabled: boolean) => void;
	}

	let {
		variant = 'default',
		title = '',
		subtitle = undefined,
		description = undefined,
		eyebrow = null,
		image = undefined,
		backgroundColor = '#ffffff',
		textColor = 'light',
		isNew = false,
		details = undefined,
		ctas = [],
		primaryAction = undefined,
		secondaryAction = undefined,
		learnMoreHref = '#',
		buyHref = '#',
		backgroundImage = undefined,
		products = [],
		className = '',
		onLineClampToggle = () => {}
	}: Props = $props();

	// State for molecule variant
	let lineClampEnabled = $state(true);
	let lines = $state(5);

	// Derived values
	let truncated = $derived(
		variant === 'molecule' && description && description.length > lines * 50
	);

	// Color calculation for molecule variant
	let regex = $derived(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(backgroundColor));
	let rgb = $derived(
		regex?.slice(1).reduce((acc: string[], val, i) => {
			acc[i] = `${parseInt(val, 16)}`;
			return acc;
		}, []) || []
	);

	let brightness = $derived(
		Math.round(
			(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
		)
	);

	let moleculeTextColor = $derived(brightness > 125 ? '#000000' : '#ffffff');
	let hasDetails = $derived(Boolean(title || details));

	// Text color classes
	const textColorClass = $derived(textColor === 'light' ? 'text-white' : 'text-slate-900');
	const subtextColorClass = $derived(textColor === 'light' ? 'text-gray-300' : 'text-slate-600');

	const toggleLineClamp = () => {
		if (truncated) {
			lineClampEnabled = !lineClampEnabled;
			onLineClampToggle(lineClampEnabled);
		}
	};

	// Image resolution for molecule variant
	let moleculeImage = $derived.by(() => {
		if (!image) return undefined;
		if (typeof image === 'object' && 'desktop' in image) {
			return image as ImageType;
		}
		if (typeof image === 'object' && 'src' in image) {
			return {
				desktop: image.src,
				tablet: image.src,
				mobile: image.src,
				alt: image.alt || title
			} as ImageType;
		}
		return undefined;
	});
</script>

{#if variant === 'molecule'}
	<!-- Molecule variant: Full-featured with dynamic background -->
	<div
		class={[
			'relative w-screen',
			`${moleculeImage ? 'aspect-[9/13] md:aspect-[16/9]' : 'aspect-square md:aspect-[16/9]'}`
		].join(' ')}
		style="--text-color: {moleculeTextColor}"
	>
		{#if moleculeImage}
			<picture>
				<source media="(min-width: 950px)" srcset={moleculeImage.desktop} />
				<source media="(min-width: 650px)" srcset={moleculeImage.tablet} />
				<img
					src={moleculeImage.mobile}
					alt={moleculeImage.alt || title}
					loading="lazy"
					class={['absolute inset-0 object-cover object-top', 'h-full w-full']}
				/>
			</picture>
		{/if}
		<div
			class={[
				`absolute bottom-0  w-full bg-gradient-to-t z-10 flex flex-col`,
				`${hasDetails ? 'h-2/5 md:h-3/5' : 'h-2/5'}`,
				`[background:linear-gradient(to_top,var(--bg-color),var(--bg-color),rgb(15_23_42_/_0))]`
			].join(' ')}
			style="--bg-color: {backgroundColor}"
		></div>
		<div
			class="flex flex-col items-center absolute bottom-0 left-0 right-0 w-full md:w-auto md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-2xl lg:max-w-4xl px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-16 pb-12 md:pb-16 h-fit z-20 gap-6 md:gap-8"
			style="color: var(--text-color);"
		>
			{#if details}
				<div
					class="inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase bg-white/10 backdrop-blur-sm"
				>
					<span class="text-color opacity-90">{details}</span>
				</div>
			{/if}
			{#if title}
				<h1
					class="text-color text-center font-black text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl"
				>
					{title}
				</h1>
			{/if}
			{#if description}
				<p
					class={`text-color text-center font-light text-base md:text-lg leading-relaxed max-w-2xl opacity-95 ${
						lineClampEnabled && 'line-clamp-4'
					}`}
				>
					{description}
				</p>
				{#if truncated}
					<button
						onclick={toggleLineClamp}
						class="mt-2 text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300"
					>
						{lineClampEnabled ? 'Lire plus' : 'Réduire'}
					</button>
				{/if}
			{/if}
			{#if ctas.length > 0}
				<div
					class="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-6 pt-4 md:pt-2"
				>
					{#each ctas as cta, i (i)}
						<div class="transform transition-transform duration-300 hover:scale-105">
							<a href={cta.url || cta.href || '#'} class="contents">
								<Button size="lg">
									<div class="flex items-center gap-3 text-base md:text-lg">
										{#if cta.icon}
											<svg
												class="flex-none stroke-[2] h-5 w-5 md:h-6 md:w-6"
												stroke-width="2"
												viewBox="0 0 50 50"
											>
												<path d={cta.icon} />
											</svg>
										{/if}
										<span>{cta.label}</span>
									</div>
								</Button>
							</a>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{:else if variant === 'default'}
	<!-- Default variant: Standard layout with title, subtitle, description, and image -->
	<section
		class={`relative min-h-[600px] flex items-center justify-center overflow-hidden ${className}`}
		style="background-color: {backgroundColor};"
	>
		<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
			{#if isNew}
				<div class="flex justify-center mb-4">
					<Label color="orange">New</Label>
				</div>
			{/if}

			<div class="space-y-6 mb-8">
				<Heading level={1} size="5xl" weight="black" class={textColorClass}>
					{title}
				</Heading>

				{#if subtitle}
					<Paragraph size="2xl" class="{subtextColorClass} font-semibold">
						{subtitle}
					</Paragraph>
				{/if}

				{#if description}
					<Paragraph size="lg" class={subtextColorClass}>
						{description}
					</Paragraph>
				{/if}
			</div>

			<div class="flex items-center justify-center gap-6 mb-12">
				<Link
					href={learnMoreHref}
					variant="cta"
					className={textColor === 'light' ? 'text-blue-400' : ''}
				>
					Learn more
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</Link>
				<Link
					href={buyHref}
					variant="cta"
					className={textColor === 'light' ? 'text-blue-400' : ''}
				>
					Buy
				</Link>
			</div>

			{#if image}
				<div class="mt-12">
					<Image
						desktop={image.desktop || image.src}
						tablet={image.tablet || image.desktop || image.src}
						mobile={image.mobile || image.desktop || image.src}
						alt={image.alt || title}
						className="w-full max-w-5xl mx-auto"
					/>
				</div>
			{/if}
		</div>
	</section>
{:else if variant === 'section'}
	<!-- Section variant: Two-column layout with optional product grid -->
	<section class={`relative min-h-screen flex items-center ${className}`}>
		<!-- Background -->
		{#if backgroundImage}
			<div class="absolute inset-0">
				<img src={backgroundImage} alt="" class="w-full h-full object-cover" />
				<div
					class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
				></div>
			</div>
		{/if}

		<!-- Content -->
		<div
			class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16"
		>
			<div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
				<!-- Text Content -->
				<div class="space-y-6 md:space-y-8 lg:space-y-10">
					<!-- Badge -->
					{#if subtitle}
						<div>
							<span
								class="inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase bg-blue-50 text-blue-700"
							>
								{subtitle}
							</span>
						</div>
					{/if}

					<!-- Title -->
					<Heading
						level={1}
						size="6xl"
						weight="black"
						class="text-slate-900 leading-tight tracking-tight"
					>
						{title}
					</Heading>

					<!-- Description -->
					{#if description}
						<Paragraph
							size="lg"
							color="text-slate-700"
							leading="relaxed"
							class="max-w-lg md:text-lg"
						>
							{description}
						</Paragraph>
					{/if}

					<!-- Actions -->
					<div class="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
						{#if primaryAction}
							<Button tone="primary" size="lg" onClick={primaryAction.onClick}>
								{primaryAction.label}
							</Button>
						{/if}

						{#if secondaryAction}
							<Button tone="secondary" size="lg" onClick={secondaryAction.onClick}>
								{secondaryAction.label}
							</Button>
						{/if}
					</div>
				</div>

				<!-- Products Grid -->
				{#if products && products.length > 0}
					<div
						class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8"
					>
						{#each products as product}
							<div
								class="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
							>
								{#if product.badge}
									<div class="absolute -top-2 -right-2 z-10">
										<span
											class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-600 text-white"
										>
											{product.badge}
										</span>
									</div>
								{/if}
								<div
									class="aspect-square relative mb-5 md:mb-6 overflow-hidden rounded-xl"
								>
									<img
										src={product.image}
										alt={product.name}
										class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
									/>
								</div>
								<Heading
									level={4}
									size="base"
									weight="semibold"
									class="text-center text-slate-900 leading-snug"
								>
									{product.name}
								</Heading>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</section>
{:else if variant === 'banner'}
	<!-- Banner variant: Minimal layout with eyebrow and CTAs -->
	<section class="relative w-full overflow-hidden" style={`background:${backgroundColor}`}>
		<div class="container mx-auto px-6 py-16 md:py-24 text-center text-white">
			{#if eyebrow}
				<Eyebrow text={eyebrow} />
			{/if}
			<h1 class="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
			{#if subtitle}
				<p class="mt-4 text-lg md:text-xl text-slate-200">{subtitle}</p>
			{/if}
			<div class="mt-8">
				<CTAGroup
					align="center"
					primary={primaryAction && {
						label: primaryAction.label,
						href: primaryAction.href,
						tone: 'primary'
					}}
					secondary={secondaryAction && {
						label: secondaryAction.label,
						href: secondaryAction.href,
						tone: 'secondary'
					}}
				/>
			</div>
		</div>
		{#if image && image.src}
			<img
				src={image.src}
				alt={image.alt || title}
				class="mx-auto max-w-5xl w-full object-contain"
			/>
		{/if}
	</section>
{/if}

<style>
	:global(.text-color) {
		color: var(--text-color);
		transition: color 300ms ease;
	}

	/* Smooth scroll momentum on iOS */
	@supports (backdrop-filter: blur(1px)) {
		:global(div[class*='backdrop-blur']) {
			-webkit-backdrop-filter: blur(8px);
		}
	}
</style>
