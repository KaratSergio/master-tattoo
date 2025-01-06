import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavMenuProps } from '@/types/navMenuTypes';

const Header: FC<NavMenuProps> = ({ data }) => {
    return (
        <header className="container">
            <Link href="/">
                <Image
                    src={data.logo.url}
                    alt="logotype"
                    width={98}
                    height={58}
                    quality={90}
                    sizes="98px"
                    className="w-[98px] h-auto object-cover"
                />
            </Link>
            <nav>
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
