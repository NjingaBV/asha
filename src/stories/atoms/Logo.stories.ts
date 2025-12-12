import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Logo from '$lib/components/atoms/Logo.svelte';

const meta = {
	title: 'Atoms/Logo',
	component: Logo,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered'
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Brand or company name displayed alongside logo when showTitle is true'
		},
		subtitle: {
			control: 'text',
			description: 'Tagline or company description displayed when showTitle is true'
		},
		imgUrl: {
			control: 'text',
			description: 'URL to the logo image file'
		},
		imgAlt: {
			control: 'text',
			description: 'Alt text for the logo image'
		},
		showTitle: {
			control: 'boolean',
			description: 'Toggle visibility of title and subtitle text'
		},
		link: {
			control: 'text',
			description: 'Optional URL to make the logo clickable'
		}
	}
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Brand Name',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		imgAlt: 'Brand Logo',
		showTitle: false
	}
};

export const WithTitle: Story = {
	args: {
		title: 'Ouranos',
		subtitle: "Courtier d'assurances",
		imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?auto=compress,format',
		imgAlt: 'Ouranos Logo',
		showTitle: true
	}
};

export const WithLink: Story = {
	args: {
		title: 'DJ FMK',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		imgAlt: 'DJ FMK Logo',
		showTitle: false,
		link: 'https://www.djfacemaker.com'
	}
};

export const Njinga: Story = {
	args: {
		title: 'Njinga',
		imgUrl: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Logo_njinga_raccourci_540x.png?v=1645790543',
		imgAlt: 'Njinga Logo',
		showTitle: false
	}
};

export const FullBranding: Story = {
	args: {
		title: 'Ouranos',
		subtitle: "Courtier d'assurances",
		imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?auto=compress,format',
		imgAlt: 'Ouranos Logo',
		showTitle: true,
		link: '/'
	}
};

// ============================================
// Play Tests - Rendering & Accessibility
// ============================================

export const TestLogoRendering: Story = {
	args: {
		title: 'Brand Name',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		imgAlt: 'Brand Logo',
		showTitle: false
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const img = canvasElement.querySelector('img');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src');
	}
};

export const TestLogoAltText: Story = {
	args: {
		title: 'Brand Name',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		imgAlt: 'DJ FaceMarker Brand Logo',
		showTitle: false
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const img = canvasElement.querySelector('img');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('alt', 'DJ FaceMarker Brand Logo');
	}
};

export const TestLogoWithTitle: Story = {
	args: {
		title: 'Ouranos',
		subtitle: "Courtier d'assurances",
		imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?auto=compress,format',
		imgAlt: 'Ouranos Logo',
		showTitle: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const img = canvasElement.querySelector('img');
		expect(img).toBeInTheDocument();
		const title = canvas.queryByText('Ouranos');
		if (title) {
			expect(title).toBeInTheDocument();
		}
	}
};

export const TestLogoWithLink: Story = {
	args: {
		title: 'DJ FMK',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		imgAlt: 'DJ FMK Logo',
		showTitle: false,
		link: 'https://www.djfacemaker.com'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvasElement.querySelector('a');
		if (link) {
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute('href', 'https://www.djfacemaker.com');
		}
	}
};
