<script lang="ts">
	export let label: string;
	export let tone: 'dark' | 'light' | 'accent' = 'dark';
	export let size: 'sm' | 'md' = 'md';

	const base = 'inline-flex items-center rounded-full font-semibold';
	$: padd = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';
	$: scheme =
		tone === 'dark'
			? 'bg-black text-white'
			: tone === 'light'
				? 'bg-white text-black border'
				: 'bg-[#6c00e2] text-white';
</script>

<span class={[base, padd, scheme].join(' ')}>{label}</span>
