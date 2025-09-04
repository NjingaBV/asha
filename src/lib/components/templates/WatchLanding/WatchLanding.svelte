<script lang="ts">
  import { HeroBanner, PromoStrip, FeatureGrid } from '$lib/components/organisms';

  export let hero = {
    eyebrow: 'Apple Watch',
    title: 'Plus puissante. Plus connectée.',
    subtitle: 'Des fonctionnalités santé et forme avancées.',
    image: null,
    primaryCTA: { label: 'Acheter', href: '#' },
    secondaryCTA: { label: 'En savoir plus', href: '#' },
    background: '#000000'
  };
  export let promo = { text: 'Livraison et retours gratuits.' };
  export let features: Array<{ title: string; description: string; icon?: string }> = [];
</script>

<div class="flex flex-col">
  <PromoStrip text={promo.text} tone="light" />
  <HeroBanner {...hero} />
  <section class="container mx-auto px-6 py-16">
    <FeatureGrid items={features} />
  </section>
</div>
