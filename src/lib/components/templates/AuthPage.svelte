<script lang="ts">
	import type { Snippet } from 'svelte';
	import SkipLink from '$lib/components/atoms/SkipLink.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';

	interface Props {
		/** Page title (e.g., "Sign In", "Create Account") */
		title?: string;
		/** Page subtitle/description */
		subtitle?: string;
		/** Logo/brand element */
		logo?: Snippet;
		/** Show background pattern/image */
		showPattern?: boolean;
		/** Layout variant */
		variant?: 'centered' | 'split';
		/** Custom CSS classes */
		class?: string;
		/** Form/main content */
		children?: Snippet;
		/** Footer links (terms, privacy, etc.) */
		footer?: Snippet;
		/** Side panel content (for split layout) */
		sidePanel?: Snippet;
	}

	let {
		title,
		subtitle,
		logo,
		showPattern = true,
		variant = 'centered',
		class: className = '',
		children,
		footer,
		sidePanel
	}: Props = $props();
</script>

<SkipLink href="#main-content" />

<div class={['min-h-screen flex', className].join(' ')}>
	{#if variant === 'split' && sidePanel}
		<!-- Split Layout -->
		<div class="hidden lg:flex lg:w-1/2 bg-accent relative overflow-hidden">
			{#if showPattern}
				<div class="absolute inset-0 opacity-10">
					<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
								<path
									d="M 40 0 L 0 0 0 40"
									fill="none"
									stroke="currentColor"
									stroke-width="1"
								/>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#grid)" />
					</svg>
				</div>
			{/if}
			<div class="relative z-10 flex flex-col justify-center p-12 text-on-accent">
				{@render sidePanel()}
			</div>
		</div>
	{/if}

	<main
		id="main-content"
		class={[
			'flex-1 flex items-center justify-center p-4 sm:p-8',
			variant === 'centered' && showPattern ? 'bg-bg-subtle' : 'bg-bg'
		].join(' ')}
	>
		{#if variant === 'centered' && showPattern}
			<div class="absolute inset-0 opacity-5 pointer-events-none">
				<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
							<circle cx="2" cy="2" r="1" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#dots)" />
				</svg>
			</div>
		{/if}

		<div class="relative z-10 w-full max-w-md">
			<div class="bg-bg rounded-2xl shadow-xl p-8 sm:p-10">
				{#if logo}
					<div class="flex justify-center mb-8">
						{@render logo()}
					</div>
				{/if}

				{#if title || subtitle}
					<header class="text-center mb-8">
						{#if title}
							<Heading level={1} class="text-2xl sm:text-3xl font-bold text-fg mb-2">
								{title}
							</Heading>
						{/if}
						{#if subtitle}
							<Text class="text-fg-muted">
								{subtitle}
							</Text>
						{/if}
					</header>
				{/if}

				{@render children?.()}
			</div>

			{#if footer}
				<footer class="mt-6 text-center text-sm text-fg-muted">
					{@render footer()}
				</footer>
			{/if}
		</div>
	</main>
</div>
