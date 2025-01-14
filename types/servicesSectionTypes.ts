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
    serviceCards: ServiceCard[];
}

export interface ServiceCardProps {
    serviceCard: ServiceCard;
    index: number;
}
export interface ServiceListProps {
    serviceCards: ServiceCard[];
}
export interface ServicesSectionProps {
    data: ServicesSectionData;
}
