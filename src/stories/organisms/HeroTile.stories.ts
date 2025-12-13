import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroTile from '$lib/components/organisms/HeroTile.svelte';

const meta = {
	title: 'Organisms/HeroTile',
	component: HeroTile,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Tuile Héros (HeroTile)

Une section héros visuellement attrayante qui affiche une grille d'images avec un logo central, créant un effet visuel dynamique et moderne.

## Caractéristiques Clés
- **Grille d'Images**: Affiche une collection d'images dans une disposition en grille.
- **Logo Central**: Superpose un logo au centre de la grille pour une identité de marque forte.
- **Effet Visuel Dynamique**: Crée une expérience d'en-tête immersive et moderne.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		images: { control: 'object' }
	}
} satisfies Meta<typeof HeroTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		images: [
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format&id=1',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format&id=2',
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format&id=3',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format&id=4',
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format&id=5',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format&id=6',
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format&id=7',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format&id=8'
		],
		logo: {
			title: 'DJ FMK',
			subtitle: '',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
			imgAlt: 'DJ FMK logo',
			showTitle: false
		}
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render hero tile grid', async () => {
			const images = canvas.getAllByRole('img');
			expect(images.length).toBeGreaterThan(0);
		});

		await step('Display logo image', async () => {
			const logo = canvas.getByAltText('DJ FMK logo');
			expect(logo).toBeInTheDocument();
		});

		await step('Show logo title when enabled', async () => {
			// Note: showTitle is false in this story, so title should not be visible
			const titleElement = canvas.queryByText('DJ FMK');
			expect(titleElement).not.toBeInTheDocument();
		});

		await step('Hero tile has proper structure', async () => {
			const heroTile =
				canvasElement.querySelector('[data-testid="hero-tile"]') ||
				canvasElement.firstElementChild;
			expect(heroTile).toBeInTheDocument();
		});

		await step('Images are properly loaded', async () => {
			const images = canvas.getAllByRole('img');
			images.forEach((img) => {
				expect(img).toHaveAttribute('src');
				expect(img).toHaveAttribute('alt');
			});
		});
	}
};

export const Animated: Story = {
	args: {
		...Primary.args
	}
};
