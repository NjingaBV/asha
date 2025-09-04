<script lang="ts">
	export let href: string | undefined = undefined;
	export let label: string;
	export let tone: 'primary' | 'secondary' | 'dark' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';

	$: padd =
		size === 'sm' ? 'px-3 py-1 text-sm' : size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2';
	$: scheme =
		tone === 'primary'
			? 'bg-[#0a84ff] text-white hover:opacity-90'
			: tone === 'secondary'
				? 'bg-white text-black border hover:bg-slate-50'
				: 'bg-black text-white hover:opacity-90';
	$: base = 'inline-flex items-center justify-center rounded-full font-medium transition';
</script>

{#if href}
	<a class={[base, padd, scheme].join(' ')} {href}>{label}</a>
{:else}
	<button type="button" class={[base, padd, scheme].join(' ')}>{label}</button>
{/if}
