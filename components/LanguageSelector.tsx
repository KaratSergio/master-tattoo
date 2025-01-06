'use client';

import { FC, useState } from 'react';
import { Locale } from '@/i18n.config';
import Link from 'next/link';

export interface LanguageSelectorProps {
    lang: Locale;
    onChange: (selectedLang: Locale) => void;
    className?: string;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ lang, onChange, className }) => {
    const languages = [
        { code: 'en', name: 'En' },
        { code: 'uk', name: 'Ua' },
        { code: 'pl', name: 'Pl' },
    ] as const;

    const [isOpen, setIsOpen] = useState(false);

    const selectedLanguage = languages.find(language => language.code === lang)?.name || 'En';

    return (
        <div className={`relative inline-block w-[46px] ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-lg font-bold w-full py-2 border-x border-x-blue hover:border-x-electric text-center"
            >
                {selectedLanguage}
            </button>

            {isOpen && (
                <ul className="absolute left-0 w-full bg-white text-center text-lg font-bold z-40">
                    {languages.map(({ code, name }) => (
                        <li
                            key={code}
                            onClick={() => {
                                onChange(code);
                                setIsOpen(false);
                            }}
                            className="py-2 cursor-pointer border-x border-x-blue hover:border-x-electric"
                        >
                            <Link href={'/' + code}>{name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelector;
