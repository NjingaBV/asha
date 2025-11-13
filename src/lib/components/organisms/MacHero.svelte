<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import Label from '$lib/components/atoms/Label.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	/**
	 * MacHero component - Large hero banner for Mac page
	 * Main hero section with product image and CTAs
	 */

	interface Props {
		/** Hero title */
		title: string;
		/** Hero subtitle/tagline */
		subtitle?: string;
		/** Hero description */
		description?: string;
		/** Hero image (desktop) */
		imageDesktop: string;
		/** Hero image (mobile) */
		imageMobile?: string;
		/** Hero image (tablet) */
		imageTablet?: string;
		/** Image alt text */
		imageAlt?: string;
		/** Show new badge */
		isNew?: boolean;
		/** Learn more link */
		learnMoreHref?: string;
		/** Buy link */
		buyHref?: string;
		/** Background color */
		backgroundColor?: string;
		/** Text color (light/dark) */
		textColor?: 'light' | 'dark';
		/** Additional CSS classes */
		className?: string;
	}

	let {
		title,
		subtitle = undefined,
		description = undefined,
		imageDesktop,
		imageMobile = undefined,
		imageTablet = undefined,
		imageAlt = undefined,
		isNew = false,
		learnMoreHref = '#',
		buyHref = '#',
		backgroundColor = '#000',
		textColor = 'light',
		className = ''
	}: Props = $props();

	const heroClasses = $derived(
		['relative min-h-[600px] flex items-center justify-center overflow-hidden', className]
			.filter(Boolean)
			.join(' ')
	);

	const textColorClass = $derived(textColor === 'light' ? 'text-white' : 'text-slate-900');
	const subtextColorClass = $derived(textColor === 'light' ? 'text-gray-300' : 'text-slate-600');
</script>

<section class={heroClasses} style="background-color: {backgroundColor};">
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
		{#if isNew}
			<div class="flex justify-center mb-4">
				<Label color="orange">New</Label>
			</div>
		{/if}

		<div class="space-y-6 mb-8">
			<Heading level={1} size="5xl" weight="black" class={textColorClass}>
				{title}
			</Heading>

			{#if subtitle}
				<Paragraph size="2xl" class="{subtextColorClass} font-semibold">
					{subtitle}
				</Paragraph>
			{/if}

			{#if description}
				<Paragraph size="lg" class={subtextColorClass}>
					{description}
				</Paragraph>
			{/if}
		</div>

		<div class="flex items-center justify-center gap-6 mb-12">
			<Link
				href={learnMoreHref}
				variant="cta"
				className={textColor === 'light' ? 'text-blue-400' : ''}
			>
				Learn more
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</Link>
			<Link
				href={buyHref}
				variant="cta"
				className={textColor === 'light' ? 'text-blue-400' : ''}
			>
				Buy
			</Link>
		</div>

		<div class="mt-12">
			<Image
				desktop={imageDesktop}
				tablet={imageTablet || imageDesktop}
				mobile={imageMobile || imageDesktop}
				alt={imageAlt || title}
				className="w-full max-w-5xl mx-auto"
			/>
		</div>
	</div>
</section>
