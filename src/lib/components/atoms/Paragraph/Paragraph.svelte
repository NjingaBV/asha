<script lang="ts">
	export let size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';
	export let weight: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';
	export let color: string = 'text-slate-600';
	export let align: 'left' | 'center' | 'right' | 'justify' = 'left';
	export let leading: 'tight' | 'normal' | 'relaxed' | 'loose' = 'normal';

	$: paragraphClasses = [
		'text-' + size,
		'font-' + weight,
		color,
		'text-' + align,
		'leading-' + leading,
		$$props.class
	]
		.filter(Boolean)
		.join(' ');
</script>

<p class={paragraphClasses}>
	<slot />
</p>
