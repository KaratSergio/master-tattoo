interface Image {
    alt: string;
    url: string;
}

interface CertificateList {
    id: string;
    text: string;
    image: Image;
}

interface ProfileSectionData {
    title: string;
    text: string;
    button: string;
    image: Image;
    certificate: CertificateList[];
}

export interface ProfileSectionProps {
    data: ProfileSectionData;
}
