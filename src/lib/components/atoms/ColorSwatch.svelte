<script lang="ts">
	import type { AppleColor, ColorType } from '../../models/color.type';

	/**
	 * ColorDot component - unified color indicator and selector
	 *
	 * @example
	 * <ColorDot color="#0a84ff" selected={true} size={20} />
	 * <ColorDot color="blue" type="dual-tone" size="md" label="Blue" />
	 */

	type SizeType = number | 'sm' | 'md' | 'lg';

	interface Props {
		/** Color value (CSS color, hex code, or Apple color name) */
		color: string | AppleColor;
		/** Whether the color dot is selected */
		selected?: boolean;
		/** Size: pixels (number) or named size ('sm', 'md', 'lg') */
		size?: SizeType;
		/** Display type: 'solid' or 'dual-tone' gradient */
		type?: ColorType;
		/** Label for accessibility (used as aria-label and title) */
		label?: string;
		/** ARIA label for accessibility */
		ariaLabel?: string;
		/** Click event handler */
		onclick?: (e: MouseEvent) => void;
		/** CSS class for custom styling */
		class?: string;
	}

	let {
		color,
		selected = false,
		size = 'md',
		type = 'solid',
		label = undefined,
		ariaLabel = undefined,
		onclick = undefined,
		class: className = ''
	}: Props = $props();

	// Convert named sizes to pixels
	const sizeToPixels = (s: SizeType): number => {
		if (typeof s === 'number') return s;
		const sizes: Record<string, number> = {
			sm: 16,
			md: 24,
			lg: 32
		};
		return sizes[s] || 20;
	};

	const pixelSize = $derived(sizeToPixels(size));
	const finalLabel = $derived(label || ariaLabel || String(color));

	// Apple color palette with gradients
	const appleColors = {
		blue:
			type === 'dual-tone' ? 'linear-gradient(135deg, #a5d8ff 0%, #0a84ff 100%)' : '#0a84ff',
		purple:
			type === 'dual-tone' ? 'linear-gradient(135deg, #d4a5ff 0%, #9945ff 100%)' : '#9945ff',
		pink:
			type === 'dual-tone' ? 'linear-gradient(135deg, #ff9ae0 0%, #ff2d55 100%)' : '#ff2d55',
		orange:
			type === 'dual-tone' ? 'linear-gradient(135deg, #ffb340 0%, #ff9500 100%)' : '#ff9500',
		yellow:
			type === 'dual-tone' ? 'linear-gradient(135deg, #ffd340 0%, #ffcc00 100%)' : '#ffcc00',
		green:
			type === 'dual-tone' ? 'linear-gradient(135deg, #66e680 0%, #34c759 100%)' : '#34c759',
		silver: '#c7c7cc',
		'space-black': '#1a1a1a',
		'sky-blue': '#7dd3fc',
		starlight: '#fef3c7',
		midnight: '#0f172a'
	} as Record<string, string>;

	const getColorValue = (): string => {
		if (color in appleColors) {
			return appleColors[color as AppleColor];
		}
		return color;
	};

	const colorValue = $derived(getColorValue());
</script>

<button
	type="button"
	class={[
		'rounded-full border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent',
		selected
			? 'ring-2 ring-offset-2 ring-fg shadow-md scale-105'
			: 'hover:ring-2 hover:ring-offset-2 hover:ring-border-strong shadow-sm',
		className
	].join(' ')}
	style={`width:${pixelSize}px;height:${pixelSize}px;background:${colorValue};border-color:${selected ? 'rgb(var(--ds-color-fg))' : 'rgb(var(--ds-color-border))'}`}
	aria-pressed={selected}
	aria-label={finalLabel}
	title={finalLabel}
	{onclick}
>
	<span class="sr-only">{finalLabel}</span>
</button>
