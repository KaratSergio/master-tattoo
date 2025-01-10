interface Image {
    alt: string;
    url: string;
    width: number;
    height: number;
}

interface ServiceCard {
    id: string;
    price: string;
    text: string;
    title: string;
    image: Image;
    button: string;
}

interface ServicesSectionData {
    title: string;
    serviceCard: ServiceCard[];
}

export interface ServiceCardProps {
    card: ServiceCard;
    index: number;
}

export interface ServicesSectionProps {
    data: ServicesSectionData;
}
