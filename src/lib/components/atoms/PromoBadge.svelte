<script lang="ts">
	/** Semantic tone for promo badges */
	export type PromoBadgeTone = 'accent' | 'neutral';

	interface Props {
		/** Badge text */
		label: string;
		/** Semantic color tone */
		tone?: PromoBadgeTone;
	}

	let { label, tone = 'accent' }: Props = $props();

	const toneClasses = $derived(
		tone === 'accent'
			? 'text-warning border-warning/30 bg-warning-subtle'
			: 'text-fg-muted border-border bg-bg-muted'
	);
</script>

<span
	class={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${toneClasses}`}
>
	{label}
</span>
