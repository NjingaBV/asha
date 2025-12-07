import type { AppleColor, ColorType } from './color.type';

export interface Action {
	label: string;
	href?: string;
	onClick?: () => void;
}

export interface Product {
	title: string;
	subtitle?: string;
	description: string;
	colors?: AppleColor[];
	colorType?: ColorType;
	primaryAction?: Action;
	secondaryAction?: Action;
	image?: string;
	imageAlt?: string;
	badge?: string;
}

export interface Benefit {
	icon?: string;
	title: string;
	description: string;
	link?: Action;
}
