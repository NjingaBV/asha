<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import ColorSelector from './ColorSelector.svelte';
</script>

<Meta title="Molecules/ColorSelector" component={ColorSelector} />

<Template let:args>
  <ColorSelector {...args} />
  
</Template>

<Story name="Default" args={{
  colors: [
    { label: 'Bleu', value: '#0a84ff' },
    { label: 'Rouge', value: '#ff3b30' },
    { label: 'Noir', value: '#000000' }
  ],
  selected: '#0a84ff'
}} />

