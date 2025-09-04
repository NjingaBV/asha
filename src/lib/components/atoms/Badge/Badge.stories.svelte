<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Badge from './Badge.svelte';
</script>

<Meta title="Atoms/Badge" component={Badge} />

<Template let:args>
  <Badge {...args} />
  
</Template>

<Story name="Dark" args={{ label: 'New', tone: 'dark', size: 'md' }} />
<Story name="Light" args={{ label: 'New', tone: 'light', size: 'md' }} />
<Story name="Accent" args={{ label: 'Edition', tone: 'accent', size: 'sm' }} />

