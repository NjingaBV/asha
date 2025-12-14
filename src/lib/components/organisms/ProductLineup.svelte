<script lang="ts">
	import { createActor } from 'xstate';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import Badge from '$lib/components/atoms/Badge.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import SpecGrid from '$lib/components/molecules/SpecGrid.svelte';
	import { productLineupMachine } from '$lib/machines/productLineup.machine';
	import type { ProductDetail } from '$lib/models';

	interface Props {
		title?: string;
		description?: string;
		products?: ProductDetail[];
	}

	let {
		title = 'La gamme',
		description = 'Une grille interactive pour parcourir chaque modèle avec des finitions, spécifications et appels à l’action.',
		products = []
	}: Props = $props();

	const actualProducts = $derived<ProductDetail[]>(products || []);

	const actor = createActor(productLineupMachine, {
		input: { products: actualProducts }
	});
	actor.start();

	// Helper function to send events to the actor
	const send = (event: Parameters<typeof actor.send>[0]) => actor.send(event);

	// Subscribe to state changes
	let state = $state(actor.getSnapshot());

	actor.subscribe((snapshot) => {
		state = snapshot;
	});

	// Cleanup
	$effect(() => {
		return () => actor.stop();
	});

	let activeProduct = $derived(
		state.context.products.find((product) => product.slug === state.context.activeSlug) ||
			state.context.products[0]
	);

	let selectedColor = $derived(
		state.context.selectedColor ||
			(state.context.products[0]?.colors
				? state.context.products[0].colors[0]?.name
				: undefined)
	);

	const tone = $derived<'light' | 'dark'>(activeProduct?.textOnDark ? 'dark' : 'light');
	const heroBackground = $derived(
		activeProduct?.background || 'linear-gradient(135deg, #0b1224, #111827)'
	);
</script>

