<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import FeatureItem from './FeatureItem.svelte';
</script>

<Meta title="Molecules/FeatureItem" component={FeatureItem} />

<Template let:args>
  <FeatureItem {...args} />
  
</Template>

<Story name="Default" args={{
  title: 'Autonomie',
  description: 'Jusqu\'à 18 heures d\'autonomie pour vous accompagner toute la journée.'
}} />

