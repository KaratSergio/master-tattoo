'use client';

import Link from 'next/link';
import { Burger } from './icons/Burger';
import { Close } from './icons/Close';
import { FC, useEffect, useState } from 'react';
import { BurgerMenuProps } from '@/types/navMenuTypes';
import LanguageSelector from '@/components/LanguageSelector';

export const BurgerMenu: FC<BurgerMenuProps> = ({ data, lang, onLangChange }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                    className="absolute inset-0 z-50 w-[100vw] h-[100vh] top-0 right-0 bg-black bg-gray_opacity flex flex-col items-end justify-end transition-transform duration-300 ease-in-out"
                    onClick={closeMenu}
                    style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
                >
                    <button
                        className="absolute top-1 right-9 md:right-14 leading-[0.2]"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        <Close className="h-8 w-8 " />
                        <span className="text-[10px]">close</span>
                    </button>

                    <div className="flex flex-col items-end pt-[80px] bg-white w-1/2 h-[100vh] px-5 md:px-10">
                        <LanguageSelector className="mr-4" lang={lang} onChange={onLangChange} />

                        <nav className="pt-6 w-full">
                            <ul className="flex flex-col text-end italic gap-4">
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
                    </div>
                </div>
            )}
        </div>
    );
};
