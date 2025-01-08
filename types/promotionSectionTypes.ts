interface Image {
    alt: string;
    url: string;
}

interface PromotionSectionData {
    title: string;
    text: string;
    tex1: string;
    button: string;
    buttonError: string;
    image: Image;
    agreement: string;
    name: string;
    phone: string;
}

export interface PromotionSectionProps {
    data: PromotionSectionData;
}
