<script lang="ts">
	export let text: string;
	export let align: 'left' | 'center' = 'center';
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
