<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import FeatureGrid from './FeatureGrid.svelte';
</script>

<Meta title="Organisms/FeatureGrid" component={FeatureGrid} />

<Template let:args>
  <div class="container mx-auto px-6 py-8">
    <FeatureGrid {...args} />
  </div>
  
</Template>

<Story name="Default" args={{
  items: [
    { title: 'Autonomie', description: 'Jusqu\'à 18 h d\'autonomie.' },
    { title: 'Santé', description: 'Fréquence cardiaque, ECG, sommeil.' },
    { title: 'Résistance', description: 'Résiste à l\'eau et à la poussière.' },
    { title: 'Connectivité', description: 'Restez joignable sans votre iPhone.' }
  ]
}} />

