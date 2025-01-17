import { Locale } from '@/i18n.config';
import { SocialLinkProps } from './footerTypes';

type Logotype = {
    alt: string;
    url: string;
};

interface NavMenu {
    id: string;
    title: string;
    url: string;
}

export interface NavMenuData {
    logo: Logotype;
    authorName: string;
    pages: NavMenu[];
}

export interface NavMenuProps {
    data: NavMenuData;
    lang: Locale;
    social: SocialLinkProps[];
}

export interface BurgerMenuProps extends NavMenuProps {
    onLangChange: (lang: Locale) => void;
}
