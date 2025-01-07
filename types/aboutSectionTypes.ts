interface Image {
    alt: string;
    url: string;
}

interface AboutSectionData {
    text: string;
    title: string;
    list: string;
    image1: Image;
    image2: Image;
}

export interface AboutSectionProps {
    data: AboutSectionData;
}
