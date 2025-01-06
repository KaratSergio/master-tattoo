interface Image {
    alt: string;
    url: string;
}

interface Advantage {
    id: string;
    text: string;
    image: Image;
}

export interface HeroSectionData {
    text: string;
    title: string;
    heroImage: Image;
    button: string;
    advantages: Advantage[];
}

export interface HeroSectionProps {
    data: HeroSectionData;
}
