<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Eyebrow from './Eyebrow.svelte';
</script>

<Meta title="Atoms/Eyebrow" component={Eyebrow} />

<Template let:args>
  <Eyebrow {...args} />
  
</Template>

<Story name="Center" args={{ text: 'Apple Watch', align: 'center' }} />
<Story name="Left" args={{ text: 'Series 10', align: 'left' }} />

