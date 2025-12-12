<!--
  @component MediaCaption
  
  A component for displaying media (image/video) with a caption.
  Useful for galleries, articles, and product displays.
  
  @example Basic usage
  ```svelte
  <MediaCaption src="/photo.jpg" caption="Beautiful sunset" />
  ```
  
  @example With credit
  ```svelte
  <MediaCaption 
    src="/photo.jpg" 
    caption="Award-winning photograph"
    credit="Photo by John Doe"
  />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Caption position */
	export type CaptionPosition = 'below' | 'overlay';

	/** Prop definitions for documentation */
	export const propDefs = {
		position: {
			type: 'string',
			options: ['below', 'overlay'],
			default: 'below',
			description: 'Caption position'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Media source URL */
		src: string;
		/** Alt text for image */
		alt?: string;
		/** Caption text */
		caption?: string;
		/** Credit/attribution text */
		credit?: string;
		/** Caption position */
		position?: CaptionPosition;
		/** Aspect ratio */
		aspectRatio?: string;
		/** Object fit */
		fit?: 'cover' | 'contain' | 'fill';
		/** Custom CSS classes */
		class?: string;
		/** Media slot (for custom content like video) */
		media?: Snippet;
	}

	let {
		src,
		alt = '',
		caption,
		credit,
		position = 'below',
		aspectRatio,
		fit = 'cover',
		class: className = '',
		media
	}: Props = $props();

	// ============================================
	// Style Classes
	// ============================================

	/** Object fit classes */
	const fitClasses: Record<string, string> = {
		cover: 'object-cover',
		contain: 'object-contain',
		fill: 'object-fill'
	};

	/** Container classes */
	const containerClasses = $derived(['relative', className].filter(Boolean).join(' '));

	/** Figure classes */
	const figureClasses = 'overflow-hidden rounded-lg';

	/** Image classes */
	const imageClasses = $derived(['w-full h-full', fitClasses[fit]].join(' '));

	/** Caption classes for overlay */
	const overlayCaptionClasses = [
		'absolute bottom-0 left-0 right-0',
		'p-4 bg-gradient-to-t from-black/80 to-transparent',
		'text-white'
	].join(' ');

	/** Caption classes for below */
	const belowCaptionClasses = ['mt-2 text-fg-muted'].join(' ');
</script>

<figure class={containerClasses} data-position={position}>
	<div class={figureClasses} style={aspectRatio ? `aspect-ratio: ${aspectRatio}` : undefined}>
		{#if media}
			{@render media()}
		{:else}
			<img {src} {alt} class={imageClasses} loading="lazy" />
		{/if}

		{#if position === 'overlay' && (caption || credit)}
			<figcaption class={overlayCaptionClasses}>
				{#if caption}
					<p class="text-sm font-medium">{caption}</p>
				{/if}
				{#if credit}
					<p class="text-xs opacity-75 mt-1">{credit}</p>
				{/if}
			</figcaption>
		{/if}
	</div>

	{#if position === 'below' && (caption || credit)}
		<figcaption class={belowCaptionClasses}>
			{#if caption}
				<p class="text-sm">{caption}</p>
			{/if}
			{#if credit}
				<p class="text-xs mt-0.5">{credit}</p>
			{/if}
		</figcaption>
	{/if}
</figure>
