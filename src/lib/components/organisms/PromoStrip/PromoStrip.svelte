<script lang="ts">
	let {
		text = '',
		tone = 'light'
	}: {
		text: string;
		tone?: 'dark' | 'light';
	} = $props();
</script>

<aside
	class={[
		tone === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-slate-900',
		'w-full text-center text-sm md:text-base py-2 px-4'
	].join(' ')}
>
	{text}
	<slot />
</aside>
