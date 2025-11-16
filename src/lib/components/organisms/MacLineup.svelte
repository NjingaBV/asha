<script lang="ts">
	import { useMachine } from 'xstate';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import MacBadge from '$lib/components/atoms/MacBadge.svelte';
	import MacProductHeader from '$lib/components/molecules/MacProductHeader.svelte';
	import MacVariantSelector from '$lib/components/molecules/MacVariantSelector.svelte';
	import MacSpecGrid from '$lib/components/molecules/MacSpecGrid.svelte';
	import { macLineupMachine } from '$lib/machines/macLineup.machine';
	import type { MacProduct } from '$lib/models';

	interface Props {
		title?: string;
		description?: string;
		products?: MacProduct[];
	}

	let {
		title = 'La gamme Mac',
		description = 'Une grille interactive inspirée de la page Apple.com/mac pour parcourir chaque modèle avec des finitions, spécifications et appels à l’action.',
		products = []
	}: Props = $props();

	const defaultProducts = $state<MacProduct[]>([
		{
			slug: 'macbook-air',
			name: 'MacBook Air',
			tagline: 'Fidèle au design Air : fin, léger, silencieux.',
			description: 'Puce M3, jusqu’à 18 h d’autonomie, écran Liquid Retina 13 ou 15 pouces.',
			startingPrice: 'À partir de 1 299 €',
			badge: 'Best-seller',
			heroImage: 'https://via.placeholder.com/900x600/0f172a/ffffff?text=MacBook+Air',
			background: 'linear-gradient(135deg, #0f172a, #1e293b)',
			textOnDark: true,
			colors: [
				{ name: 'Minuit', swatch: '#0b1224' },
				{ name: 'Lumière stellaire', swatch: '#f6e7cf' },
				{ name: 'Argent', swatch: '#e5e7eb' },
				{ name: 'Gris sidéral', swatch: '#4b5563' }
			],
			specs: [
				{ label: 'Puce', value: 'Apple M3' },
				{ label: 'Autonomie', value: 'Jusqu’à 18 h' },
				{ label: 'Poids', value: 'Dès 1,24 kg' },
				{ label: 'Écran', value: '13" ou 15" Liquid Retina' },
				{ label: 'Ports', value: 'MagSafe + 2x Thunderbolt' },
				{ label: 'Audio', value: '4 haut-parleurs' }
			],
			highlights: [
				'Silencieux, sans ventilateur',
				'Compatible avec deux écrans en mode fermé'
			],
			ctas: {
				primary: { label: 'Acheter', href: '#' },
				secondary: { label: 'En savoir plus', href: '#' }
			}
		},
		{
			slug: 'macbook-pro',
			name: 'MacBook Pro',
			tagline: 'Pensé pour les pros, propulsé par M4 Pro/Max.',
			description: 'Performances extrêmes, autonomie record et écran Liquid Retina XDR.',
			startingPrice: 'À partir de 1 999 €',
			badge: 'Nouveau',
			heroImage: 'https://via.placeholder.com/900x600/020617/ffffff?text=MacBook+Pro',
			background: 'linear-gradient(135deg, #020617, #0b1224)',
			textOnDark: true,
			colors: [
				{ name: 'Noir sidéral', swatch: '#0b1224' },
				{ name: 'Argent', swatch: '#e5e7eb' }
			],
			specs: [
				{ label: 'Puce', value: 'Apple M4 Pro ou M4 Max', emphasize: true },
				{ label: 'Autonomie', value: 'Jusqu’à 22 h' },
				{ label: 'Écran', value: '14" ou 16" Liquid Retina XDR' },
				{ label: 'GPU', value: 'Jusqu’à 40 cœurs' },
				{ label: 'Ports', value: 'HDMI, SDXC, MagSafe, 3x Thunderbolt' },
				{ label: 'Mémoire', value: 'Jusqu’à 128 Go' }
			],
			highlights: ['Refroidissement actif', 'Promotion 120 Hz, technologies pros'],
			ctas: {
				primary: { label: 'Configurer', href: '#' },
				secondary: { label: 'Découvrir', href: '#' }
			}
		},
		{
			slug: 'imac',
			name: 'iMac',
			tagline: 'Iconique, tout-en-un, 24 pouces.',
			description: 'Fin et coloré, doté de la puce Apple M4 et d’une caméra 1080p.',
			startingPrice: 'À partir de 1 649 €',
			badge: 'Couleurs',
			heroImage: 'https://via.placeholder.com/900x600/e0f2fe/0f172a?text=iMac',
			background: 'linear-gradient(135deg, #e0f2fe, #fff1f2)',
			textOnDark: false,
			colors: [
				{ name: 'Bleu', swatch: '#2563eb' },
				{ name: 'Vert', swatch: '#10b981' },
				{ name: 'Rose', swatch: '#ec4899' },
				{ name: 'Jaune', swatch: '#f59e0b' }
			],
			specs: [
				{ label: 'Puce', value: 'Apple M4' },
				{ label: 'Écran', value: '24" Retina 4.5K' },
				{ label: 'Appareil photo', value: '1080p FaceTime' },
				{ label: 'Stockage', value: 'Jusqu’à 2 To' },
				{ label: 'Ports', value: 'Ethernet, Thunderbolt, USB‑C' },
				{ label: 'Magic Keyboard', value: 'avec Touch ID' }
			],
			highlights: ['Tout-en-un ultra fin', 'Palette de couleurs inspirée d’Apple'],
			ctas: {
				primary: { label: 'Choisir sa couleur', href: '#' },
				secondary: { label: 'Détails techniques', href: '#' }
			}
		},
		{
			slug: 'mac-mini',
			name: 'Mac mini',
			tagline: 'Plein gaz, mini format.',
			description: 'Format compact, efficacité énergétique et connectivité généreuse.',
			startingPrice: 'À partir de 699 €',
			heroImage: 'https://via.placeholder.com/900x600/f8fafc/0f172a?text=Mac+mini',
			background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
			textOnDark: false,
			colors: [
				{ name: 'Argent', swatch: '#e5e7eb' },
				{ name: 'Gris sidéral', swatch: '#4b5563' }
			],
			specs: [
				{ label: 'Puce', value: 'Apple M4 ou M4 Pro' },
				{ label: 'Ports', value: 'Ethernet 10 Gb, HDMI, USB‑A, Thunderbolt' },
				{ label: 'Audio', value: 'Jack 3,5 mm avancé' },
				{ label: 'Format', value: '19,7 cm de côté' },
				{ label: 'Mémoire', value: 'Jusqu’à 36 Go' },
				{ label: 'Stockage', value: 'Jusqu’à 4 To' }
			],
			highlights: ['Idéal pour bureau ou studio', 'Silencieux et économe'],
			ctas: {
				primary: { label: 'Acheter', href: '#' },
				secondary: { label: 'Comparer', href: '#' }
			}
		},
		{
			slug: 'mac-studio',
			name: 'Mac Studio',
			tagline: 'Compact et radicalement puissant.',
			description: 'Pour le rendu, la 3D, la vidéo et l’IA avec des débits fulgurants.',
			startingPrice: 'À partir de 2 399 €',
			heroImage: 'https://via.placeholder.com/900x600/0f172a/ffffff?text=Mac+Studio',
			background: 'linear-gradient(135deg, #0f172a, #0b1224)',
			textOnDark: true,
			colors: [{ name: 'Argent', swatch: '#e5e7eb' }],
			specs: [
				{ label: 'Puce', value: 'Apple M4 Max ou M4 Ultra', emphasize: true },
				{ label: 'GPU', value: 'Jusqu’à 80 cœurs' },
				{ label: 'Mémoire', value: 'Jusqu’à 192 Go unifiée' },
				{ label: 'Ports', value: 'Thunderbolt, HDMI, 10 Gb Ethernet, SD' },
				{ label: 'Performance', value: 'Rendu vidéo ProRes massif' },
				{ label: 'Thermique', value: 'Gestion silencieuse' }
			],
			highlights: ['Pensé pour le flux pro', 'Connectivité frontale pratique'],
			ctas: {
				primary: { label: 'Configurer', href: '#' },
				secondary: { label: 'Fiche technique', href: '#' }
			}
		}
	]);

	const actualProducts = $derived<MacProduct[]>(
		products && products.length > 0 ? products : defaultProducts
	);

	const { state, send } = useMachine(
		macLineupMachine.provide({
			input: { products: actualProducts }
		})
	);

	$: activeProduct =
		state.context.products.find((product) => product.slug === state.context.activeSlug) ||
		state.context.products[0];

	$: selectedColor =
		state.context.selectedColor ||
		(state.context.products[0]?.colors ? state.context.products[0].colors[0]?.name : undefined);

	const tone = $derived<'light' | 'dark'>(activeProduct?.textOnDark ? 'dark' : 'light');
	const heroBackground = $derived(
		activeProduct?.background || 'linear-gradient(135deg, #0b1224, #111827)'
	);
