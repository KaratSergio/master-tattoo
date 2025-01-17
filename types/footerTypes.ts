interface Image {
    alt: string;
    url: string;
}

interface IconImage {
    alt: string;
    url: string;
}

interface FooterData {
    nameAuthor: string;
    button: string;
    phone: string;
    profession: string;
    text1: string;
    text2: string;
    text3: string;
    logo: Image;
    social: SocialLinkProps[];
}

export interface SocialLinkProps {
    id: string;
    url: string;
    iconImg: IconImage;
}

export type SocialLinkListProps = Pick<FooterData, 'social'> & { className?: string };

export interface FooterProps {
    data: FooterData;
}
