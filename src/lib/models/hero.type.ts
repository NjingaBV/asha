import type { ImageType } from "./image.type";

export type HeroType = {
	name: 'hero';
    title: string;
	overview: string;
	details: string;
	imgSrc: ImageType;
	ctaLabel: string;
	ctaIcon: string;
	backgroundColor: `#${string}`;
}