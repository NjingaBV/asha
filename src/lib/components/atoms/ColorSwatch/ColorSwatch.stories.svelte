<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import ColorSwatch from './ColorSwatch.svelte';
</script>

<Meta title="Atoms/ColorSwatch" component={ColorSwatch} />

<Template let:args>
  <div class="flex gap-2 items-center">
    <ColorSwatch {...args} />
    <ColorSwatch color="#000000" label="Noir" />
    <ColorSwatch color="#FFFFFF" label="Blanc" />
  </div>
  
</Template>

<Story name="Selected" args={{ color: '#0a84ff', label: 'Bleu', selected: true }} />
<Story name="Unselected" args={{ color: '#ff3b30', label: 'Rouge', selected: false }} />

