<script lang="ts">
	/**
	 * Image component - Responsive image with srcset support
	 *
	 * @example
	 * <Image src="/mac.jpg" alt="MacBook Pro" />
	 * <Image desktop="/mac-desktop.jpg" mobile="/mac-mobile.jpg" alt="Mac" />
	 */

	interface Props {
		/** Image source (single) */
		src?: string;
		/** Desktop image source */
		desktop?: string;
		/** Tablet image source */
		tablet?: string;
		/** Mobile image source */
		mobile?: string;
		/** Alt text for accessibility */
		alt: string;
		/** Additional CSS classes */
		className?: string;
		/** Object fit style */
		objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
		/** Loading strategy */
		loading?: 'lazy' | 'eager';
		/** Width attribute */
		width?: number | string;
		/** Height attribute */
		height?: number | string;
	}

	let {
		src = undefined,
		desktop = undefined,
		tablet = undefined,
		mobile = undefined,
		alt,
		className = '',
		objectFit = 'cover',
		loading = 'lazy',
		width = undefined,
		height = undefined
	}: Props = $props();

	const hasResponsive = $derived(Boolean(desktop || tablet || mobile));
	const effectiveSrc = $derived(src || desktop || tablet || mobile || '');

	const objectFitClass = $derived(
		objectFit === 'cover'
			? 'object-cover'
			: objectFit === 'contain'
				? 'object-contain'
				: objectFit === 'fill'
					? 'object-fill'
					: objectFit === 'none'
						? 'object-none'
						: 'object-scale-down'
	);

	const imageClasses = $derived([objectFitClass, className].filter(Boolean).join(' '));
</script>

{#if hasResponsive}
	<picture>
		{#if mobile}
			<source media="(max-width: 767px)" srcset={mobile} />
		{/if}
		{#if tablet}
			<source media="(min-width: 768px) and (max-width: 1023px)" srcset={tablet} />
		{/if}
		{#if desktop}
			<source media="(min-width: 1024px)" srcset={desktop} />
		{/if}
		<img src={effectiveSrc} {alt} class={imageClasses} {loading} {width} {height} />
	</picture>
{:else}
	<img src={effectiveSrc} {alt} class={imageClasses} {loading} {width} {height} />
{/if}
