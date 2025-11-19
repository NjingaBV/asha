<script lang="ts">
	interface Props {
		label: string;
		tone?: 'accent' | 'neutral';
	}

	let { label, tone = 'accent' }: Props = $props();

	const toneClasses = $derived(
		tone === 'accent'
			? 'text-orange-600 border-orange-200 bg-orange-50'
			: 'text-slate-600 border-slate-200 bg-slate-50'
	);
</script>

<span
	class={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${toneClasses}`}
>
	{label}
</span>
