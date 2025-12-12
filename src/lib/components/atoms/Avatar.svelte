<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Avatar size */
	export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

	/** Avatar shape */
	export type AvatarShape = 'circle' | 'square';

	/** Avatar status indicator */
	export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy' | 'none';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
			default: 'md',
			description: 'Avatar size'
		},
		shape: {
			type: 'string',
			options: ['circle', 'square'],
			default: 'circle',
			description: 'Avatar shape'
		},
		status: {
			type: 'string',
			options: ['online', 'offline', 'away', 'busy', 'none'],
			default: 'none',
			description: 'Status indicator'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Image source URL */
		src?: string;
		/** Alt text for the image */
		alt?: string;
		/** Initials to display when no image */
		initials?: string;
		/** Avatar size */
		size?: AvatarSize;
		/** Avatar shape */
		shape?: AvatarShape;
		/** Status indicator */
		status?: AvatarStatus;
		/** Custom CSS classes */
		class?: string;
		/** Fallback icon snippet */
		fallback?: Snippet;
	}

	let {
		src,
		alt = '',
		initials,
		size = 'md',
		shape = 'circle',
		status = 'none',
		class: className = '',
		fallback
	}: Props = $props();

	// ============================================
	// State
	// ============================================

	let imageError = $state(false);

	// ============================================
	// Derived State
	// ============================================

	const showImage = $derived(!!src && !imageError);
	const showInitials = $derived(!showImage && !!initials);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes for avatar container */
	const sizeClasses: Record<AvatarSize, string> = {
		xs: 'w-6 h-6 text-xs',
		sm: 'w-8 h-8 text-sm',
		md: 'w-10 h-10 text-base',
		lg: 'w-12 h-12 text-lg',
		xl: 'w-16 h-16 text-xl',
		'2xl': 'w-20 h-20 text-2xl'
	};

	/** Shape classes */
	const shapeClasses: Record<AvatarShape, string> = {
		circle: 'rounded-full',
		square: 'rounded-lg'
	};

	/** Status indicator colors */
	const statusColors: Record<AvatarStatus, string> = {
		online: 'bg-success',
		offline: 'bg-fg-muted',
		away: 'bg-warning',
		busy: 'bg-error',
		none: ''
	};

	/** Status indicator size based on avatar size */
	const statusSizeClasses: Record<AvatarSize, string> = {
		xs: 'w-1.5 h-1.5 border',
		sm: 'w-2 h-2 border',
		md: 'w-2.5 h-2.5 border-2',
		lg: 'w-3 h-3 border-2',
		xl: 'w-3.5 h-3.5 border-2',
		'2xl': 'w-4 h-4 border-2'
	};

	/** Combined avatar classes */
	const avatarClasses = $derived(
		[
			'relative inline-flex items-center justify-center',
			'bg-bg-muted text-fg-muted',
			'font-medium select-none',
			'overflow-hidden',
			sizeClasses[size],
			shapeClasses[shape],
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Status indicator classes */
	const statusClasses = $derived(
		[
			'absolute bottom-0 right-0',
			'rounded-full border-bg',
			statusSizeClasses[size],
			statusColors[status]
		]
			.filter(Boolean)
			.join(' ')
	);

	// ============================================
	// Event Handlers
	// ============================================

	function handleImageError() {
		imageError = true;
	}
</script>

<span
	class={avatarClasses}
	role="img"
	aria-label={alt || initials || 'Avatar'}
	data-size={size}
	data-shape={shape}
>
	{#if showImage}
		<img
			{src}
			{alt}
			class="w-full h-full object-cover"
			onerror={handleImageError}
			loading="lazy"
		/>
	{:else if showInitials}
		<span aria-hidden="true">{initials}</span>
	{:else if fallback}
		{@render fallback()}
	{:else}
		<!-- Default user icon -->
		<svg class="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path
				d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
			/>
		</svg>
	{/if}

	{#if status !== 'none'}
		<span class={statusClasses} aria-label={`Status: ${status}`}></span>
	{/if}
</span>
