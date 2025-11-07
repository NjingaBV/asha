<script lang="ts">
	export type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'solid';
	export type ButtonSize = 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
	export type ButtonTone = 'primary' | 'secondary' | 'neutral';

	interface Props {
		variant?: ButtonVariant;
		size?: ButtonSize;
		disabled?: boolean;
		fullWidth?: boolean;
		color?: string;
		tone?: ButtonTone;
		onClick?: (event: MouseEvent) => void;
		className?: string;
		rounded?: boolean;
	}

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		fullWidth = false,
		color,
		tone,
		onClick,
		className = '',
		rounded = false
	}: Props = $props();

	// Normalize size aliases
	const normalizedSize =
		size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : size;

	// Normalize variant (solid is an alias for primary)
	const normalizedVariant = variant === 'solid' ? 'primary' : variant;

	// Determine background color based on tone, color prop, or variant
	const getBackgroundClasses = () => {
		if (color) {
			return `text-white shadow-[0_0_32px_rgba(0,199,190,0.35)] hover:scale-[1.01]`;
		}
		if (tone) {
			if (normalizedVariant === 'ghost') {
				return tone === 'neutral'
					? 'bg-transparent text-surface-on hover:bg-surface/40'
					: tone === 'secondary'
						? 'bg-transparent text-secondary hover:bg-surface/40'
						: 'bg-transparent text-primary hover:bg-surface/40';
			}
			// solid variant with tone
			return tone === 'neutral'
				? 'bg-surface text-surface-on shadow-sm hover:scale-[1.01]'
				: tone === 'secondary'
					? 'bg-secondary text-white shadow-sm hover:scale-[1.01]'
					: 'bg-primary text-white shadow-[0_0_32px_rgba(0,199,190,0.35)] hover:scale-[1.01]';
		}
		// Default variant styling
		if (normalizedVariant === 'primary') {
			return 'bg-primary text-white shadow-[0_0_32px_rgba(0,199,190,0.35)] hover:scale-[1.01]';
		}
		if (normalizedVariant === 'ghost') {
			return 'bg-transparent text-primary hover:bg-surface/40';
		}
		if (normalizedVariant === 'outline') {
			return 'border border-border text-primary hover:bg-surface/40';
		}
		return '';
	};

	const handleClick = (event: MouseEvent) => {
		if (!disabled && onClick) {
			onClick(event);
		}
	};
</script>

<button
	class={`inline-flex items-center justify-center ${rounded ? 'rounded-full' : 'rounded-2xl'} font-medium transition
      ${fullWidth ? 'w-full' : ''}
      ${normalizedSize === 'sm' ? 'px-3 py-1 text-xs' : ''}
      ${normalizedSize === 'md' ? 'px-4 py-2 text-sm' : ''}
      ${normalizedSize === 'lg' ? 'px-5 py-3 text-base' : ''}
      ${getBackgroundClasses()}
      disabled:opacity-40 disabled:cursor-not-allowed
      ${className}
    `}
	style={color ? `background-color: ${color}` : ''}
	{disabled}
	onclick={handleClick}
>
	<slot />
</button>
