interface Image {
    alt: string;
    url: string;
}

interface ContactsSectionData {
    title: string;
    telephone: string;
    operating: string;
    address: string;
    email: string;
    social: string;
    image: Image;
}

export interface ContactsSectionProps {
    data: ContactsSectionData;
}