{#if !activeProduct}
	<section class="rounded-3xl border border-dashed border-border p-10 text-center">
		<Heading level={3} size="2xl" class="text-fg">Aucun produit</Heading>
		<Text size="base" class="text-fg-muted">
			Ajoutez des produits dans la prop `products` pour afficher la grille interactive.
		</Text>
	</section>
{:else}
	<section class="bg-page py-16">
		<div class="mx-auto flex max-w-360 flex-col gap-10 px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col gap-4">
				<Heading level={2} size="4xl" weight="semibold" class="text-primary">
					{title}
				</Heading>
				<Text size="lg" class="max-w-3xl text-secondary">
					{description}
				</Text>

				<div class="flex flex-wrap items-center gap-3">
					{#each state.context.products as product}
						<button
							type="button"
							onclick={() => send({ type: 'SELECT_PRODUCT', slug: product.slug })}
							class={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
								product.slug === state.context.activeSlug
									? 'bg-primary text-white shadow-md'
									: 'bg-card text-secondary ring-1 ring-border/50 hover:-translate-y-0.5 hover:shadow-sm'
							}`}
						>
							{product.name}
							{#if product.badge}
								<Badge label={product.badge} tone="neutral" size="sm" />
							{/if}
						</button>
					{/each}

					<div class="ml-auto hidden gap-2 md:flex">
						<button
							type="button"
							class="rounded-full border border-border/50 bg-card px-3 py-2 text-sm text-secondary transition hover:-translate-y-0.5 hover:shadow-sm"
							onclick={() => send({ type: 'PREVIOUS' })}
							aria-label="Modèle précédent"
						>
							←
						</button>
						<button
							type="button"
							class="rounded-full border border-border/50 bg-card px-3 py-2 text-sm text-secondary transition hover:-translate-y-0.5 hover:shadow-sm"
							onclick={() => send({ type: 'NEXT' })}
							aria-label="Modèle suivant"
						>
							→
						</button>
					</div>
				</div>
			</div>

			<div
				class="relative overflow-hidden rounded-2xl border border-white/80 shadow-xl shadow-black/5"
				style={`background:${heroBackground}`}
			>
				<div
					class="absolute inset-0 animate-pulse bg-linear-to-br from-white/10 via-transparent to-white/5"
					aria-hidden="true"
				></div>
				<div class="relative grid gap-10 p-8 lg:grid-cols-5 lg:items-center lg:p-12">
					<div class="flex flex-col gap-3 lg:col-span-3">
						{#if activeProduct.badge}
							<Badge
								label={activeProduct.badge}
								tone={tone === 'dark' ? 'neutral' : 'primary'}
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
								class={`${tone === 'dark' ? 'text-fg-inverse/70' : 'text-fg-muted'} text-xs`}
							>
								Finition sélectionnée : {selectedColor}
							</div>
						{/if}
					</div>

					<div class="flex flex-col gap-6 lg:col-span-2">
						<!-- Product Header (inline replacement for ProductHeader) -->
						<div class="flex flex-col gap-3 items-start text-left">
							<Heading
								level={1}
								size="4xl"
								weight="black"
								class={tone === 'dark' ? 'text-fg-inverse' : 'text-fg'}
							>
								{activeProduct.name}
							</Heading>
							{#if activeProduct.tagline}
								<Text
									size="lg"
									class={`font-semibold ${tone === 'dark' ? 'text-fg-inverse/80' : 'text-fg-muted'}`}
								>
									{activeProduct.tagline}
								</Text>
							{/if}
							{#if activeProduct.description}
								<Text
									size="base"
									class={`max-w-2xl ${tone === 'dark' ? 'text-fg-inverse/80' : 'text-fg-muted'}`}
								>
									{activeProduct.description}
								</Text>
							{/if}
							{#if activeProduct.startingPrice}
								<Text
									size="sm"
									class={`font-semibold ${tone === 'dark' ? 'text-fg-inverse/80' : 'text-fg-muted'}`}
								>
									{activeProduct.startingPrice}
								</Text>
							{/if}
							{#if activeProduct.ctas?.primary || activeProduct.ctas?.secondary}
								<div class="flex flex-wrap items-center gap-3 mt-2">
									{#if activeProduct.ctas?.primary}
										<Button
											tone="primary"
											href={activeProduct.ctas.primary.href}
											onclick={activeProduct.ctas.primary.onClick}
										>
											{activeProduct.ctas.primary.label}
										</Button>
									{/if}
									{#if activeProduct.ctas?.secondary}
										<Button
											variant="ghost"
											tone="neutral"
											href={activeProduct.ctas.secondary.href}
											onclick={activeProduct.ctas.secondary.onClick}
										>
											{activeProduct.ctas.secondary.label}
										</Button>
									{/if}
								</div>
							{/if}
						</div>

						<!-- Variant Selector (inline replacement for VariantSelector) -->
						{#if activeProduct.colors && activeProduct.colors.length > 0}
							<div class="flex flex-col gap-2">
								<Text
									size="sm"
									class={tone === 'dark' ? 'text-fg-inverse/70' : 'text-fg-muted'}
								>
									Couleur
								</Text>
								<div
									class="flex flex-wrap gap-2"
									role="radiogroup"
									aria-label="Couleur"
								>
									{#each activeProduct.colors as color}
										<button
											type="button"
											role="radio"
											aria-checked={selectedColor === color.name}
											aria-label={color.name}
											class={`w-8 h-8 rounded-full border-2 transition-all ${
												selectedColor === color.name
													? 'border-accent ring-2 ring-accent ring-offset-2'
													: 'border-transparent hover:border-border'
											}`}
											style={`background-color: ${color.swatch}`}
											onclick={() =>
												send({ type: 'SELECT_COLOR', color: color.name })}
										></button>
									{/each}
								</div>
							</div>
						{/if}

						<SpecGrid specs={activeProduct.specs} {tone} />

						{#if activeProduct.highlights && activeProduct.highlights.length > 0}
							<ul
								class={`grid gap-3 text-sm ${tone === 'dark' ? 'text-fg-inverse/80' : 'text-fg-muted'}`}
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
