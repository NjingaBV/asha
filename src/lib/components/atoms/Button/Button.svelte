<script lang="ts">
	let {
		size = 'medium',
		color = undefined,
		rounded = false,
		border = false,
		onClick = undefined,
		variant = 'solid',
		tone = 'primary',
		fullWidth = false,
		disabled = false,
		className = undefined,
		class: classNameAlias = undefined,
		children
	}: {
		size?: 'small' | 'medium' | 'large';
		color?: string | undefined;
		rounded?: boolean;
		border?: boolean;
		onClick?: (() => void) | undefined;
		variant?: 'solid' | 'outline' | 'ghost';
		tone?: 'primary' | 'secondary' | 'neutral' | 'success' | 'danger';
		fullWidth?: boolean;
		disabled?: boolean;
		className?: string | undefined;
		class?: string | undefined;
		children?: any;
	} = $props();

	// Use class prop if className is not provided
	let finalClassName = $derived(classNameAlias ?? className);

	// Compute classes
	const base =
		'inline-flex items-center justify-center font-medium transition focus-visible:outline-none focus-visible:ring-2 ring-blue-600 ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	let rounding = $derived(rounded ? 'rounded-full' : 'rounded-md');
	let widthCls = $derived(fullWidth ? 'w-full' : '');
	let sizeCls = $derived(
		size === 'small'
			? 'px-3 py-1.5 text-sm md:text-base'
			: size === 'large'
				? 'px-6 py-3 text-lg md:text-xl'
				: 'px-4 py-2 text-base md:text-lg'
	);

	// Tone + variant classes (used when no custom color)
	let scheme = $derived(() => {
		if (variant === 'ghost') {
			if (tone === 'secondary') return 'text-slate-700 hover:bg-slate-100';
			if (tone === 'neutral') return 'text-gray-800 hover:bg-gray-100';
			if (tone === 'success') return 'text-emerald-700 hover:bg-emerald-50';
			if (tone === 'danger') return 'text-red-700 hover:bg-red-50';
			return 'text-blue-700 hover:bg-blue-50'; // primary
		}
		if (variant === 'outline') {
			if (tone === 'secondary')
				return 'border border-slate-300 text-slate-800 hover:bg-slate-50';
			if (tone === 'neutral') return 'border border-gray-300 text-gray-900 hover:bg-gray-50';
			if (tone === 'success')
				return 'border border-emerald-300 text-emerald-800 hover:bg-emerald-50';
			if (tone === 'danger') return 'border border-red-300 text-red-800 hover:bg-red-50';
			return 'border border-blue-300 text-blue-800 hover:bg-blue-50';
		}
		// solid
		if (tone === 'secondary') return 'bg-slate-200 text-slate-900 hover:bg-slate-300';
		if (tone === 'neutral') return 'bg-gray-800 text-white hover:bg-gray-900';
		if (tone === 'success') return 'bg-emerald-600 text-white hover:bg-emerald-700';
		if (tone === 'danger') return 'bg-red-600 text-white hover:bg-red-700';
		return 'bg-blue-600 text-white hover:bg-blue-700'; // primary
	});

	// Optional custom color path
	let hex = $derived(color?.trim() ?? '');
	let match = $derived(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex));
	let rgb = $derived(
		match ? [match[1], match[2], match[3]].map((v) => `${parseInt(v, 16)}`) : []
	);
	let backgroundColor = $derived(rgb.length === 3 ? rgb.join() : '');
	let brightness = $derived(
		rgb.length === 3
			? Math.round(
					(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
						1000
				)
			: null
	);
	let textColor = $derived(
		brightness !== null ? (brightness > 125 ? '#000000' : '#ffffff') : undefined
	);
</script>

<button
	type="button"
	class={[
		base,
		rounding,
		widthCls,
		sizeCls,
		border ? 'border' : '',
		!color ? scheme() : '',
		finalClassName
	]
		.filter(Boolean)
		.join(' ')}
	onclick={onClick}
	{disabled}
	aria-disabled={disabled}
	style={color && backgroundColor
		? `background-color:rgb(${backgroundColor}); color: ${textColor};`
		: undefined}
>
	{@render children?.()}
</button>
