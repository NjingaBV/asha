<script lang="ts">
	import Youtube from '$lib/components/molecules/Youtube.svelte';
	import { createActor } from 'xstate';
	import { playerMachine } from '$lib/machines/player.machine';

	/**
	 * Player component - video player with metadata display
	 *
	 * @example
	 * <Player
	 *   videoId="G-ECTntZYtk"
	 *   title="My Video"
	 *   subtitle="Episode 1"
	 *   thumbnail="..."
	 * />
	 */

	interface Props {
		/** Video ID or YouTube URL */
		videoId: string;
		/** Video title */
		title?: string;
		/** Video subtitle/episode title */
		subtitle?: string;
		/** Video description/overview */
		overview?: string;
		/** Thumbnail image URL */
		thumbnail?: string;
		/** Max lines to show for overview (clamped) */
		overviewLines?: number;
		/** Show play button on thumbnail */
		showPlayButton?: boolean;
		/** Video autoplay when clicking play button */
		autoplay?: boolean;
		/** Callback when play button is clicked */
		onPlay?: () => void;
		/** Callback when overview expand/collapse toggled */
		onToggleExpand?: (expanded: boolean) => void;
		/** Callback when video player is ready */
		onPlayerReady?: () => void;
		/** Additional CSS classes */
		class?: string;
	}

	let {
		videoId,
		title = undefined,
		subtitle = undefined,
		overview = undefined,
		thumbnail = undefined,
		overviewLines = 5,
		showPlayButton = true,
		autoplay = false,
		onPlay = undefined,
		onToggleExpand = undefined,
		onPlayerReady = undefined,
		class: className = ''
	}: Props = $props();

	// ============================================
	// State Machine
	// ============================================

	const actor = createActor(playerMachine, {
		input: {
			mediaId: videoId,
			mediaTitle: title,
			mediaDescription: overview,
			mediaThumbnail: thumbnail,
			expanded: false
		}
	});
	actor.start();

	// Subscribe to state changes
	let state = $state(actor.getSnapshot());

	actor.subscribe((snapshot) => {
		state = snapshot;
	});

	// Cleanup
	$effect(() => {
		return () => actor.stop();
	});

	// ============================================
	// Derived State
	// ============================================

	const isPlaying = $derived(state.matches('playing'));
	const isExpanded = $derived(state.context.expanded);

	/**
	 * Extract video ID from various YouTube URL formats
	 */
	const extractVideoId = (input: string): string | null => {
		// Already a video ID (11 characters)
		if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
			return input;
		}

		// YouTube URL formats
		const youtubeRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = input.match(youtubeRegExp);

		if (match && match[2].length === 11) {
			return match[2];
		}

		return null;
	};

	const extractedVideoId = $derived(extractVideoId(videoId));

	/**
	 * Check if overview text is truncated
	 */
	const isTruncated = $derived(overview && overview.length > overviewLines * 45 ? true : false);

	/**
	 * Handle play button click
	 */
	const handlePlayClick = () => {
		actor.send({ type: 'PLAY' });
		onPlay?.();
	};

	/**
	 * Handle overview expand/collapse
	 */
	const handleToggleExpand = () => {
		actor.send({ type: 'TOGGLE_EXPAND' });
		onToggleExpand?.(!isExpanded);
	};

	/**
	 * Handle player ready event
	 */
	const handlePlayerReady = () => {
		onPlayerReady?.();
	};
</script>

<div class={['flex flex-col', className].filter(Boolean).join(' ')}>
	<!-- Video Player Section -->
	<div class="relative flex w-full aspect-video items-center justify-center bg-black">
		{#if !isPlaying && thumbnail}
			<!-- Thumbnail -->
			<img
				src={thumbnail}
				alt={title || 'Video thumbnail'}
				class="absolute inset-0 w-full h-full object-cover"
			/>

			<!-- Play Button -->
			{#if showPlayButton}
				<button
					class="relative z-10 w-1/4 p-4 opacity-90 hover:opacity-100 transition-opacity duration-200"
					aria-label="Play video"
					onclick={handlePlayClick}
				>
					<svg class="stroke-[5] h-full fill-white" stroke-width="2" viewBox="0 0 50 50">
						<path d="M 10 5.25 L 10 44.746094 L 43.570313 25 Z" />
					</svg>
				</button>
			{/if}
		{:else if extractedVideoId}
			<!-- YouTube Player -->
			<Youtube videoId={extractedVideoId} {autoplay} onReady={handlePlayerReady} />
		{/if}
	</div>

	<!-- Metadata Section -->
	<div class="p-4 flex flex-col gap-3">
		<!-- Subtitle -->
		{#if subtitle}
			<h4 class="text-fg-muted text-lg font-bold">
				{subtitle}
			</h4>
		{/if}

		<!-- Title -->
		{#if title}
			<h2
				class={['text-3xl md:text-4xl font-bold', subtitle ? 'text-left' : 'text-center']
					.filter(Boolean)
					.join(' ')}
			>
				{title}
			</h2>
		{/if}

		<!-- Overview -->
		{#if overview}
			<div class="relative">
				<p
					class={[
						'text-fg-muted text-base leading-relaxed',
						!isExpanded && isTruncated ? `line-clamp-${overviewLines}` : ''
					]
						.filter(Boolean)
						.join(' ')}
				>
					{overview}
				</p>

				<!-- Expand/Collapse Button -->
				{#if isTruncated}
					<button
						class="mt-2 text-accent hover:text-accent-hover font-semibold transition-colors"
						onclick={handleToggleExpand}
						aria-expanded={isExpanded}
						aria-label={isExpanded ? 'Show less' : 'Show more'}
					>
						{isExpanded ? 'Show less' : 'Show more'}
					</button>
				{/if}
			</div>
		{/if}
	</div>
</div>
