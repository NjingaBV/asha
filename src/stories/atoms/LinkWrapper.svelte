<script lang="ts">
	import Link from '$lib/components/atoms/Link.svelte';

	let {
		href = '#',
		variant = 'default',
		class: className = '',
		target = '_self',
		text = ''
	}: any = $props();
</script>

<Link {href} {variant} class={className} {target}>
	{text}
</Link>
