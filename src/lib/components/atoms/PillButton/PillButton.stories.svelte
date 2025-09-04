<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import PillButton from './PillButton.svelte';
</script>

<Meta title="Atoms/PillButton" component={PillButton} />

<Template let:args>
  <PillButton {...args} />
  
</Template>

<Story name="Primary" args={{ label: 'Acheter', tone: 'primary', size: 'md' }} />
<Story name="Secondary" args={{ label: 'En savoir plus', tone: 'secondary', size: 'md' }} />
<Story name="Dark Large" args={{ label: 'Explorer', tone: 'dark', size: 'lg' }} />

