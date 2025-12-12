<script lang="ts">
	/**
	 * IconText - Feature section with optional numbered badge, title, and details
	 *
	 * @example
	 * <IconText
	 *   order={1}
	 *   title="Feature"
	 *   subtitle="Main Heading"
	 *   description="Description text"
	 *   color="#6c00e2"
	 * />
	 */

	interface Props {
		/** Step/order number displayed in badge */
		order?: number;
		/** Badge label text */
		title?: string;
		/** Main heading text */
		subtitle?: string;
		/** Description paragraph */
		description?: string;
		/** Accent color for badge */
		color?: string;
		/** Optional details section with image and HTML content */
		details?: {
			title?: string;
			description?: string;
			cover?: { url: string; alt: string; text?: string };
		};
	}

	let {
		order = 0,
		title = '',
		subtitle = '',
		description = '',
		color = '#6c00e2',
		details = undefined
	}: Props = $props();

	const badgeStyle = $derived(color ? `background-color: ${color}` : '');
</script>

<div class="mx-auto max-w-full px-4 md:px-6 lg:px-8">
	{#if order > 0 || title}
		<div class="flex flex-wrap justify-center items-center gap-3 mb-8 md:mb-12">
			{#if order > 0}
				<span
					class="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
					style={badgeStyle}
				>
					{order}
				</span>
			{/if}
			{#if title}
				<span class="text-lg font-semibold text-fg-muted">{title}</span>
			{/if}
		</div>
	{/if}

	{#if subtitle}
		<div
			class="text-center font-black tracking-tight text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-tight text-fg"
		>
			{subtitle}
		</div>
	{/if}

	{#if description}
		<div
			class="text-left text-fg-muted md:text-center mx-auto max-w-3xl mb-12 md:mb-16 pb-4 md:pb-6 text-base md:text-lg leading-relaxed"
		>
			{description}
		</div>
	{/if}

	{#if details}
		<div class="flex gap-8 md:gap-12 lg:gap-16 items-center flex-col md:flex-row">
			{#if details.description && details.cover}
				<div
					class="w-full md:w-1/2 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
				>
					<img
						class="w-full h-full object-cover"
						src={details.cover.url}
						alt={details.cover.alt}
						loading="lazy"
					/>
				</div>
				<div
					class="w-full md:w-1/2 text-left text-fg-muted space-y-4 md:space-y-6 leading-relaxed"
				>
					{@html details.description}
				</div>
			{:else if details.cover && !details.description}
				<div
					class="w-full overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
				>
					<img
						class="w-full h-full object-cover"
						src={details.cover.url}
						alt={details.cover.alt}
						loading="lazy"
					/>
				</div>
			{:else if details.description}
				<div class="w-full text-left text-fg-muted space-y-4 md:space-y-6 leading-relaxed">
					{@html details.description}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	:global(div[class*='space-y'] p) {
		margin: 0;
	}

	:global(div[class*='space-y'] strong) {
		font-weight: 700;
		color: var(--text-color);
	}
</style>
