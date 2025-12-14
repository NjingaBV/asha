<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Text from '../atoms/Text.svelte';
	import Button from '../atoms/Button.svelte';

	/**
	 * CTASection component - displays a configurable call-to-action section with reasons/benefits
	 *
	 * @example
	 * <CTASection
	 *   title="Why choose us?"
	 *   reasons={[
	 *     { icon: 'star', title: 'Quality', description: 'Best in class' },
	 *     { icon: 'heart', title: 'Support', description: '24/7 help' }
	 *   ]}
	 *   ctaText="Get Started"
	 *   ctaHref="/start"
	 * />
	 */

	interface ReasonItem {
		icon?: string;
		title: string;
		description: string;
		ctaText?: string;
		ctaHref?: string;
	}

	interface Props {
		title?: string;
		subtitle?: string;
		reasons?: ReasonItem[];
		ctaText?: string;
		ctaHref?: string;
		background?: string;
	}

	let {
		title = 'Why choose us?',
		subtitle,
		reasons = [],
		ctaText = 'Learn More',
		ctaHref = '#',
		background = 'bg-page-alt'
	}: Props = $props();

	function getIconSvg(iconName?: string): string {
		if (!iconName) return '';

		const icons: Record<string, string> = {
			star: `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
			</svg>`,
			heart: `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
			</svg>`,
			shield: `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
			</svg>`,
			graduationcap: `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
			</svg>`,
			'person.line.dotted.person': `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
			</svg>`,
			'desktopcomputer.and.macbook': `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
			</svg>`,
			truck: `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
			</svg>`,
			'person.macwindow': `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
			</svg>`,
			'app.applestore': `<svg class="w-12 h-12 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
			</svg>`
		};
		return icons[iconName] || '';
	}
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8 {background}">
	<div class="max-w-360 mx-auto">
		<div class="text-center mb-16">
			<Heading level={2} class="text-3xl md:text-4xl font-bold text-primary mb-4">
				{title}
			</Heading>
			{#if subtitle}
				<Text class="text-fg-muted mb-8 max-w-2xl mx-auto">
					{subtitle}
				</Text>
			{/if}
			<div class="flex justify-center mb-8">
				<Button tone="primary" size="lg" href={ctaHref}>{ctaText}</Button>
			</div>
		</div>

		{#if reasons.length > 0}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each reasons as reason}
					<div
						class="bg-surface rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
					>
						{#if reason.icon}
							<div
								class="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6 mx-auto"
							>
								{@html getIconSvg(reason.icon)}
							</div>
						{/if}
						<Heading level={3} class="text-xl font-bold text-fg mb-4 text-center">
							{reason.title}
						</Heading>
						<Text class="text-fg-muted mb-6 text-center">
							{reason.description}
						</Text>
						{#if reason.ctaText && reason.ctaHref}
							<div class="text-center">
								<Button tone="secondary" href={reason.ctaHref}>
									{reason.ctaText}
								</Button>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
