interface Image {
    alt: string;
    url: string;
}

interface SubscribeSectionData {
    title: string;
    text: string;
    button1: string;
    button2: string;
    image: Image;
}

export interface SubscribeSectionProps {
    data: SubscribeSectionData;
}
