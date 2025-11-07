<script lang="ts">
	/**
	 * Youtube component - embedded YouTube video player
	 *
	 * @example
	 * <Youtube videoId="G-ECTntZYtk" />
	 * <Youtube videoId="abc123" autoplay width={640} height={360} />
	 */

	export type AspectRatio = '16/9' | '4/3';
	export type PlayerEvent = 'ready' | 'play' | 'pause' | 'end' | 'error';

	interface PlayerVars {
		autoplay?: boolean;
		controls?: boolean;
		modestbranding?: boolean;
		playsinline?: boolean;
		rel?: boolean;
		showinfo?: boolean;
		fs?: boolean;
		iv_load_policy?: number;
	}

	interface Props {
		/** YouTube video ID */
		videoId: string;
		/** Player width in pixels */
		width?: number;
		/** Player height in pixels */
		height?: number;
		/** Aspect ratio for responsive sizing */
		aspectRatio?: AspectRatio;
		/** Auto-play video on load */
		autoplay?: boolean;
		/** Show player controls */
		controls?: boolean;
		/** Allow fullscreen */
		allowFullscreen?: boolean;
		/** Modest branding (hide YouTube logo) */
		modestbranding?: boolean;
		/** Play inline on mobile */
		playsinline?: boolean;
		/** Show related videos */
		showRelated?: boolean;
		/** Custom player variables */
		playerVars?: Partial<PlayerVars>;
		/** Callback when player is ready */
		onReady?: () => void;
		/** Callback when video plays */
		onPlay?: () => void;
		/** Callback when video pauses */
		onPause?: () => void;
		/** Callback when video ends */
		onEnd?: () => void;
		/** Callback on error */
		onError?: (error: number) => void;
		/** Additional CSS classes */
		class?: string;
	}

	let {
		videoId,
		width = undefined,
		height = undefined,
		aspectRatio = '16/9',
		autoplay = false,
		controls = true,
		allowFullscreen = true,
		modestbranding = false,
		playsinline = true,
		showRelated = false,
		playerVars = {},
		onReady = undefined,
		onPlay = undefined,
		onPause = undefined,
		onEnd = undefined,
		onError = undefined,
		class: className = ''
	}: Props = $props();

	let isReady = $state(false);
	let player: any | null = null;
	let playerContainer: HTMLDivElement | undefined = $state();

	// Merge default player vars with custom ones
	const mergedPlayerVars: PlayerVars = {
		autoplay: autoplay ? 1 : 0,
		controls: controls ? 1 : 0,
		modestbranding: modestbranding ? 1 : 0,
		playsinline: playsinline ? 1 : 0,
		rel: showRelated ? 1 : 0,
		showinfo: 0,
		fs: allowFullscreen ? 1 : 0,
		iv_load_policy: 3,
		...playerVars
	} as any;

	/**
	 * Initialize the YouTube player
	 */
	const initializePlayer = () => {
		if (typeof window === 'undefined' || !playerContainer) return;

		const YTGlobal = (window as any).YT;
		if (!YTGlobal) {
			console.error('YouTube API not loaded');
			return;
		}

		// Clear existing player if any
		if (player) {
			player.destroy();
			player = null;
		}

		try {
			player = new YTGlobal.Player(playerContainer, {
				videoId,
				width: width || '100%',
				height: height || '100%',
				playerVars: mergedPlayerVars,
				events: {
					onReady: handlePlayerReady,
					onStateChange: handlePlayerStateChange,
					onError: handlePlayerError
				}
			});
		} catch (error) {
			console.error('Failed to initialize YouTube player:', error);
		}
	};

	/**
	 * Load a new video into the player
	 */
	const loadVideo = (newVideoId: string) => {
		if (player && isReady) {
			player.cueVideoById(newVideoId);
			if (autoplay) {
				player.playVideo();
			}
		}
	};

	const handlePlayerReady = () => {
		isReady = true;
		onReady?.();
		if (autoplay) {
			player?.playVideo();
		}
	};

	const handlePlayerStateChange = (event: any) => {
		const YTGlobal = (window as any).YT;
		if (!YTGlobal) return;

		switch (event.data) {
			case YTGlobal.PlayerState.PLAYING:
				onPlay?.();
				break;
			case YTGlobal.PlayerState.PAUSED:
				onPause?.();
				break;
			case YTGlobal.PlayerState.ENDED:
				onEnd?.();
				break;
		}
	};

	const handlePlayerError = (event: any) => {
		onError?.(event.data);
	};

	// Load YouTube API script
	$effect.pre(() => {
		if (typeof window === 'undefined') return;

		// Check if API is already loaded
		if ((window as any).YT?.Player) {
			initializePlayer();
			return;
		}

		// Define callback for when API loads
		(window as any).onYouTubeIframeAPIReady = () => {
			initializePlayer();
		};

		// Load the API if not already loaded
		if (!(window as any).YT) {
			const tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/iframe_api';
			const firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
		}
	});

	// Update player when videoId changes
	$effect(() => {
		if (isReady && videoId) {
			loadVideo(videoId);
		}
	});

	// Cleanup on unmount
	$effect.pre(() => {
		return () => {
			if (player) {
				player.destroy();
				player = null;
			}
		};
	});

	// Aspect ratio classes
	const aspectRatioMap: Record<AspectRatio, string> = {
		'16/9': 'aspect-video',
		'4/3': 'aspect-[4/3]'
	};
</script>

<svelte:head>
	<!-- YouTube API will be loaded dynamically -->
</svelte:head>

<div class={['relative w-full', aspectRatioMap[aspectRatio], className].filter(Boolean).join(' ')}>
	<div bind:this={playerContainer} class="absolute inset-0 w-full h-full"></div>
</div>
