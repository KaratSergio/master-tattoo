'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavMenuProps } from '@/types/navMenuTypes';
import { BurgerMenu } from '@/components/BurgerMenu';
import { Locale } from '@/i18n.config';
import { Button } from '@/components/Button';

const Header: FC<NavMenuProps> = ({ headerData, navData, lang: initialLang, social }) => {
    const [lang, setLang] = useState<Locale>(initialLang);

    const handleLanguageChange = (selectedLang: Locale) => {
        setLang(selectedLang);
    };

    return (
        <header className="z-50">
            <div className="container pt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image
                            src={navData.logo.url}
                            alt="logotype"
                            width={98}
                            height={58}
                            quality={90}
                            sizes="98px"
                            className="w-[65px] xl:w-24 h-auto object-cover"
                        />
                    </Link>
                    <div>
                        <strong className="w-24 xl:w-full text-15px font-medium leading-5 text-dark_a">
                            {navData.authorName}
                        </strong>
                        <p className="hidden xl:block text-[12px] font-[300px]">
                            {headerData.profession}
                        </p>
                    </div>
                </div>

                <BurgerMenu
                    navData={navData}
                    lang={lang}
                    social={social}
                    onLangChange={handleLanguageChange}
                />

                <nav className="hidden xl:flex">
                    <ul className="flex gap-4 ml-[46px]">
                        {navData.pages.map(page => (
                            <li key={page.id} className="hover-nav font-[300px] leading-[18px]">
                                <Link className="hover-nav" href={`/${page.url}`}>
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden xl:flex items-center w-full max-w-[430px] 2xl:max-w-[510px] gap-8">
                    <div className="text-end w-[230px]">
                        <p className="font-bold text-[20px]">{headerData.phone}</p>
                        <button className="text-15 text-deep_blue">{headerData.button1}</button>
                    </div>
                    <Button
                        popupType="contact"
                        iconEnabled={false}
                        className="max-w-[200px] 2xl:max-w-[280px]"
                    >
                        {headerData.button2}
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
