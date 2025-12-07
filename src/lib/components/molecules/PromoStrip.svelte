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
		tone === 'dark' ? 'bg-bg-inverse text-fg-inverse' : 'bg-bg-subtle text-fg',
		'w-full text-center text-sm md:text-base py-2 px-4'
	].join(' ')}
>
	{text}
	{@render children?.()}
</aside>
