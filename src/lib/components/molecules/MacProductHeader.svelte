<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import MacBadge from '$lib/components/atoms/MacBadge.svelte';
	import type { MacCTA } from '$lib/models';

	interface Props {
		name: string;
		tagline?: string;
		description?: string;
		price?: string;
		badge?: string;
		tone?: 'light' | 'dark';
		align?: 'left' | 'center';
		ctas?: {
			primary?: MacCTA;
			secondary?: MacCTA;
		};
	}

	let {
		name,
		tagline = undefined,
		description = undefined,
		price = undefined,
		badge = undefined,
		tone = 'light',
		align = 'left',
		ctas = {}
	}: Props = $props();

	const textClass = $derived(tone === 'dark' ? 'text-white' : 'text-slate-900');
	const subTextClass = $derived(tone === 'dark' ? 'text-white/80' : 'text-slate-600');
	const layoutClass = $derived(
		align === 'center' ? 'items-center text-center' : 'items-start text-left'
	);
	const badgeTone = $derived(tone === 'dark' ? 'neutral' : 'accent');
</script>

<div class={`flex flex-col gap-4 ${layoutClass}`}>
	{#if badge}
		<MacBadge label={badge} tone={badgeTone} />
	{/if}

	<div class="space-y-3">
		<Heading level={2} size="4xl" weight="black" class={textClass}>
			{name}
		</Heading>

		{#if tagline}
			<Paragraph size="xl" class={`${subTextClass} font-semibold`}>
				{tagline}
			</Paragraph>
		{/if}

		{#if description}
			<Paragraph size="md" class={`${subTextClass} max-w-2xl`}>
				{description}
			</Paragraph>
		{/if}

		{#if price}
			<Paragraph size="sm" class={`${subTextClass} font-semibold`}>
				{price}
			</Paragraph>
		{/if}
	</div>

	{#if ctas.primary || ctas.secondary}
		<div class="flex flex-wrap items-center gap-3">
			{#if ctas.primary}
				<Button
					tone="primary"
					fullWidth={false}
					href={ctas.primary.href}
					onClick={ctas.primary.onClick}
					class={tone === 'dark' ? 'bg-white text-slate-900 hover:scale-[1.01]' : ''}
				>
					{ctas.primary.label}
				</Button>
			{/if}

			{#if ctas.secondary}
				<Button
					tone="secondary"
					href={ctas.secondary.href}
					onClick={ctas.secondary.onClick}
					class={tone === 'dark' ? 'text-white hover:bg-white/10' : ''}
				>
					{ctas.secondary.label}
				</Button>
			{/if}
		</div>
	{/if}
</div>
