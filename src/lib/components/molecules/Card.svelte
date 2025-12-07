<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	import type { ImageType } from '$lib/models';

	export type CardTextPosition = 'top' | 'bottom';
	export type CardTextColor = 'white' | 'black';
	export type CardTitleSize = 'sm' | 'md' | 'lg' | 'xl';

	/** Props interface for Card component */
	export interface CardProps {
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
		textPosition?: CardTextPosition;
		textColor?: CardTextColor;
		overlayButton?: boolean;
		duration?: string;
		titleSize?: CardTitleSize;
		showExpandButton?: boolean;
		onExpandClick?: () => void;
		class?: string;
	}

	/** Prop definitions for documentation */
	export const propDefs = {
		title: { type: 'string', default: '', description: 'Card title' },
		subtitle: { type: 'string', default: '', description: 'Card subtitle/category' },
		overview: { type: 'string', default: '', description: 'Card description text' },
		imgSrc: { type: 'ImageType | string', description: 'Image source(s)' },
		buttonName: { type: 'string', default: '', description: 'CTA button text' },
		buttonLink: { type: 'string', default: '', description: 'CTA button or card link' },
		backgroundColor: {
			type: 'string',
			default: '#000000',
			description: 'Background color (hex)'
		},
		textPosition: {
			type: 'string',
			options: ['top', 'bottom'],
			default: 'bottom',
			description: 'Text overlay position'
		},
		textColor: {
			type: 'string',
			options: ['white', 'black'],
			default: 'white',
			description: 'Text color'
		},
		titleSize: {
			type: 'string',
			options: ['sm', 'md', 'lg', 'xl'],
			default: 'lg',
			description: 'Title size'
		},
		rounded: { type: 'boolean', default: true, description: 'Rounded corners' },
		showExpandButton: { type: 'boolean', default: false, description: 'Show expand button' }
	} as const;
</script>

<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Linkable from '$lib/components/atoms/Linkable.svelte';

	/**
	 * Unified Card component
	 * Variants: image (default)
	 * @example
	 * <Card title="Title" imgSrc={{mobile: '...'}} />
	 */

	let {
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
		titleSize = 'lg',
		showExpandButton = false,
		onExpandClick = undefined,
		class: className = ''
	}: CardProps = $props();

	// Title size mapping
	const titleSizeClasses = {
		sm: 'text-lg md:text-xl lg:text-2xl',
		md: 'text-xl md:text-2xl lg:text-3xl',
		lg: 'text-2xl md:text-4xl lg:text-5xl',
		xl: 'text-3xl md:text-5xl lg:text-6xl'
	};

	let titleClass = $derived(titleSizeClasses[titleSize]);

	let isLinkable = $derived(Boolean(!buttonName && buttonLink));
	let imageSrcString = $derived(typeof imgSrc === 'string' ? imgSrc : undefined);
	let imageSrcObject = $derived(typeof imgSrc === 'object' ? imgSrc : undefined);
</script>

