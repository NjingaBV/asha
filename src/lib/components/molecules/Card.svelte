<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import Linkable from '$lib/components/atoms/Linkable.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Label from '$lib/components/atoms/Label.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import type { ImageType } from '$lib/models';

	/**
	 * Unified Card component supporting multiple layouts
	 * Variants: image (default), feature, mac
	 * @example
	 * <Card variant="image" title="Title" imgSrc={{mobile: '...'}} />
	 * <Card variant="feature" title="Title" image="..." imagePosition="right" />
	 * <Card variant="mac" title="MacBook" price="$1,299" image="..." />
	 */

	type CardVariant = 'image' | 'feature' | 'mac';
	type ImagePosition = 'left' | 'right';
	type TextPosition = 'top' | 'bottom';
	type TextColor = 'white' | 'black';

	// Image variant props
	interface ImageCardProps {
		title?: string;
		subtitle?: string;
		overview?: string;
		imgSrc?: ImageType | string;
		buttonName?: string;
		buttonLink?: string;
		backgroundColor?: `#${string}`;
		mixColor?: boolean;
		textOnImage?: boolean;
		rounded?: boolean;
		isVideo?: boolean;
		textPosition?: TextPosition;
		textColor?: TextColor;
		overlayButton?: boolean;
		duration?: string;
	}

	// Feature variant props
	interface FeatureCardProps {
		title?: string;
		description?: string;
		image?: string;
		imageAlt?: string;
		imagePosition?: ImagePosition;
		icon?: string;
		badge?: string;
	}

	// Mac variant props
	interface MacCardProps {
		title?: string;
		tagline?: string;
		image?: string;
		imageAlt?: string;
		price?: string;
		isNew?: boolean;
		colors?: string[];
		learnMoreHref?: string;
		buyHref?: string;
	}

	// Unified props interface
	interface Props extends ImageCardProps, FeatureCardProps, MacCardProps {
		variant?: CardVariant;
		className?: string;
	}

	let {
		// Common
		variant = 'image',
		className = '',
		// Image variant
		title = '',
		subtitle = '',
		overview = '',
		imgSrc = undefined,
		buttonName = '',
		buttonLink = '',
		backgroundColor = '#000000',
		mixColor = false,
		textOnImage = true,
		rounded = true,
		isVideo = false,
		textPosition = 'bottom',
		textColor = 'white',
		overlayButton = false,
		duration = undefined,
		// Feature variant
		description = '',
		image = '',
		imageAlt = '',
		imagePosition = 'right',
		icon = undefined,
		badge = undefined,
		// Mac variant
		tagline = undefined,
		price = undefined,
		isNew = false,
		colors = [],
		learnMoreHref = '#',
		buyHref = '#'
	}: Props = $props();

	let isLinkable = $derived(Boolean(!buttonName && buttonLink));
	let imageSrcString = $derived(typeof imgSrc === 'string' ? imgSrc : undefined);
	let imageSrcObject = $derived(typeof imgSrc === 'object' ? imgSrc : undefined);
</script>

