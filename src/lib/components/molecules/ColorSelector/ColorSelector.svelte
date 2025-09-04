<script lang="ts">
	import { ColorSwatch } from '$lib/components/atoms';
	export let colors: Array<{ label: string; value: string }>; // value is CSS color
	export let selected: string;
	export let onChange: (val: string) => void = () => {};
</script>

<div class="flex items-center gap-2">
	{#each colors as c}
		<ColorSwatch
			color={c.value}
			label={c.label}
			selected={selected === c.value}
			on:click={() => onChange(c.value)}
		/>
	{/each}
</div>
