export interface IImage {
    title: string,
    url: string[]
}

export interface ISlide{
    image: IImage;
    imageIndex: number;
    index: number;
}