<script lang="ts">
	let {
		size = 'base',
		weight = 'normal',
		color = 'text-slate-600',
		align = 'left',
		leading = 'normal',
		class: className = undefined,
		children
	}: {
		size?: string;
		weight?: string;
		color?: string;
		align?: string;
		leading?: string;
		class?: string;
		children: any;
	} = $props();

	let paragraphClasses = $derived(
		['text-' + size, 'font-' + weight, color, 'text-' + align, 'leading-' + leading, className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<p class={paragraphClasses}>
	{@render children?.()}
</p>
