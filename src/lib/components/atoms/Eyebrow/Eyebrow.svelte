<script lang="ts">
	let {
		text = '',
		align = 'center'
	}: {
		text: string;
		align?: 'left' | 'center';
	} = $props();
</script>

<p
	class={[
		align === 'center' ? 'text-center' : 'text-left',
		'uppercase tracking-wide text-sm font-semibold text-slate-600'
	].join(' ')}
>
	{text}
	<slot />
</p>
