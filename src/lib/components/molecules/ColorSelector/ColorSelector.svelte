<script lang="ts">
	import { ColorSwatch } from '$lib/components/atoms';
	let {
		colors = [],
		selected = '',
		onChange = () => {}
	}: {
		colors: Array<{ label: string; value: string }>;
		selected: string;
		onChange?: (val: string) => void;
	} = $props();
</script>

<div class="flex items-center gap-2">
	{#each colors as c}
		<ColorSwatch
			color={c.value}
			label={c.label}
			selected={selected === c.value}
			onclick={() => onChange(c.value)}
		/>
	{/each}
</div>
