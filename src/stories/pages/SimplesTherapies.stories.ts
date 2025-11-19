import type { Meta, StoryObj } from '@storybook/svelte';
import Home from '$lib/components/pages/Home.svelte';
import type { SliceType } from '$lib/models';

const meta = {
	title: 'Pages/Simples Thérapies',
	component: Home,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// Episode data
interface Episode {
	number: number;
	name: string;
	description: string;
	image: string;
	releaseDate: string;
	duration: string;
}

const episodes = {
	season3: [
		{
			number: 1,
			name: 'Almok',
			description: 'Togoese singer celebrating 10 years, took 2-year hiatus for family',
			image: 'https://images.prismic.io/djfacemakerv2/98cee906-6156-4bc7-84d6-1efa8428a959_Almok+cover.png',
			releaseDate: 'Oct 13, 2021',
			duration: '17 min'
		},
		{
			number: 2,
			name: "Shan'L",
			description: 'Central African artist winning All Africa Music Awards 2021',
			image: 'https://images.prismic.io/djfacemakerv2/fbde8f26-a269-41bd-8bba-a26df599caf3_Shanl+cover.png',
			releaseDate: 'Nov 22, 2021',
			duration: '29 min'
		},
		{
			number: 3,
			name: 'Aysé Sissoko',
			description: 'Journalist/media co-founder promoting African talents across platforms',
			image: 'https://images.prismic.io/djfacemakerv2/0859bef2-aedd-4896-9b82-f76c5bfc931a_Ayse+cover.png',
			releaseDate: 'Dec 26, 2021',
			duration: '19 min'
		},
		{
			number: 4,
			name: 'Omar Defunzu',
			description: 'Comedian featured in TV5MONDE series and Canal+ comedy show',
			image: 'https://images.prismic.io/djfacemakerv2/af7d29c6-5219-4e6a-9559-380a09743677_Defunzu+cover.png',
			releaseDate: 'Jan 7, 2022',
			duration: '16 min'
		},
		{
			number: 5,
			name: 'Gaz Mawete',
			description: 'Artist releasing debut album "Puzzle" addressing African regions',
			image: 'https://images.prismic.io/djfacemakerv2/71d91c5b-5ab0-46a6-92ad-a9ce14247a54_Gaz+Mawetecover.png',
			releaseDate: 'Mar 4, 2022',
			duration: '20 min'
		}
	] as Episode[],
	season2: [
		{
			number: 1,
			name: 'DaFresh',
			description: 'Urban FM 104.5 Gabon founder, entrepreneur employing youth',
			image: 'https://images.prismic.io/djfacemakerv2/b64b8b01-d424-46c9-af3c-bbd49c684694_Dafresh.png',
			releaseDate: 'Dec 7, 2020',
			duration: '21 min'
		},
		{
			number: 2,
			name: 'Géraldine Yema Robert',
			description: 'Former basketball professional, national championship coordinator',
			image: 'https://images.prismic.io/djfacemakerv2/11c40455-eb99-453b-a2a6-eaf88a554a68_Geraldine.png',
			releaseDate: 'Dec 14, 2020',
			duration: '22 min'
		},
		{
			number: 3,
			name: 'Michel Ambouroue',
			description: 'Bishop responding to vocation at 14, theology studies in USA',
			image: 'https://images.prismic.io/djfacemakerv2/3032099d-0e13-4654-8a2d-f6bfe80464dc_Michel+Ambouroue.png',
			releaseDate: 'Dec 23, 2020',
			duration: '45 min'
		},
		{
			number: 4,
			name: 'Sylvère Boussamba',
			description:
				'Tech entrepreneur founding Ogooue Labs, Ecole 241 free training initiative',
			image: 'https://images.prismic.io/djfacemakerv2/14bba644-c8ca-4353-8aa3-b278da8f0c1e_Sylvere.png',
			releaseDate: 'Dec 29, 2020',
			duration: '24 min'
		},
		{
			number: 5,
			name: 'Olivier Ebome Zeng',
			description: "Photographer developing signature technique, inheriting father's legacy",
			image: 'https://images.prismic.io/djfacemakerv2/825f6ae8-abbe-4c47-b309-2776883e2da9_EZ.png',
			releaseDate: 'Jan 5, 2021',
			duration: '22 min'
		},
		{
			number: 6,
			name: "Ba'Ponga",
			description: 'Gabonese musician spanning 20+ year career with global representation',
			image: 'https://images.prismic.io/djfacemakerv2/39b5aac5-4e11-4ba8-8dfa-1d26d526883f_Baponga.png',
			releaseDate: 'Jan 17, 2021',
			duration: '59 min'
		},
		{
			number: 7,
			name: 'NG Bling',
			description: 'Artist diversifying income, determined path despite setbacks',
			image: 'https://images.prismic.io/djfacemakerv2/d4f0abb4-2255-4078-911b-382abc9489b3_NG+Bling.png',
			releaseDate: 'Jan 31, 2021',
			duration: '32 min'
		},
		{
			number: 8,
			name: 'Créol',
			description:
				'Complex musician opening about personal challenges beyond social media persona',
			image: 'https://images.prismic.io/djfacemakerv2/cccbcf25-9ca3-42a5-8336-21f34b2380e6_Creol.png',
			releaseDate: 'Feb 17, 2021',
			duration: 'N/A'
		},
		{
			number: 9,
			name: 'Vanessa Tess Odongui-Bonnard',
			description: 'Creative director/entrepreneur promoting Gabonese culture advancement',
			image: 'https://images.prismic.io/djfacemakerv2/12d8e64e-f3c6-4b30-b377-4e8ae8eca384_Vanessa+Tess+Odongui-Bonnard+vignette.png',
			releaseDate: 'Mar 5, 2021',
			duration: '34 min'
		},
		{
			number: 10,
			name: 'Dena Mwana',
			description:
				'Gospel artist with millions listening across Africa, faith journey since 2014',
			image: 'https://images.prismic.io/djfacemakerv2/db4103c5-440e-4f95-a0d7-ace7893e1015_Dena.png',
			releaseDate: 'Apr 5, 2021',
			duration: '33 min'
		},
		{
			number: 11,
			name: 'Lord Lombo',
			description: 'Gospel pastor/singer leaving medicine studies, honoring late mother',
			image: 'https://images.prismic.io/djfacemakerv2/6282f982-dd71-4ca3-94db-cdc2b1eeec92_lord+lombo.png',
			releaseDate: 'Apr 26, 2021',
			duration: '17 min'
		},
		{
			number: 12,
			name: 'Freddhy Koula',
			description: 'Journalist overcoming professional ban, became football club president',
			image: 'https://images.prismic.io/djfacemakerv2/423b342b-7d06-4daa-ab2d-4b5d3484572f_freddy.png',
			releaseDate: 'Jun 10, 2021',
			duration: '30 min'
		}
	] as Episode[],
	season1: [
		{
			number: 1,
			name: 'Olivia Mabounga',
			description:
				'French-Algerian-Congolese playwright addressing skin lightening phenomena',
			image: 'https://images.prismic.io/djfacemakerv2/0b122bd5-0cf8-427c-a2dd-64d59a2930bb_Olivia+Mabounga.png',
			releaseDate: 'Nov 13, 2019',
			duration: '17 min'
		},
		{
			number: 2,
			name: 'Axel Merryl',
			description: 'YouTuber aspiring filmmaker wanting to establish African film school',
			image: 'https://images.prismic.io/djfacemakerv2/363eb6d1-787b-4400-943e-1956d6ecfc0e_Axel+Merryl.png',
			releaseDate: 'Dec 3, 2019',
			duration: '21 min'
		},
		{
			number: 3,
			name: "Yann'Sine",
			description: 'Moroccan singer overcoming casting rejection, desert-rooted artist',
			image: 'https://images.prismic.io/djfacemakerv2/5d7bb00d-00c2-4d7d-849a-140f44940c6a_YannSine+Vignette.png',
			releaseDate: 'Feb 19, 2020',
			duration: '21 min'
		},
		{
			number: 4,
			name: 'Jupiter Davibe',
			description: 'Guinean "love story teller" launching debut album',
			image: 'https://images.prismic.io/djfacemakerv2/61a47a4b-ddf7-406f-8dbe-be1274f4682f_Jupiter+Davibe.png',
			releaseDate: 'Mar 19, 2020',
			duration: '19 min'
		},
		{
			number: 5,
			name: 'Keyla K',
			description: 'Female hip-hop reference in Guinea, following artistic role models',
			image: 'https://images.prismic.io/djfacemakerv2/d3f59ad7-4b44-4868-9b9d-e862c06beb1f_Keyla+K.png',
			releaseDate: 'Apr 7, 2020',
			duration: '14 min'
		},
		{
			number: 6,
			name: 'Lynnsha',
			description: '20+ year career spanning music, television, cooking, motherhood',
			image: 'https://images.prismic.io/djfacemakerv2/e74bf4e7-f9d5-4a7c-9796-a2acdd196ecd_LYNNSHA.png',
			releaseDate: 'Jun 8, 2020',
			duration: '30 min'
		},
		{
			number: 7,
			name: 'DJ Moh Green',
			description:
				'Urban music producer/entrepreneur reflecting on career and continental projects',
			image: 'https://images.prismic.io/djfacemakerv2/a2dc1cea-aff0-4d19-b5df-a29ac21931d8_DJ+MOH+GREEN.png',
			releaseDate: 'Jun 22, 2020',
			duration: 'N/A'
		},
		{
			number: 8,
			name: 'IDPizzle',
			description:
				'Congolese artist creating rumba drill genre, inspired by Jackson and Pop Smoke',
			image: 'https://images.prismic.io/djfacemakerv2/be47e95e-7826-4b78-bba1-640f2812bc3b_IDP.png',
			releaseDate: 'Jul 23, 2020',
			duration: '7 min'
		}
	] as Episode[]
};

// Create slices for the page
const slices: SliceType[] = [
	{
		name: 'hero',
		title: 'Simples Thérapies',
		overview:
			"Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée. DJ Face Maker va à la rencontre des personnalités qui animent la culture, les médias, la musique et l'entrepreneuriat en Afrique et dans sa diaspora au travers du podcast Simples Thérapies.",
		details: 'FMK Originals',
		imgSrc: 'https://images.prismic.io/djfacemakerv2/98cee906-6156-4bc7-84d6-1efa8428a959_Almok+cover.png',
		ctaLabel: 'Listen Now',
		ctaIcon: 'play',
		backgroundColor: '#1F2937'
	} as any,
	{
		name: 'carousel',
		title: 'Season 3',
		overview: 'Latest episodes featuring prominent African personalities',
		cards: episodes.season3.map((ep) => ({
			title: ep.name,
			subtitle: ep.releaseDate,
			overview: ep.description,
			imgSrc: ep.image,
			buttonLink: '#',
			overlayButton: true,
			duration: ep.duration
		}))
	} as any,
	{
		name: 'carousel',
		title: 'Season 2',
		overview: 'Conversations with diverse talents',
		cards: episodes.season2.map((ep) => ({
			title: ep.name,
			subtitle: ep.releaseDate,
			overview: ep.description,
			imgSrc: ep.image,
			buttonLink: '#',
			overlayButton: true,
			duration: ep.duration
		}))
	} as any,
	{
		name: 'carousel',
		title: 'Season 1',
		overview: 'Where it all began',
		cards: episodes.season1.map((ep) => ({
			title: ep.name,
			subtitle: ep.releaseDate,
			overview: ep.description,
			imgSrc: ep.image,
			buttonLink: '#',
			overlayButton: true,
			duration: ep.duration
		}))
	} as any
];

export const Default: Story = {
	args: {
		slices,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'Simples Thérapies', href: '/simples-therapies' },
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' }
		],
		logo: {
			title: 'DJ FaceMaker',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
			imgAlt: 'DJ FaceMaker Logo'
		},
		alternateColor: true,
		cta: {
			label: 'Ecoutez maintenant',
			url: '#',
			icon: 'play',
			href: '#'
		}
	}
};
