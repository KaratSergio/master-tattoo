interface Image {
    alt: string;
    url: string;
}

interface SocialList {
    id: string;
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
    social: SocialList[];
}

export interface FooterProps {
    data: FooterData;
}
