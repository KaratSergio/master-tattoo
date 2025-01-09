interface Image {
    alt: string;
    url: string;
}

interface ReviewsList {
    id: string;
    title: string;
    text: string;
    image: Image;
}

interface ReviewsSectionData {
    title: string;
    text: string;
    reviewsList: ReviewsList[];
}

export interface ReviewsSectionProps {
    data: ReviewsSectionData;
}
