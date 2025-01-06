import { Locale } from '@/i18n.config';

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
    pages: NavMenu[];
}

export interface NavMenuProps {
    data: NavMenuData;
    lang: Locale;
}

export interface BurgerMenuProps extends NavMenuProps {
    onLangChange: (lang: Locale) => void;
}
