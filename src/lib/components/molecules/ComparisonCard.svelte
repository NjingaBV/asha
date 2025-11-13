<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	/**
	 * ComparisonCard component - Side-by-side feature comparison
	 * Used for comparing different Mac models
	 */

	interface Props {
		/** Product image */
		image: string;
		/** Image alt text */
		imageAlt?: string;
		/** Product name */
		name: string;
		/** Price */
		price?: string;
		/** List of features/specs */
		features?: string[];
		/** Highlight this card */
		highlighted?: boolean;
		/** Additional CSS classes */
		className?: string;
	}

	let {
		image,
		imageAlt = undefined,
		name,
		price = undefined,
		features = [],
		highlighted = false,
		className = ''
	}: Props = $props();

	const cardClasses = $derived(
		[
			'flex flex-col items-center p-6 rounded-xl border-2 transition-all',
			highlighted ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 bg-white',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={cardClasses}>
	<!-- Image -->
	<div class="w-full aspect-square mb-4">
		<Image src={image} alt={imageAlt || name} className="w-full h-full object-contain" />
	</div>

	<!-- Name -->
	<Heading level={4} size="xl" weight="bold" class="text-slate-900 mb-2 text-center">
		{name}
	</Heading>

	<!-- Price -->
	{#if price}
		<Paragraph size="sm" color="text-slate-600" class="mb-4">
			{price}
		</Paragraph>
	{/if}

	<!-- Features -->
	{#if features.length > 0}
		<ul class="w-full space-y-2 text-sm text-slate-600">
			{#each features as feature}
				<li class="flex items-start gap-2">
					<svg
						class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>{feature}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
