<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import MacHero from '$lib/components/organisms/MacHero.svelte';
	import NavigationBar from '$lib/components/molecules/NavigationBar.svelte';
	import MacShowcase from '$lib/components/organisms/MacShowcase.svelte';
	import MacComparison from '$lib/components/organisms/MacComparison.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import type { LinkType, LogoType } from '$lib/models';

	/**
	 * Mac Page - Complete Apple Mac landing page
	 * Inspired by https://www.apple.com/mac/
	 */

	interface MacProduct {
		title: string;
		tagline?: string;
		image: string;
		imageAlt?: string;
		price?: string;
		isNew?: boolean;
		colors?: string[];
		learnMoreHref?: string;
		buyHref?: string;
	}

	interface ComparisonItem {
		image: string;
		imageAlt?: string;
		name: string;
		price?: string;
		features?: string[];
		highlighted?: boolean;
	}

	interface Props {
		/** Logo for header */
		logo: LogoType;
		/** Navigation links */
		navLinks?: LinkType[];
		/** Mac navigation items */
		macNavItems?: { label: string; href: string }[];
		/** Hero section data */
		hero: {
			title: string;
			subtitle?: string;
			description?: string;
			imageDesktop: string;
			imageMobile?: string;
			imageTablet?: string;
			imageAlt?: string;
			isNew?: boolean;
			learnMoreHref?: string;
			buyHref?: string;
			backgroundColor?: string;
			textColor?: 'light' | 'dark';
		};
		/** Mac products for showcase */
		products?: MacProduct[];
		/** Comparison items */
		comparisonItems?: ComparisonItem[];
		/** Show comparison section */
		showComparison?: boolean;
	}

	let {
		logo,
		navLinks = [],
		macNavItems = [],
		hero,
		products = [],
		comparisonItems = [],
		showComparison = false
	}: Props = $props();

	let open = $state(false);
</script>

<div class="min-h-screen bg-white">
	<Header {navLinks} bind:open {logo} />

	<main>
		<MacHero {...hero} />

		{#if macNavItems.length > 0}
			<NavigationBar items={macNavItems} />
		{/if}

		{#if products.length > 0}
			<MacShowcase
				title="Which Mac is right for you?"
				description="Choose the perfect Mac for your needs"
				{products}
			/>
		{/if}

		{#if showComparison && comparisonItems.length > 0}
			<MacComparison
				title="Compare Mac models"
				description="Find the perfect Mac that fits your workflow"
				items={comparisonItems}
			/>
		{/if}
	</main>

	<Footer />
</div>
