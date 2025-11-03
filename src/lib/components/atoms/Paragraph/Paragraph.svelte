<script lang="ts">
	let {
		size = 'base',
		weight = 'normal',
		color = 'text-slate-600',
		align = 'left',
		leading = 'normal',
		class: className = undefined,
		children
	} = $props();

	let paragraphClasses = $derived(
		['text-' + size, 'font-' + weight, color, 'text-' + align, 'leading-' + leading, className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<p class={paragraphClasses}>
	<slot />
</p>
