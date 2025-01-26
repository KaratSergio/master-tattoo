interface Image {
    alt: string;
    url: string;
}

interface ProfileSectionData {
    title: string;
    title1: string;
    text: string;
    button: string;
    image: Image;
    certificate: CertificateCardProps[];
}

export interface CertificateCardProps {
    id: string;
    text: string;
    image: Image;
    className?: string;
}

export type CertificateListProps = Pick<ProfileSectionData, 'certificate'>;

export interface ProfileSectionProps {
    data: ProfileSectionData;
}
