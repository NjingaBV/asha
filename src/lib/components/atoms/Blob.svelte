<script lang="ts">
	let {
		color = '#ff9800',
		position = 'top'
	}: {
		color?: string;
		position?: string;
	} = $props();
</script>

<div class="w-1/2 md:w-1/3 h-full">
	<div
		class={[
			'w-48 h-48 md:w-72 md:h-72 min-h-full',
			'mix-blend-multiply filter blur-xl opacity-70',
			'rounded-full animate-blob'
		].join(' ')}
		style={`background-color:${color}; position:${position}`}
	></div>
</div>
