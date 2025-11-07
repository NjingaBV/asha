<script lang="ts">
	let {
		text = '',
		align = 'center',
		children
	}: {
		text?: string;
		align?: 'left' | 'center';
		children?: any;
	} = $props();
</script>

<p
	class={[
		align === 'center' ? 'text-center' : 'text-left',
		'uppercase tracking-wide text-sm font-semibold text-slate-600'
	].join(' ')}
>
	{text}
	{@render children?.()}
</p>
