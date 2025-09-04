<script lang="ts">
	import { PillButton } from '$lib/components/atoms';
	export let primary: { label: string; href?: string; tone?: 'primary' | 'dark' } | null = null;
	export let secondary: { label: string; href?: string; tone?: 'secondary' } | null = null;
	export let align: 'center' | 'left' = 'center';
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