</script>

{#if !activeProduct}
	<section class="rounded-3xl border border-dashed border-slate-200 p-10 text-center">
		<Heading level={3} size="2xl" class="text-slate-800">Aucun produit</Heading>
		<Paragraph size="md" class="text-slate-600">
			Ajoutez des produits dans la prop `products` pour afficher la grille inspirée d’Apple.
		</Paragraph>
	</section>
{:else}
	<section class="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16">
		<div class="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col gap-4">
				<Heading level={2} size="4xl" weight="black" class="text-slate-900">
					{title}
				</Heading>
				<Paragraph size="lg" class="max-w-3xl text-slate-600">
					{description}
				</Paragraph>

				<div class="flex flex-wrap items-center gap-3">
					{#each state.context.products as product}
						<button
							type="button"
							on:click={() => send({ type: 'SELECT_PRODUCT', slug: product.slug })}
							class={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
								product.slug === state.context.activeSlug
									? 'bg-slate-900 text-white shadow-lg'
									: 'bg-white text-slate-700 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:shadow'
							}`}
						>
							{product.name}
							{#if product.badge}
								<MacBadge label={product.badge} tone="neutral" />
							{/if}
						</button>
					{/each}

					<div class="ml-auto hidden gap-2 md:flex">
						<button
							type="button"
							class="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:shadow"
							on:click={() => send({ type: 'PREVIOUS' })}
							aria-label="Modèle précédent"
						>
							←
						</button>
						<button
							type="button"
							class="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:shadow"
							on:click={() => send({ type: 'NEXT' })}
							aria-label="Modèle suivant"
						>
							→
						</button>
					</div>
				</div>
			</div>

			<div
				class="relative overflow-hidden rounded-3xl border border-white/80 shadow-2xl shadow-slate-900/5"
				style={`background:${heroBackground}`}
			>
				<div
					class="absolute inset-0 animate-pulse bg-gradient-to-br from-white/10 via-transparent to-white/5"
					aria-hidden="true"
				></div>
				<div class="relative grid gap-10 p-8 lg:grid-cols-5 lg:items-center lg:p-12">
					<div class="flex flex-col gap-3 lg:col-span-3">
						{#if activeProduct.badge}
							<MacBadge
								label={activeProduct.badge}
								tone={tone === 'dark' ? 'neutral' : 'accent'}
							/>
						{/if}

						{#if activeProduct.heroImage}
							<img
								src={activeProduct.heroImage}
								alt={activeProduct.heroAlt || activeProduct.name}
								class="w-full rounded-2xl border border-white/10 bg-white/5 object-contain shadow-lg shadow-black/15"
								loading="lazy"
							/>
						{:else}
							<div
								class="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-white/30 bg-white/10 text-sm text-white/70"
							>
								Image produit non fournie
							</div>
						{/if}

						{#if selectedColor}
							<div
								class={`${tone === 'dark' ? 'text-white/70' : 'text-slate-600'} text-xs`}
							>
								Finition sélectionnée : {selectedColor}
							</div>
						{/if}
					</div>

					<div class="flex flex-col gap-6 lg:col-span-2">
						<MacProductHeader
							name={activeProduct.name}
							tagline={activeProduct.tagline}
							description={activeProduct.description}
							price={activeProduct.startingPrice}
							badge={undefined}
							{tone}
							align="left"
							ctas={activeProduct.ctas}
						/>

						<MacVariantSelector
							colors={activeProduct.colors}
							selected={selectedColor}
							{tone}
							onChange={(color) => send({ type: 'SELECT_COLOR', color })}
						/>

						<MacSpecGrid specs={activeProduct.specs} {tone} />

						{#if activeProduct.highlights && activeProduct.highlights.length > 0}
							<ul
								class={`grid gap-3 text-sm ${tone === 'dark' ? 'text-white/80' : 'text-slate-700'}`}
							>
								{#each activeProduct.highlights as highlight}
									<li
										class="inline-flex items-start gap-2 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15"
									>
										<span class="mt-0.5 text-lg">•</span>
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}
