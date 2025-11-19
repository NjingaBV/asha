<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import StickyProductNav from '$lib/components/organisms/StickyProductNav.svelte';
	import VideoHero from '$lib/components/organisms/VideoHero.svelte';
	import ProductLineup from '$lib/components/organisms/ProductLineup.svelte';
	import WhyAppleSection from '$lib/components/organisms/WhyAppleSection.svelte';
	import FeatureDiscovery from '$lib/components/organisms/FeatureDiscovery.svelte';
	import HelpMeChooseSection from '$lib/components/organisms/HelpMeChooseSection.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	// Data for StickyProductNav
	const productNavLinks = [
		{ label: 'Aperçu', href: '#' },
		{ label: 'macOS', href: '#' },
		{ label: 'Tech Specs', href: '#' }
	];

	const productNavCta = { label: 'Acheter', href: '#' };
</script>

<div class="min-h-screen bg-white">
	<!-- Global Header -->
	<Header />

	<!-- Sticky Product Nav (Mac specific) -->
	<StickyProductNav
		logo={{ title: 'Mac' }}
		links={productNavLinks}
		cta={productNavCta}
		dark={false}
	/>

	<main>
		<!-- Hero Section with Video -->
		<VideoHero />

		<!-- Product Lineup (The Grid) -->
		<ProductLineup title="Explorez la gamme." description="Découvrez le Mac qu'il vous faut." />

		<!-- Help Me Choose -->
		<HelpMeChooseSection />

		<!-- Why Apple -->
		<WhyAppleSection />

		<!-- Feature Discovery (Get to know Mac) -->
		<FeatureDiscovery />
	</main>

	<!-- Footer -->
	<Footer />
</div>
