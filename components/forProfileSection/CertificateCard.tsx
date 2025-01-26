import { FC } from 'react';
import Image from 'next/image';
import { CertificateCardProps } from '@/types/profileSectionTypes';
import { H3 } from '../typography/H3';

const CertificateCard: FC<CertificateCardProps> = ({ text, image, className }) => {
    return (
        <li className={`${className}`}>
            <H3 className="mb-5">{text}</H3>
            <Image
                src={image.url}
                alt={image.alt}
                width={335}
                height={231}
                quality={90}
                sizes="(max-width: 768px) 100vw, 387px"
                className="object-cover"
            />
        </li>
    );
};

export default CertificateCard;
