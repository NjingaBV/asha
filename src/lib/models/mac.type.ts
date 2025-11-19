export type MacCTA = {
	label: string;
	href?: string;
	onClick?: () => void;
};

export type MacColorOption = {
	name: string;
	swatch: string;
};

export type MacSpec = {
	label: string;
	value: string;
	emphasize?: boolean;
};

export type MacProduct = {
	slug: string;
	name: string;
	tagline: string;
	description?: string;
	startingPrice?: string;
	badge?: string;
	heroImage?: string;
	heroAlt?: string;
	background?: string;
	textOnDark?: boolean;
	chip?: string;
	display?: string;
	battery?: string;
	colors?: MacColorOption[];
	specs?: MacSpec[];
	highlights?: string[];
	ctas?: {
		primary?: MacCTA;
		secondary?: MacCTA;
	};
};
