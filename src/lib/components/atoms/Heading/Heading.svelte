<script lang="ts">
	let {
		level = 1,
		size = 'base',
		weight = 'normal',
		color = 'text-slate-900',
		align = 'left',
		class: className = undefined,
		children
	} = $props();

	let headingClasses = $derived(
		['text-' + size, 'font-' + weight, color, 'text-' + align, className]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if level === 1}
	<h1 class={headingClasses}>
		{@render children?.()}
	</h1>
{:else if level === 2}
	<h2 class={headingClasses}>
		{@render children?.()}
	</h2>
{:else if level === 3}
	<h3 class={headingClasses}>
		{@render children?.()}
	</h3>
{:else if level === 4}
	<h4 class={headingClasses}>
		{@render children?.()}
	</h4>
{:else if level === 5}
	<h5 class={headingClasses}>
		{@render children?.()}
	</h5>
{:else if level === 6}
	<h6 class={headingClasses}>
		{@render children?.()}
	</h6>
{/if}