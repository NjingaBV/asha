<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Badge from '$lib/components/atoms/Badge.svelte';
	import Breadcrumb from '$lib/components/molecules/Breadcrumb.svelte';
	import type { Action } from '$lib/models/product.type';
	import type { BreadcrumbItem } from '$lib/components/molecules/Breadcrumb.svelte';

	interface Props {
		/** Breadcrumb navigation items */
		breadcrumbs?: BreadcrumbItem[];
		/** Page title/name */
		name: string;
		/** Page tagline */
		tagline?: string;
		/** Page description */
		description?: string;
		/** Price information */
		price?: string;
		/** Badge/label */
		badge?: string;
		/** Color theme */
		tone?: 'light' | 'dark';
		/** Text alignment */
		align?: 'left' | 'center';
		/** Call-to-action buttons */
		ctas?: {
			primary?: Action;
			secondary?: Action;
		};
	}

	let {
		breadcrumbs = [],
		name,
		tagline = undefined,
		description = undefined,
		price = undefined,
		badge = undefined,
		tone = 'light',
		align = 'left',
		ctas = {}
	}: Props = $props();

	const textClass = $derived(tone === 'dark' ? 'text-fg-inverse' : 'text-fg');
	const subTextClass = $derived(tone === 'dark' ? 'text-fg-inverse/80' : 'text-fg-muted');
	const layoutClass = $derived(
		align === 'center' ? 'items-center text-center' : 'items-start text-left'
	);
	const badgeTone = $derived(tone === 'dark' ? 'neutral' : 'primary');
</script>

<div class="space-y-6">
	{#if breadcrumbs && breadcrumbs.length > 0}
		<Breadcrumb items={breadcrumbs} class="mb-4" />
	{/if}

	<div class={`flex flex-col gap-4 ${layoutClass}`}>
		{#if badge}
			<Badge label={badge} tone={badgeTone} />
		{/if}

		<div class="space-y-3">
			<Heading level={1} size="6xl" weight="black" {align} class={`${textClass}`}>
				{name}
			</Heading>

			{#if tagline}
				<Text size="xl" class={`${subTextClass} font-semibold`}>
					{tagline}
				</Text>
			{/if}

			{#if description}
				<Text size="base" class={`${subTextClass} max-w-2xl`}>
					{description}
				</Text>
			{/if}

			{#if price}
				<Text size="sm" class={`${subTextClass} font-semibold`}>
					{price}
				</Text>
			{/if}
		</div>

		{#if ctas.primary || ctas.secondary}
			<div class="flex flex-wrap items-center gap-3">
				{#if ctas.primary}
					<Button
						tone="primary"
						fullWidth={false}
						href={ctas.primary.href}
						onclick={ctas.primary.onClick}
						class={tone === 'dark' ? 'bg-fg-inverse text-fg hover:scale-[1.01]' : ''}
					>
						{ctas.primary.label}
					</Button>
				{/if}

				{#if ctas.secondary}
					<Button
						tone="secondary"
						href={ctas.secondary.href}
						onclick={ctas.secondary.onClick}
						class={tone === 'dark' ? 'text-fg-inverse hover:bg-fg-inverse/10' : ''}
					>
						{ctas.secondary.label}
					</Button>
				{/if}
			</div>
		{/if}
	</div>
</div>
