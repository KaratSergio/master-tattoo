import { FC } from 'react';
import Image from 'next/image';
import { GalleryCardProps } from '@/types/gallerySectionTypes';

const GalleryCard: FC<GalleryCardProps> = ({ picture, className }) => {
    return (
        <li className={`size-[279px] 2xl:size-[350px] ${className}`}>
            <Image
                src={picture.url}
                alt={picture.alt}
                width={350}
                height={350}
                quality={90}
                className="object-cover"
            />
        </li>
    );
};

export default GalleryCard;
