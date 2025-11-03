<script lang="ts">
	let {
		color = '',
		selected = false,
		label = undefined,
		onclick = undefined
	}: {
		color: string;
		selected?: boolean;
		label?: string;
		onclick?: (e: MouseEvent) => void;
	} = $props();
</script>

<button
	type="button"
	class={[
		'relative h-6 w-6 rounded-full border transition',
		selected ? 'ring-2 ring-offset-2 ring-black' : 'hover:ring'
	].join(' ')}
	aria-label={label}
	title={label}
	style={`background:${color}`}
	{onclick}
></button>
