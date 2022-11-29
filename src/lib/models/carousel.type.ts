import type { CardType } from "./card.type";

export type CarouselType = {
	name: 'carousel';
    title?: string;
	category?: string;
	overview?: string;
	color?: `#${string}`;
	cards?: CardType[];
}