{#if variant === 'image'}
	<!-- IMAGE VARIANT: Image card with overlay or bottom text -->
	<Linkable {isLinkable} link={buttonLink}>
		<div
			class={[
				'relative max-h-screen transition-transform duration-300 hover:scale-[1.02] w-full',
				rounded && 'rounded-2xl',
				buttonName && imgSrc && 'aspect-4/5',
				!buttonName && imgSrc && isVideo && 'aspect-video',
				!buttonName && imgSrc && !isVideo && 'aspect-square',
				className
			]
				.filter(Boolean)
				.join(' ')}
		>
			<div class="flex flex-col h-full">
				<div
					class="bg relative h-full w-full bg-cover bg-center bg-no-repeat"
					class:rounded-2xl={rounded}
					style="--bg-color: {backgroundColor}; {imageSrcString
						? `background-image: url('${imageSrcString}')`
						: ''}"
				>
					{#if imageSrcObject}
						<picture>
							{#if imageSrcObject.desktop}<source
									media="(min-width: 950px)"
									srcset={imageSrcObject.desktop}
								/>{/if}
							{#if imageSrcObject.tablet}<source
									media="(min-width: 650px)"
									srcset={imageSrcObject.tablet}
								/>{/if}
							<img
								src={imageSrcObject.mobile}
								alt={title}
								loading="lazy"
								class={[
									'absolute inset-0 object-cover object-center md:object-top h-full w-full',
									mixColor && 'mix-blend-screen',
									rounded && 'rounded-2xl'
								]
									.filter(Boolean)
									.join(' ')}
							/>
						</picture>
					{/if}
				</div>
				{#if (buttonName || title) && textOnImage}
					<div
						class={[
							'absolute w-full h-fit p-6 md:p-8 flex flex-col gap-3',
							textPosition === 'bottom'
								? 'bottom-0 bg-linear-to-t from-stone-950 via-stone-950/80 to-transparent'
								: 'top-0',
							rounded && textPosition === 'bottom' && 'rounded-b-2xl',
							rounded && textPosition === 'top' && 'rounded-t-2xl'
						]
							.filter(Boolean)
							.join(' ')}
					>
						{#if subtitle}
							<p
								class={[
									'text-sm md:text-base font-semibold tracking-wide uppercase opacity-90',
									textColor === 'white' ? 'text-slate-200' : 'text-slate-900'
								]
									.filter(Boolean)
									.join(' ')}
							>
								{subtitle}
							</p>
						{/if}
						{#if title}
							<h2
								class={[
									'text-2xl md:text-4xl lg:text-5xl font-black leading-tight',
									subtitle ? 'text-left' : 'text-center',
									textColor === 'white' ? 'text-white' : 'text-slate-900'
								]
									.filter(Boolean)
									.join(' ')}
							>
								{title}
							</h2>
						{/if}
						{#if overview}
							<p
								class={[
									'font-light text-left text-sm md:text-base leading-relaxed line-clamp-4 opacity-90',
									textColor === 'white' ? 'text-slate-300' : 'text-slate-700'
								]
									.filter(Boolean)
									.join(' ')}
							>
								{overview}
							</p>
						{/if}
						{#if overlayButton}
							<div class="flex items-center gap-3 mt-3">
								<button
									type="button"
									class="shrink-0 transition-opacity hover:opacity-70"
									aria-label="Play"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class={['w-5 h-5', textColor === 'white' ? 'text-white' : 'text-slate-900']
											.filter(Boolean)
											.join(' ')}
									>
										<path d="M8 5v14l11-7z" />
									</svg>
								</button>
								{#if duration}
									<span class={['text-xs font-medium', textColor === 'white' ? 'text-slate-200' : 'text-slate-700']
										.filter(Boolean)
										.join(' ')}>
										{duration}
									</span>
								{/if}
							</div>
						{/if}
						{#if buttonName && buttonLink}
							<div class="mt-2 w-11/12 self-center">
								<Button fullWidth={true} href={buttonLink} colors={backgroundColor}>
									{buttonName}
								</Button>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</Linkable>
	{#if (buttonName || title) && !textOnImage}
		<div class="p-6 md:p-8 rounded-b-2xl flex flex-col gap-3 bg-surface">
			{#if subtitle}
				<p
					class="text-slate-600 text-sm md:text-base font-semibold tracking-wide uppercase"
				>
					{subtitle}
				</p>
			{/if}
			{#if title}
				<h2
					class="text-text text-xl md:text-2xl lg:text-3xl font-black leading-tight"
					class:text-left={subtitle}
					class:text-center={!subtitle}
				>
					{title}
				</h2>
			{/if}
			{#if overview}
				<p
					class="text-slate-600 font-light text-left text-sm md:text-base leading-relaxed line-clamp-4"
				>
					{overview}
				</p>
			{/if}
			{#if buttonName && buttonLink}
				<div class="mt-2 w-11/12 self-center">
					<Button
						color={backgroundColor}
						rounded={true}
						fullWidth={true}
						href={buttonLink}
					>
						{buttonName}
					</Button>
				</div>
			{/if}
		</div>
	{/if}
{:else if variant === 'feature'}
	<!-- FEATURE VARIANT: Side-by-side image + content (Apple Watch inspired) -->
	<div
		class={['bg-white rounded-2xl overflow-hidden shadow-sm', className]
			.filter(Boolean)
			.join(' ')}
	>
		<div class="grid lg:grid-cols-2 min-h-[480px] lg:min-h-[520px]">
			<!-- Content -->
			<div
				class={[
					'p-8 md:p-12 lg:p-14 flex flex-col justify-center',
					imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
				].join(' ')}
			>
				{#if badge}
					<div class="mb-5">
						<span
							class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700"
						>
							{badge}
						</span>
					</div>
				{/if}

				{#if icon}
					<div class="mb-8">
						<div
							class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center"
						>
							<Icon name={icon} size="lg" color="#0099cc" />
						</div>
					</div>
				{/if}

				<Heading
					level={2}
					size="4xl"
					weight="black"
					class="text-slate-900 mb-5 md:mb-6 leading-tight"
				>
					{title}
				</Heading>

				<Paragraph
					size="lg"
					color="text-slate-600"
					leading="relaxed"
					class="mb-0 text-base md:text-lg"
				>
					{description}
				</Paragraph>
			</div>

			<!-- Image -->
			<div
				class={[
					'relative h-64 md:h-80 lg:h-full',
					imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
				].join(' ')}
			>
				<img src={image} alt={imageAlt || title} class="w-full h-full object-cover" />
				<div
					class="absolute inset-0 bg-linear-to-r from-white/20 to-transparent lg:hidden"
				></div>
			</div>
		</div>
	</div>
{:else if variant === 'mac'}
	class={[
		'group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300',
		className
	]
		.filter(Boolean)
		.join(' ')}
	>
	{#if isNew}
		<div class="absolute top-4 left-4 z-10">
			<Label color="orange">New</Label>
		</div>
	{/if}

	<!-- Image -->
	<div class="relative aspect-4/3 bg-gray-50 flex items-center justify-center p-8">
		<Image
			src={image}
			alt={imageAlt || title}
			className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
		/>
	</div>

	<!-- Content -->
	<div class="p-6 space-y-4 text-center">
		<div class="space-y-2">
			<Heading level={3} size="2xl" weight="bold" class="text-slate-900">
				{title}
			</Heading>
			{#if tagline}
				<Paragraph size="lg" color="text-slate-600" class="font-medium">
					{tagline}
				</Paragraph>
			{/if}
			{#if price}
				<Paragraph size="sm" color="text-slate-500">
					{price}
				</Paragraph>
			{/if}
		</div>

		<!-- Colors -->
		{#if colors.length > 0}
			<div class="flex items-center justify-center gap-2 pt-2">
				{#each colors as color}
					<div
						class="w-4 h-4 rounded-full border border-gray-300"
						style="background-color: {color}"
						title={color}
					></div>
				{/each}
			</div>
		{/if}

		<!-- Actions -->
		<div class="flex items-center justify-center gap-4 pt-2">
			<Link href={learnMoreHref} variant="cta">
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
			<Link href={buyHref} variant="cta">Buy</Link>
		</div>
	</div>
{/if}

<style>
	.bg {
		background-color: var(--bg-color);
	}
</style>
