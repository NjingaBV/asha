<script lang="ts">
	/**
	 * Hamburger Menu Button component - animated menu toggle
	 *
	 * @example
	 * <Hamburger bind:open ariaLabel="Toggle main menu" />
	 * <Hamburger bind:open size="lg" color="primary" />
	 * <Hamburger bind:open size="sm" variant="cross" strokeWidth={6} />
	 */

	export type HamburgerSize = 'sm' | 'md' | 'lg';
	export type HamburgerVariant = 'default' | 'cross' | 'arrow' | 'plus';
	export type HamburgerColor =
		| 'currentColor'
		| 'inherit'
		| 'primary'
		| 'white'
		| 'black'
		| 'gray-600';

	interface Props {
		/** Whether the menu is open (bindable) */
		open?: boolean;
		/** ARIA label for accessibility */
		ariaLabel?: string;
		/** Size of the hamburger icon */
		size?: HamburgerSize;
		/** Visual variant/style of the hamburger */
		variant?: HamburgerVariant;
		/** Color of the icon */
		color?: HamburgerColor;
		/** SVG stroke width */
		strokeWidth?: number;
		/** Animation duration in milliseconds */
		duration?: number;
		/** Additional CSS classes */
		class?: string;
		/** Callback when toggled */
		onToggle?: (open: boolean) => void;
		/** Disabled state */
		disabled?: boolean;
	}

	let {
		open = $bindable(false),
		ariaLabel = 'Toggle menu',
		size = 'md',
		variant = 'default',
		color = 'currentColor',
		strokeWidth = 5,
		duration = 400,
		class: className = '',
		onToggle = undefined,
		disabled = false
	}: Props = $props();

	// Size mappings
	const sizeMap: Record<HamburgerSize, number> = {
		sm: 40,
		md: 60,
		lg: 80
	};

	// Color mappings
	const colorMap: Record<HamburgerColor, string> = {
		currentColor: 'text-current',
		inherit: 'text-inherit',
		primary: 'text-blue-600',
		white: 'text-white',
		black: 'text-black',
		'gray-600': 'text-gray-600'
	};

	const iconSize = sizeMap[size];

	// SVG paths for different variants
	const hamburgerPaths = {
		default: {
			top: 'm 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20',
			middle: 'm 30,50 h 40',
			bottom: 'm 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
		},
		cross: {
			top: 'm 20,20 l 60,60',
			middle: 'm 30,50 h 40',
			bottom: 'm 80,20 l -60,60'
		},
		arrow: {
			top: 'm 30,35 l 20,-15 l 20,15',
			middle: 'm 30,50 h 40',
			bottom: 'm 30,65 l 20,15 l 20,-15'
		},
		plus: {
			top: 'm 50,20 v 60',
			middle: 'm 30,50 h 40',
			bottom: 'm 30,50 h 40'
		}
	};

	const paths = hamburgerPaths[variant];

	const handleClick = () => {
		if (!disabled) {
			open = !open;
			onToggle?.(open);
		}
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
			e.preventDefault();
			handleClick();
		}
	};
</script>

<button
	{disabled}
	onclick={handleClick}
	onkeydown={handleKeydown}
	aria-expanded={open}
	aria-label={ariaLabel}
	style="--hamburger-duration: {duration}ms;"
	class={[
		'relative flex items-center justify-center overflow-hidden md:hidden',
		'transition-opacity duration-200',
		disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-75',
		'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
		colorMap[color],
		className
	]
		.filter(Boolean)
		.join(' ')}
	type="button"
>
	<svg
		class:open
		class="hamburger-svg"
		viewBox="0 0 100 100"
		fill="none"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
		width={iconSize}
		height={iconSize}
		aria-hidden="true"
	>
		<path class="top" d={paths.top} />
		<path class="middle" d={paths.middle} />
		<path class="bottom" d={paths.bottom} />
	</svg>
</button>

<style>
	button {
		--hamburger-duration: 400ms;
	}

	.hamburger-svg {
		transition: transform var(--hamburger-duration);
	}

	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset var(--hamburger-duration);
	}

	.middle {
		transform-origin: 50%;
		transition: transform var(--hamburger-duration);
	}

	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset var(--hamburger-duration);
	}

	.open {
		transform: rotate(45deg);
	}

	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}

	.open .middle {
		transform: rotate(90deg);
	}
</style>
