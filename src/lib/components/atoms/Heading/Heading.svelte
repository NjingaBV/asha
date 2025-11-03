<script lang="ts">
	let {
		level = 1,
		size = 'base',
		weight = 'normal',
		color = 'text-slate-900',
		align = 'left',
		class: className = undefined
	} = $props();

	let headingClasses = $derived(
		['text-' + size, 'font-' + weight, color, 'text-' + align, className]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if level === 1}
	<h1 class={headingClasses}>
		<slot />
	</h1>
{:else if level === 2}
	<h2 class={headingClasses}>
		<slot />
	</h2>
{:else if level === 3}
	<h3 class={headingClasses}>
		<slot />
	</h3>
{:else if level === 4}
	<h4 class={headingClasses}>
		<slot />
	</h4>
{:else if level === 5}
	<h5 class={headingClasses}>
		<slot />
	</h5>
{:else if level === 6}
	<h6 class={headingClasses}>
		<slot />
	</h6>
{/if}
