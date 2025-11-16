<script lang="ts">
	/**
	 * ColorIndicator component - displays Apple-style color indicators
	 *
	 * @example
	 * <ColorIndicator color="blue" type="dual-tone" />
	 * <ColorIndicator color="silver" type="solid" />
	 */

	import type { AppleColor, ColorType } from '../../models/color.type';

	interface Props {
		/** Color name */
		color: AppleColor;
		/** Color type - solid or dual-tone gradient */
		type?: ColorType;
		/** Size of the indicator */
		size?: 'sm' | 'md' | 'lg';
		/** Additional CSS classes */
		class?: string;
		/** ARIA label for accessibility */
		ariaLabel?: string;
	}

	let { color, type = 'solid', size = 'md', class: className = '', ariaLabel }: Props = $props();

	// Size classes
	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-6 h-6',
		lg: 'w-8 h-8'
	};

	// Color mapping for Apple colors
	const getColorClasses = (): string => {
		const colors = {
			blue:
				type === 'dual-tone'
					? 'bg-gradient-to-br from-blue-400 to-blue-600'
					: 'bg-blue-500',
			purple:
				type === 'dual-tone'
					? 'bg-gradient-to-br from-purple-400 to-purple-600'
					: 'bg-purple-500',
			pink:
				type === 'dual-tone'
					? 'bg-gradient-to-br from-pink-400 to-pink-600'
					: 'bg-pink-500',
			orange:
				type === 'dual-tone'
					? 'bg-gradient-to-br from-orange-400 to-orange-600'
					: 'bg-orange-500',
			yellow:
				type === 'dual-tone'
					? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
					: 'bg-yellow-500',
			green:
				type === 'dual-tone'
					? 'bg-gradient-to-br from-green-400 to-green-600'
					: 'bg-green-500',
			silver: 'bg-gray-300',
			'space-black': 'bg-gray-900',
			'sky-blue': 'bg-sky-400',
			starlight: 'bg-yellow-100',
			midnight: 'bg-blue-900'
		};
		return colors[color] || 'bg-gray-400';
	};

	const indicatorClasses = $derived(
		[
			'inline-block rounded-full border border-gray-200 shadow-sm',
			sizeClasses[size],
			getColorClasses(),
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<span aria-label={ariaLabel} class={indicatorClasses} role="img"></span>
