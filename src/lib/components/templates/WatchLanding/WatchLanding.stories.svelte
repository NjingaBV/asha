<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import WatchLanding from './WatchLanding.svelte';
</script>

<Meta title="Templates/WatchLanding" component={WatchLanding} />

<Template let:args>
  <WatchLanding {...args} />
  
</Template>

<Story name="Default" args={{
  hero: {
    eyebrow: 'Apple Watch',
    title: 'Plus puissante. Plus connectée.',
    subtitle: 'Des fonctionnalités santé et forme avancées.',
    background: '#000000',
    primaryCTA: { label: 'Acheter', href: '#' },
    secondaryCTA: { label: 'En savoir plus', href: '#' }
  },
  promo: { text: 'Livraison et retours gratuits.' },
  features: [
    { title: 'Autonomie', description: 'Jusqu\'à 18 h d\'autonomie.' },
    { title: 'Santé', description: 'Fréquence cardiaque, ECG, sommeil.' },
    { title: 'Résistance', description: 'Résiste à l\'eau et à la poussière.' },
    { title: 'Connectivité', description: 'Restez joignable sans votre iPhone.' }
  ]
}} />

