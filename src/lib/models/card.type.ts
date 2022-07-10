import type { ImageType } from "./image.type";

export type CardType = {
    title: string;
    subtitle: string;
    overview: string;
    imgSrc: ImageType;
    buttonName: string;
    buttonLink: string;
    backgroundColor: `#${string}`;
    mixColor: boolean;
}