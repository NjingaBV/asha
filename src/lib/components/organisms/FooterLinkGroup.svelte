<script lang="ts">
	import type { Snippet } from 'svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Link from '$lib/components/atoms/Link.svelte';

	interface FooterLink {
		label: string;
		href: string;
		external?: boolean;
	}

	interface Props {
		/** Group title */
		title?: string;
		/** Links in this group */
		links?: FooterLink[];
		/** Custom CSS classes */
		class?: string;
		/** Custom content */
		children?: Snippet;
	}

	let { title, links = [], class: className = '', children }: Props = $props();
</script>

<div class={['space-y-4', className].join(' ')}>
	{#if title}
		<Heading level={4} class="text-sm font-semibold text-fg uppercase tracking-wider">
			{title}
		</Heading>
	{/if}

	{#if children}
		{@render children()}
	{:else if links.length > 0}
		<ul class="space-y-2">
			{#each links as link}
				<li>
					<Link
						href={link.href}
						external={link.external}
						class="text-sm text-fg-muted hover:text-fg transition-colors"
					>
						{link.label}
					</Link>
				</li>
			{/each}
		</ul>
	{/if}
</div>
