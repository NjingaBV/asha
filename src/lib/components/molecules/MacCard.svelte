<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import Label from '$lib/components/atoms/Label.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	/**
	 * MacCard component - Product card for Mac models
	 * Displays Mac product with image, title, price, and CTAs
	 */

	interface Props {
		/** Product name */
		title: string;
		/** Product tagline */
		tagline?: string;
		/** Product image */
		image: string;
		/** Image alt text */
		imageAlt?: string;
		/** Starting price */
		price?: string;
		/** New badge */
		isNew?: boolean;
		/** Color options */
		colors?: string[];
		/** Learn more link */
		learnMoreHref?: string;
		/** Buy link */
		buyHref?: string;
		/** Additional CSS classes */
		className?: string;
	}

	let {
		title,
		tagline = undefined,
		image,
		imageAlt = undefined,
		price = undefined,
		isNew = false,
		colors = [],
		learnMoreHref = '#',
		buyHref = '#',
		className = ''
	}: Props = $props();

	const cardClasses = $derived(
		[
			'group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={cardClasses}>
	{#if isNew}
		<div class="absolute top-4 left-4 z-10">
			<Label color="orange">New</Label>
		</div>
	{/if}

	<!-- Image -->
	<div class="relative aspect-[4/3] bg-gray-50 flex items-center justify-center p-8">
		<Image
			src={image}
			alt={imageAlt || title}
			className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
		/>
	</div>

	<!-- Content -->
	<div class="p-6 space-y-4 text-center">
		<div class="space-y-2">
			<Heading level={3} size="2xl" weight="bold" class="text-slate-900">
				{title}
			</Heading>
			{#if tagline}
				<Paragraph size="lg" color="text-slate-600" class="font-medium">
					{tagline}
				</Paragraph>
			{/if}
			{#if price}
				<Paragraph size="sm" color="text-slate-500">
					{price}
				</Paragraph>
			{/if}
		</div>

		<!-- Colors -->
		{#if colors.length > 0}
			<div class="flex items-center justify-center gap-2 pt-2">
				{#each colors as color}
					<div
						class="w-4 h-4 rounded-full border border-gray-300"
						style="background-color: {color}"
						title={color}
					></div>
				{/each}
			</div>
		{/if}

		<!-- Actions -->
		<div class="flex items-center justify-center gap-4 pt-2">
			<Link href={learnMoreHref} variant="cta">
				{#snippet children()}
					Learn more
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				{/snippet}
			</Link>
			<Link href={buyHref} variant="cta">
				{#snippet children()}
					Buy
				{/snippet}
			</Link>
		</div>
	</div>
</div>
