<script lang="ts">
	let {
		href = undefined,
		label = '',
		tone = 'primary',
		size = 'md',
		disabled = false,
		fullWidth = false
	}: {
		href?: string;
		label: string;
		tone?: 'primary' | 'secondary' | 'dark';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		fullWidth?: boolean;
	} = $props();

	let padd = $derived(
		size === 'sm' ? 'px-3 py-1 text-sm' : size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2'
	);
	let scheme = $derived(
		tone === 'primary'
			? 'bg-[#0a84ff] text-white hover:opacity-90'
			: tone === 'secondary'
				? 'bg-white text-black border hover:bg-slate-50'
				: 'bg-black text-white hover:opacity-90'
	);
	const base =
		'inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 ring-blue-600 ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
</script>

{#if href}
	<a
		class={[base, padd, scheme, fullWidth ? 'w-full' : ''].join(' ')}
		{href}
		aria-disabled={disabled}
		tabindex={disabled ? -1 : undefined}
		class:pointer-events-none={disabled}>{label}</a
	>
{:else}
	<button
		type="button"
		class={[base, padd, scheme, fullWidth ? 'w-full' : ''].join(' ')}
		{disabled}
	>
		{label}
	</button>
{/if}
