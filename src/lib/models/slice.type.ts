import type { CardType } from './card.type';
import type { ImageType } from './image.type';
import type { LogoType } from './logo.type';

export type CallToActionType = {
	name: 'call-to-action';
	overview: string;
	buttonBefore: boolean;
	buttons: Array<{
		label: string;
		url: string;
		backgroundColor: `#${string}`;
	}>;
};

export type CarouselType = {
	name?: 'carousel';
	title: string;
	category: string;
	overview: string;
	size?: 'sm' | 'md' | 'lg';
	color?: `#${string}`;
	cards?: CardType[];
};

export type HeroType = {
	name: 'hero';
	title: string;
	overview: string;
	details: string;
	imgSrc: ImageType;
	ctaLabel: string;
	ctaIcon: string;
	backgroundColor: `#${string}`;
};

export type TileType = {
	name: 'tiles';
	images: string[];
	logo: LogoType;
};

export type FeaturesType = {
	name: 'features';
	title: string;
	logo: LogoType;
};

export type SloganType = {
	name: 'slogan';
	cta: { url: string; label: string; color: string };
	backgroundColor: string;
	slogans: Array<{ title: string; subtitle: string }>;
};

export type TextAnimationType = {
	name: 'text-animation';
	labels: Array<{ title: string; color: string }>;
};

export type SliceType =
	| CallToActionType
	| CarouselType
	| FeaturesType
	| HeroType
	| TileType
	| SloganType
	| TextAnimationType;
