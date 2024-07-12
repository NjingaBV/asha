export type FeatureType = {
	order: number;
	title: string;
	subtitle: string;
	description: string;
	color: string;
	details: {
		title: string;
		description: string;
		cover: { url: string; alt: string; text: string };
	};
};
