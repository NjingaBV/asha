<script lang="ts">
	import HeroSection from '../../organisms/HeroSection/HeroSection.svelte';
	import ProductGrid from '../../organisms/ProductGrid/ProductGrid.svelte';
	import CallToAction from '../../molecules/CallToAction/CallToAction.svelte';
	import FeatureGrid from '../../organisms/FeatureGrid/FeatureGrid.svelte';
	import Heading from '../../atoms/Heading/Heading.svelte';
	import Paragraph from '../../atoms/Paragraph/Paragraph.svelte';

	let {
		heroData = $state<any>(undefined),
		productsData = $state<any[]>([]),
		featuresData = $state<any[]>([]),
		ctaData = $state<any>(undefined)
	}: {
		heroData?: any;
		productsData?: any[];
		featuresData?: any[];
		ctaData?: any;
	} = $props();

	// Default data for new design
	let defaultHeroData = $state({
		title: 'Apple Watch',
		subtitle: 'Nouveau',
		description:
			"Profitez de 3 mois d'abonnement à Apple Fitness+ pour l'achat d'une Apple Watch. La montre ultime pour votre santé.",
		primaryAction: {
			label: 'Acheter une Apple Watch',
			onClick: () => console.log('Primary action clicked')
		},
		secondaryAction: {
			label: 'En savoir plus',
			onClick: () => console.log('Secondary action clicked')
		},
		products: [
			{
				name: 'Apple Watch Series 11',
				image: 'https://via.placeholder.com/300x300/2563eb/ffffff?text=Series+11',
				badge: 'Nouveau'
			},
			{
				name: 'Apple Watch SE 3',
				image: 'https://via.placeholder.com/300x300/64748b/ffffff?text=SE+3',
				badge: 'Nouveau'
			},
			{
				name: 'Apple Watch Ultra 3',
				image: 'https://via.placeholder.com/300x300/1e293b/ffffff?text=Ultra+3',
				badge: 'Nouveau'
			}
		]
	});

	let defaultProductsData = $state([
		{
			title: 'Apple Watch Series 11',
			subtitle: 'Nouveau',
			description: 'La montre ultime pour votre santé.',
			image: 'https://via.placeholder.com/400x400/2563eb/ffffff?text=Series+11',
			colors: [
				'gris sidéral',
				'argent',
				'or rose',
				'noir de jais',
				'naturel',
				'or',
				'ardoise'
			],
			primaryAction: { label: 'En savoir plus' },
			secondaryAction: { label: 'Acheter' },
			badge: 'Nouveau'
		},
		{
			title: 'Apple Watch SE 3',
			subtitle: 'Nouveau',
			description: 'Des fonctionnalités de santé inestimables à un prix remarquable.',
			image: 'https://via.placeholder.com/400x400/64748b/ffffff?text=SE+3',
			colors: ['minuit', 'lumière stellaire'],
			primaryAction: { label: 'En savoir plus' },
			secondaryAction: { label: 'Acheter' },
			badge: 'Nouveau'
		},
		{
			title: 'Apple Watch Ultra 3',
			subtitle: 'Nouveau',
			description: "La montre ultime pour le sport et l'aventure.",
			image: 'https://via.placeholder.com/400x400/1e293b/ffffff?text=Ultra+3',
			colors: ['naturel', 'noir'],
			primaryAction: { label: 'En savoir plus' },
			secondaryAction: { label: 'Acheter' },
			badge: 'Nouveau'
		}
	]);

	let defaultFeaturesData = $state([
		{
			title: 'Santé',
			description:
				'Elle vous connaît bien. Pour votre bien. Recevez une notification en cas de pression artérielle élevée chronique.',
			image: 'https://via.placeholder.com/800x600/10b981/ffffff?text=Sant%C3%A9',
			icon: 'heart',
			badge: 'Fonctionnalité principale'
		},
		{
			title: 'Forme',
			description:
				'Des kilomètres de motivation. Complétez vos anneaux et suivez votre activité quotidienne.',
			image: 'https://via.placeholder.com/800x600/f59e0b/ffffff?text=Forme',
			icon: 'activity',
			badge: 'Sport'
		},
		{
			title: 'Sécurité',
			description:
				"De l'aide. Toujours à portée de main. Détection de chute et appels d'urgence.",
			image: 'https://via.placeholder.com/800x600/ef4444/ffffff?text=S%C3%A9curit%C3%A9',
			icon: 'shield',
			badge: 'Protection'
		}
	]);

	let defaultCtaData = $state({
		title: "Tant de raisons d'acheter votre Apple Watch chez Apple.",
		description:
			'Livraison gratuite et retours gratuits. Découvrez comment profiter au maximum de votre nouvelle Apple Watch.',
		primaryAction: {
			label: 'Acheter une Apple Watch',
			onClick: () => console.log('Buy now clicked')
		}
	});

	let actualHeroData = $derived(heroData || defaultHeroData);
	let actualProductsData = $derived(productsData.length > 0 ? productsData : defaultProductsData);
	let actualFeaturesData = $derived(featuresData.length > 0 ? featuresData : defaultFeaturesData);
	let actualCtaData = $derived(ctaData || defaultCtaData);
</script>

<main class="min-h-screen bg-white">
	<!-- Hero Section -->
	<HeroSection
		title={actualHeroData.title}
		subtitle={actualHeroData.subtitle}
		description={actualHeroData.description}
		primaryAction={actualHeroData.primaryAction}
		secondaryAction={actualHeroData.secondaryAction}
		products={actualHeroData.products}
	/>

	<!-- Products Section -->
	<section class="py-16 lg:py-24 bg-gray-50">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<div class="text-center mb-12">
				<Heading level={2} size="4xl" weight="bold" class="text-slate-900 mb-4">
					Découvrez l'Apple Watch
				</Heading>
				<Paragraph size="lg" color="text-slate-600" class="max-w-2xl mx-auto">
					Trois modèles conçus pour différents besoins et budgets.
				</Paragraph>
			</div>

			<ProductGrid products={actualProductsData} columns={3} />
		</div>
	</section>

	<!-- Features Section -->
	<section class="py-16 lg:py-24">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<FeatureGrid features={actualFeaturesData} layout="alternating" />
		</div>
	</section>

	<!-- Call to Action -->
	<CallToAction
		title={actualCtaData.title}
		description={actualCtaData.description}
		primaryAction={actualCtaData.primaryAction}
	/>
</main>
