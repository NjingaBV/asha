<script lang="ts">
	export let color: string; // hex or css color
	export let selected = false;
	export let label: string | undefined = undefined;
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
/>
