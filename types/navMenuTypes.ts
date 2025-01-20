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

interface HeaderData {
    button1: string;
    button2: string;
    profession: string;
    phone: string;
}

interface HeaderProps {
    headerData: HeaderData;
}

type PartialHeaderProps = Partial<HeaderProps>;

export interface NavMenuData {
    logo: Logotype;
    authorName: string;
    pages: NavMenu[];
}

export interface NavMenuProps extends PartialHeaderProps {
    navData: NavMenuData;
    lang: Locale;
    social: SocialLinkProps[];
}

export interface BurgerMenuProps extends NavMenuProps {
    onLangChange: (lang: Locale) => void;
}
