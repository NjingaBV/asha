<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import PromoStrip from './PromoStrip.svelte';
</script>

<Meta title="Organisms/PromoStrip" component={PromoStrip} />

<Template let:args>
  <PromoStrip {...args} />
  
</Template>

<Story name="Light" args={{ text: 'Livraison et retours gratuits.', tone: 'light' }} />
<Story name="Dark" args={{ text: 'Disponibilité limitée.', tone: 'dark' }} />

