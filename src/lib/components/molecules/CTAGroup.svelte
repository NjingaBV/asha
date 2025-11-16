<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	let {
		primary = null,
		secondary = null,
		align = 'center'
	}: {
		primary?: { label: string; href?: string; tone?: 'primary' | 'dark' } | null;
		secondary?: { label: string; href?: string; tone?: 'secondary' } | null;
		align?: 'center' | 'left';
	} = $props();
</script>

<div class={[align === 'center' ? 'justify-center' : 'justify-start', 'flex gap-3'].join(' ')}>
	{#if primary}
		<Button label={primary.label} href={primary.href} tone={primary.tone ?? 'primary'} />
	{/if}
	{#if secondary}
		<Button
			label={secondary.label}
			href={secondary.href}
			tone={secondary.tone ?? 'secondary'}
		/>
	{/if}
</div>
