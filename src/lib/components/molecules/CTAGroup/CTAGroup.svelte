<script lang="ts">
	import { PillButton } from '$lib/components/atoms';
	let {
		primary = $state<{ label: string; href?: string; tone?: 'primary' | 'dark' } | null>(null),
		secondary = $state<{ label: string; href?: string; tone?: 'secondary' } | null>(null),
		align = $state<'center' | 'left'>('center')
	}: {
		primary?: { label: string; href?: string; tone?: 'primary' | 'dark' } | null;
		secondary?: { label: string; href?: string; tone?: 'secondary' } | null;
		align?: 'center' | 'left';
	} = $props();
</script>

<div class={[align === 'center' ? 'justify-center' : 'justify-start', 'flex gap-3'].join(' ')}>
	{#if primary}
		<PillButton label={primary.label} href={primary.href} tone={primary.tone ?? 'primary'} />
	{/if}
	{#if secondary}
		<PillButton
			label={secondary.label}
			href={secondary.href}
			tone={secondary.tone ?? 'secondary'}
		/>
	{/if}
</div>