<!-- IMAGE VARIANT: Image card with overlay or bottom text -->
<Linkable {isLinkable} link={buttonLink}>
	<div
		class={[
			'relative max-h-screen transition-transform duration-300 hover:scale-[1.02] w-full',
			'max-w-7xl mx-auto',
			rounded && 'rounded-2xl',
			buttonName && imgSrc && 'aspect-4/5',
			!buttonName && imgSrc && isVideo && 'aspect-video',
			!buttonName &&
				imgSrc &&
				!isVideo &&
				textPosition === 'top' &&
				'aspect-[9/16] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]',
			!buttonName && imgSrc && !isVideo && textPosition !== 'top' && 'aspect-square',
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
						'absolute w-full h-fit p-6 md:p-8 lg:p-12 flex flex-col gap-2 md:gap-3 lg:gap-4',
						textPosition === 'bottom'
							? 'bottom-0 bg-linear-to-t from-stone-950 via-stone-950/80 to-transparent'
							: 'top-0 bg-linear-to-b from-black/40 via-black/20 to-transparent',
						rounded && textPosition === 'bottom' && 'rounded-b-2xl',
						rounded && textPosition === 'top' && 'rounded-t-2xl'
					]
						.filter(Boolean)
						.join(' ')}
				>
					{#if subtitle}
						<p
							class={[
								'font-semibold tracking-wide uppercase opacity-90',
								titleSize === 'sm' ? 'text-xs md:text-sm' : 'text-sm md:text-base',
								textColor === 'white' ? 'text-fg-inverse/80' : 'text-fg'
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
								titleClass,
								'font-black leading-tight',
								subtitle ? 'text-left' : 'text-center',
								textColor === 'white' ? 'text-fg-inverse' : 'text-fg'
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
								'font-light text-left leading-relaxed opacity-90',
								titleSize === 'sm' ? 'text-xs md:text-sm' : 'text-sm md:text-base',
								'line-clamp-3 md:line-clamp-4',
								textColor === 'white' ? 'text-fg-inverse/70' : 'text-fg-muted'
							]
								.filter(Boolean)
								.join(' ')}
						>
							{overview}
						</p>
					{/if}
					{#if overlayButton}
						<div class="flex items-center gap-2 md:gap-3 mt-3 md:mt-4">
							<button
								type="button"
								class="shrink-0 transition-opacity hover:opacity-70 min-w-touch min-h-touch flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
								aria-label="Play"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class={[
										'w-4 md:w-5 h-4 md:h-5',
										titleSize === 'sm' && 'w-4 h-4',
										textColor === 'white' ? 'text-fg-inverse' : 'text-fg'
									]
										.filter(Boolean)
										.join(' ')}
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							</button>
							{#if duration}
								<span
									class={[
										'font-medium',
										titleSize === 'sm' ? 'text-xs' : 'text-sm',
										textColor === 'white'
											? 'text-fg-inverse/80'
											: 'text-fg-muted'
									]
										.filter(Boolean)
										.join(' ')}
								>
									{duration}
								</span>
							{/if}
						</div>
					{/if}
					{#if buttonName && buttonLink}
						<div class="mt-2 w-11/12 self-center">
							<Button
								fullWidth={true}
								href={buttonLink}
								variant="solid"
								tone="neutral"
							>
								{buttonName}
							</Button>
						</div>
					{/if}
				</div>
			{/if}
		</div>

		{#if showExpandButton}
			<button
				type="button"
				class={[
					'absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8',
					'w-11 h-11 md:w-12 md:h-12 rounded-full',
					'bg-white/10 backdrop-blur-md',
					'hover:bg-white/20 transition-all duration-300',
					'flex items-center justify-center',
					'group z-10',
					'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'
				]
					.filter(Boolean)
					.join(' ')}
				onclick={onExpandClick}
				aria-label="Expand card details"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					class="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
					fill="currentColor"
				>
					<path
						d="M16 8.5h-4.5V4a1.5 1.5 0 0 0-3 0v4.5H4a1.5 1.5 0 0 0 0 3h4.5V16a1.5 1.5 0 0 0 3 0v-4.5H16a1.5 1.5 0 0 0 0-3z"
					/>
				</svg>
			</button>
		{/if}
	</div>
</Linkable>
{#if (buttonName || title) && !textOnImage}
	<div class="p-6 md:p-8 rounded-b-2xl flex flex-col gap-3 bg-surface">
		{#if subtitle}
			<p class="text-fg-muted text-sm md:text-base font-semibold tracking-wide uppercase">
				{subtitle}
			</p>
		{/if}
		{#if title}
			<h2
				class="text-fg text-xl md:text-2xl lg:text-3xl font-black leading-tight"
				class:text-left={subtitle}
				class:text-center={!subtitle}
			>
				{title}
			</h2>
		{/if}
		{#if overview}
			<p
				class="text-fg-muted font-light text-left text-sm md:text-base leading-relaxed line-clamp-4"
			>
				{overview}
			</p>
		{/if}
		{#if buttonName && buttonLink}
			<div class="mt-2 w-11/12 self-center">
				<Button fullWidth={true} href={buttonLink} variant="solid" tone="neutral">
					{buttonName}
				</Button>
			</div>
		{/if}
	</div>
{/if}

<style>
	.bg {
		background-color: var(--bg-color);
	}
</style>
