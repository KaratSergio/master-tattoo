import Link from 'next/link';
import Image from 'next/image';
import { Burger } from './icons/header/Burger';
import { Close } from './icons/Close';
import { FC, useEffect, useState } from 'react';
import { BurgerMenuProps } from '@/types/navMenuTypes';
import LanguageSelector from '@/components/LanguageSelector';

import SocialLinkList from './forFooter/SocialLinkList';

export const BurgerMenu: FC<BurgerMenuProps> = ({ data, lang, onLangChange, social }) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log('nj brjyrb', social);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    return (
        <div className="xl:hidden">
            <button onClick={toggleMenu} className="leading-[0.2]" aria-label="Toggle menu">
                <Burger className="h-8 w-8" />
                <span className="text-[10px]">menu</span>
            </button>
            {isOpen && (
                <div
                    className="absolute inset-0 z-50 w-[100vw] h-[100vh] top-0 right-0 bg-black bg-gray_opacity flex flex-col items-center justify-center transition-transform duration-300 ease-in-out"
                    onClick={closeMenu}
                    style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
                >
                    <div className="absolute flex gap-3 top-8 left-5">
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
                    <button
                        className="absolute top-8 right-5 md:right-ing-[0.2]"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        <Close className="h-8 w-8 " />
                    </button>

                    <div className="flex flex-col items-center pt-[80px] bg-white w-[100%] h-[100vh] px-5 md:px-10">
                        <LanguageSelector
                            className="absolute top-[-50px] left-20"
                            lang={lang}
                            onChange={onLangChange}
                        />
                        <nav className="pt-6 w-full">
                            <ul className="flex flex-col text-center italic gap-4">
                                {data.pages.map(page => (
                                    <li key={page.id} className="py-2 px-4 hover-nav">
                                        <Link
                                            href={page.url}
                                            className="font-semibold hover-nav"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {page.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* SOCIAL MEDIA */}
                        <p className="mt-10">+38(073)233-23-23</p>
                        <SocialLinkList social={social} className="bg-black p-2 rounded-2xl" />
                    </div>
                </div>
            )}
        </div>
    );
};
