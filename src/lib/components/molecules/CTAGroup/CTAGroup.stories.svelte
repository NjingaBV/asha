<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import CTAGroup from './CTAGroup.svelte';
</script>

<Meta title="Molecules/CTAGroup" component={CTAGroup} />

<Template let:args>
  <CTAGroup {...args} />
  
</Template>

<Story name="Primary + Secondary" args={{
  primary: { label: 'Acheter', href: '#', tone: 'primary' },
  secondary: { label: 'En savoir plus', href: '#', tone: 'secondary' },
  align: 'center'
}} />

<Story name="Only Primary" args={{
  primary: { label: 'Acheter', href: '#', tone: 'primary' },
  secondary: null,
  align: 'left'
}} />

