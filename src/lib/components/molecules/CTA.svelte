<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	let {
		primary = null,
		secondary = null,
		align = 'center'
	}: {
		primary?: { label: string; href?: string; tone?: 'primary' | 'neutral' } | null;
		secondary?: { label: string; href?: string; tone?: 'secondary' } | null;
		align?: 'center' | 'left';
	} = $props();
</script>

<div class={[align === 'center' ? 'justify-center' : 'justify-start', 'flex gap-3'].join(' ')}>
	{#if primary}
		<Button href={primary.href} tone={primary.tone ?? 'primary'}>
			{primary.label}
		</Button>
	{/if}
	{#if secondary}
		<Button href={secondary.href} tone={secondary.tone ?? 'secondary'}>
			{secondary.label}
		</Button>
	{/if}
</div>
