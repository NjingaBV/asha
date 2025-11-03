<script lang="ts">
	let {
		label = undefined,
		variant = 'solid',
		color = 'primary',
		badgeSize = 'base',
		rounded = true,
		children
	}: {
		label?: string;
		variant?: 'solid' | 'outline' | 'ghost';
		color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
		badgeSize?: 'sm' | 'base' | 'lg';
		rounded?: boolean;
		children: any;
	} = $props();

	// Color schemes inspired by Apple Watch
	const colorSchemes: Record<string, Record<string, string>> = {
		primary: {
			solid: 'bg-blue-600 text-white',
			outline: 'border border-blue-600 text-blue-600',
			ghost: 'text-blue-600'
		},
		secondary: {
			solid: 'bg-slate-600 text-white',
			outline: 'border border-slate-600 text-slate-600',
			ghost: 'text-slate-600'
		},
		success: {
			solid: 'bg-emerald-600 text-white',
			outline: 'border border-emerald-600 text-emerald-600',
			ghost: 'text-emerald-600'
		},
		warning: {
			solid: 'bg-amber-600 text-white',
			outline: 'border border-amber-600 text-amber-600',
			ghost: 'text-amber-600'
		},
		danger: {
			solid: 'bg-red-600 text-white',
			outline: 'border border-red-600 text-red-600',
			ghost: 'text-red-600'
		},
		neutral: {
			solid: 'bg-gray-900 text-white',
			outline: 'border border-gray-900 text-gray-900',
			ghost: 'text-gray-900'
		}
	};

	let scheme = $derived(colorSchemes[color][variant]);
	let sizeClasses = $derived(
		badgeSize === 'sm'
			? 'px-2 py-0.5 text-xs'
			: badgeSize === 'lg'
				? 'px-3 py-1 text-sm'
				: 'px-2.5 py-0.5 text-xs'
	);
	let roundedClass = $derived(rounded ? 'rounded-full' : 'rounded');
	const baseClasses = 'inline-flex items-center font-medium';
	let allClasses = $derived(
		[baseClasses, sizeClasses, roundedClass, scheme].filter(Boolean).join(' ')
	);
</script>

<span class={allClasses}>
	{#if label}
		{label}
	{:else}
		{@render children?.()}
	{/if}
</span>
