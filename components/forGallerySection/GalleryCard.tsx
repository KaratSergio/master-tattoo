import { FC } from 'react';
import Image from 'next/image';
import { GalleryCardProps } from '@/types/gallerySectionTypes';

const GalleryCard: FC<GalleryCardProps> = ({ picture }) => {
    return (
        <li key={picture.id}>
            <Image
                src={picture.url}
                alt={picture.alt}
                width={279}
                height={279}
                quality={90}
                className="object-cover"
            />
        </li>
    );
};

export default GalleryCard;
