<script lang="ts">
	interface Props {
		label: string;
		value: string;
		emphasize?: boolean;
		tone?: 'light' | 'dark';
	}

	let { label, value, emphasize = false, tone = 'light' }: Props = $props();

	const bgClass = $derived(tone === 'dark' ? 'bg-white/10' : 'bg-bg-muted');
	const textClass = $derived(tone === 'dark' ? 'text-white' : 'text-fg');
	const labelClass = $derived(tone === 'dark' ? 'text-white/60' : 'text-fg-muted');
	const borderClass = $derived(tone === 'dark' ? 'border-white/10' : 'border-border');
</script>

<div class={`flex flex-col justify-center rounded-xl border px-4 py-3 ${bgClass} ${borderClass}`}>
	<span class={`text-xs font-medium uppercase tracking-wider ${labelClass}`}>
		{label}
	</span>
	<span
		class={`mt-0.5 font-semibold leading-tight ${textClass} ${emphasize ? 'text-lg' : 'text-base'}`}
	>
		{value}
	</span>
</div>
