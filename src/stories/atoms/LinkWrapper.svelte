<script lang="ts">
	import Link from '$lib/components/atoms/Link.svelte';

	let {
		href = '#',
		variant = 'default',
		className = '',
		target = '_self',
		text = ''
	}: any = $props();
</script>

<Link {href} {variant} {className} {target}>
	{text}
</Link>
