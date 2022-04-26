<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Tile from './Tile.svelte';
</script>

<Meta
	title="Molecules/Tile"
	component={Tile}
    argTypes={{
        images: { control: 'object' }
    }}
/>

<Template let:args>
	<Tile {...args} />
</Template>

<Story
	name="Home Tile"
    args={{
        images: [
            'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
            'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
        ]
    }}
/>