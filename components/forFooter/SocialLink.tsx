import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SocialLinkProps } from '@/types/footerTypes';

const SocialLink: FC<SocialLinkProps> = ({ url, iconImg }) => {
    return (
        <li>
            <Link href={url}>
                <Image src={iconImg.url} alt={iconImg.alt} width={24} height={24} />
            </Link>
        </li>
    );
};

export default SocialLink;
