<script lang="ts">
	let {
		text = '',
		tone = 'light',
		children
	}: {
		text: string;
		tone?: 'dark' | 'light';
		children: any;
	} = $props();
</script>

<aside
	class={[
		tone === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-slate-900',
		'w-full text-center text-sm md:text-base py-2 px-4'
	].join(' ')}
>
	{text}
	{@render children?.()}
</aside>
