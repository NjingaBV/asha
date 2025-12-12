<!--
  @component Video
  
  A video element component with loading states and controls.
  Supports various video formats and accessibility features.
  
  @example Basic usage
  ```svelte
  <Video src="/video.mp4" />
  ```
  
  @example With poster and controls
  ```svelte
  <Video 
    src="/video.mp4"
    poster="/thumbnail.jpg"
    controls
  />
  ```
  
  @example Autoplay muted (for background videos)
  ```svelte
  <Video src="/bg.mp4" autoplay muted loop />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Video object-fit */
	export type VideoFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

	/** Prop definitions for documentation */
	export const propDefs = {
		fit: {
			type: 'string',
			options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
			default: 'cover',
			description: 'Object fit behavior'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Video source URL */
		src: string;
		/** Poster image URL */
		poster?: string;
		/** Object fit */
		fit?: VideoFit;
		/** Width (CSS value or number) */
		width?: string | number;
		/** Height (CSS value or number) */
		height?: string | number;
		/** Aspect ratio (e.g., "16/9") */
		aspectRatio?: string;
		/** Show native controls */
		controls?: boolean;
		/** Autoplay (should be used with muted) */
		autoplay?: boolean;
		/** Muted */
		muted?: boolean;
		/** Loop playback */
		loop?: boolean;
		/** Plays inline on mobile */
		playsinline?: boolean;
		/** Preload behavior */
		preload?: 'none' | 'metadata' | 'auto';
		/** ARIA label for accessibility */
		ariaLabel?: string;
		/** Custom CSS classes */
		class?: string;
		/** ID for the video element */
		id?: string;
		/** Bind to video element */
		videoElement?: HTMLVideoElement;
		/** Play event handler */
		onplay?: (event: Event) => void;
		/** Pause event handler */
		onpause?: (event: Event) => void;
		/** Ended event handler */
		onended?: (event: Event) => void;
		/** Time update handler */
		ontimeupdate?: (event: Event) => void;
		/** Loaded data handler */
		onloadeddata?: (event: Event) => void;
		/** Error handler */
		onerror?: (event: Event) => void;
	}

	let {
		src,
		poster,
		fit = 'cover',
		width,
		height,
		aspectRatio,
		controls = false,
		autoplay = false,
		muted = false,
		loop = false,
		playsinline = true,
		preload = 'metadata',
		ariaLabel,
		class: className = '',
		id,
		videoElement = $bindable(),
		onplay,
		onpause,
		onended,
		ontimeupdate,
		onloadeddata,
		onerror
	}: Props = $props();

	// ============================================
	// State
	// ============================================

	let isLoading = $state(true);
	let hasError = $state(false);

	// ============================================
	// Style Classes
	// ============================================

	/** Object-fit classes */
	const fitClasses: Record<VideoFit, string> = {
		contain: 'object-contain',
		cover: 'object-cover',
		fill: 'object-fill',
		none: 'object-none',
		'scale-down': 'object-scale-down'
	};

	/** Video classes */
	const videoClasses = $derived(
		['block', fitClasses[fit], !width && !height ? 'w-full h-full' : '', className]
			.filter(Boolean)
			.join(' ')
	);

	/** Container style */
	const containerStyle = $derived(() => {
		const styles: string[] = [];
		if (aspectRatio) {
			styles.push(`aspect-ratio: ${aspectRatio}`);
		}
		return styles.join('; ') || undefined;
	});

	/** Video style */
	const videoStyle = $derived(() => {
		const styles: string[] = [];
		if (typeof width === 'number') {
			styles.push(`width: ${width}px`);
		} else if (width) {
			styles.push(`width: ${width}`);
		}
		if (typeof height === 'number') {
			styles.push(`height: ${height}px`);
		} else if (height) {
			styles.push(`height: ${height}`);
		}
		return styles.join('; ') || undefined;
	});

	// ============================================
	// Event Handlers
	// ============================================

	function handleLoadedData(event: Event) {
		isLoading = false;
		onloadeddata?.(event);
	}

	function handleError(event: Event) {
		isLoading = false;
		hasError = true;
		onerror?.(event);
	}
</script>

<div
	class="relative overflow-hidden bg-bg-muted"
	style={containerStyle()}
	data-loading={isLoading ? '' : undefined}
	data-error={hasError ? '' : undefined}
>
	{#if isLoading && poster}
		<img
			src={poster}
			alt=""
			class="absolute inset-0 w-full h-full object-cover"
			aria-hidden="true"
		/>
	{/if}

	{#if hasError}
		<div class="absolute inset-0 flex items-center justify-center text-fg-muted">
			<svg
				class="w-12 h-12"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6"
				/>
			</svg>
		</div>
	{/if}

	<video
		bind:this={videoElement}
		{id}
		{src}
		{poster}
		{controls}
		{autoplay}
		{muted}
		{loop}
		{playsinline}
		{preload}
		class={videoClasses}
		style={videoStyle()}
		aria-label={ariaLabel}
		{onplay}
		{onpause}
		{onended}
		{ontimeupdate}
		onloadeddata={handleLoadedData}
		onerror={handleError}
	>
		Your browser does not support the video tag.
	</video>
</div>
