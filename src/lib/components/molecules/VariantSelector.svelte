<script lang="ts">
	import ColorDot from '$lib/components/atoms/ColorDot.svelte';
	import type { MacColorOption } from '$lib/models';

	interface Props {
		colors?: MacColorOption[];
		selected?: string;
		title?: string;
		tone?: 'light' | 'dark';
		onChange?: (color: string) => void;
	}

	let {
		colors = [],
		selected = undefined,
		title = 'Finitions',
		tone = 'light',
		onChange = undefined
	}: Props = $props();

	const labelClass = $derived(tone === 'dark' ? 'text-white/80' : 'text-slate-600');

	const handleSelect = (color: string) => {
		onChange?.(color);
	};
</script>

{#if colors.length > 0}
	<div class="space-y-3">
		<p class={`text-sm font-semibold ${labelClass}`}>{title}</p>
		<div class="flex flex-wrap items-center gap-3">
			{#each colors as color}
				<button
					type="button"
					onclick={() => handleSelect(color.name)}
					class="flex items-center gap-2 rounded-full border border-transparent bg-white/40 px-2 py-1 pr-3 transition hover:-translate-y-0.5 hover:shadow"
					class:text-white={tone === 'dark'}
					aria-pressed={selected === color.name}
				>
					<ColorDot
						color={color.swatch}
						selected={selected === color.name}
						label={color.name}
						size={20}
					/>
					<span class="text-xs font-medium">{color.name}</span>
				</button>
			{/each}
		</div>
	</div>
{/if}
