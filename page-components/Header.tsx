'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavMenuProps } from '@/types/navMenuTypes';
import { BurgerMenu } from '@/components/BurgerMenu';
import { Locale } from '@/i18n.config';

const Header: FC<NavMenuProps> = ({ data, lang: initialLang, social }) => {
    const [lang, setLang] = useState<Locale>(initialLang);

    const handleLanguageChange = (selectedLang: Locale) => {
        setLang(selectedLang);
    };

    return (
        <header className="container pt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Link href="/">
                    <Image
                        src={data.logo.url}
                        alt="logotype"
                        width={98}
                        height={58}
                        quality={90}
                        sizes="98px"
                        className="w-[65px] h-auto object-cover"
                    />
                </Link>
                <strong className="w-24 text-15px font-medium leading-5 text-dark_a">
                    {data.authorName}
                </strong>
            </div>

            <BurgerMenu
                data={data}
                lang={lang}
                social={social}
                onLangChange={handleLanguageChange}
            />

            <nav className="hidden">
                <ul className="flex gap-6">
                    {data.pages.map(page => (
                        <li key={page.id} className="hover-nav p-2">
                            <Link className="hover-nav" href={`/${page.url}`}>
                                {page.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
