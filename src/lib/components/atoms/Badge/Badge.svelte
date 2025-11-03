<script lang="ts">
	// Backward compatibility props
	export let label: string | undefined = undefined;
	export let tone: 'dark' | 'light' | 'accent' | undefined = undefined;
	export let size: 'sm' | 'md' | undefined = undefined;

	// New Apple Watch inspired props
	export let variant: 'solid' | 'outline' | 'ghost' = 'solid';
	export let color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' =
		'primary';
	export let badgeSize: 'sm' | 'base' | 'lg' = 'base';
	export let rounded: boolean = true;

	// Backward compatibility mapping
	$: actualVariant = tone === 'light' ? 'outline' : 'solid';
	$: actualColor = tone === 'accent' ? 'primary' : tone === 'dark' ? 'neutral' : 'neutral';
	$: actualSize = size === 'sm' ? 'sm' : size === 'md' ? 'base' : badgeSize;

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

	$: scheme = tone ? colorSchemes[actualColor][actualVariant] : colorSchemes[color][variant];
	$: sizeClasses =
		actualSize === 'sm'
			? 'px-2 py-0.5 text-xs'
			: actualSize === 'lg'
				? 'px-3 py-1 text-sm'
				: 'px-2.5 py-0.5 text-xs';
	$: roundedClass = rounded ? 'rounded-full' : 'rounded';
	const baseClasses = 'inline-flex items-center font-medium';
	$: allClasses = [baseClasses, sizeClasses, roundedClass, scheme, $$props.class]
		.filter(Boolean)
		.join(' ');
</script>

<span class={allClasses}>
	{#if label}
		{label}
	{:else}
		<slot />
	{/if}
</span>
