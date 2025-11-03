<script lang="ts">
	export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
	export let size:
		| 'xs'
		| 'sm'
		| 'base'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| '7xl'
		| '8xl'
		| '9xl' = 'base';
	export let weight: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black' = 'normal';
	export let color: string = 'text-slate-900';
	export let align: 'left' | 'center' | 'right' | 'justify' = 'left';

	$: headingClasses = ['text-' + size, 'font-' + weight, color, 'text-' + align, $$props.class]
		.filter(Boolean)
		.join(' ');
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
