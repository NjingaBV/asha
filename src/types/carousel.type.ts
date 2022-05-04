import type { CardType } from "./card.type";

export type CarouselType = {
    title: string;
	category: string;
	overview: string;
	color: `#${string}`;
	cards: Array<CardType>;
}