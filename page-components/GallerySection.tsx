import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GallerySectionProps } from '@/types/gallerySectionTypes';

const GallerySection: FC<GallerySectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
                <ul>
                    {data.gallery.map(picture => (
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
                    ))}
                </ul>
                <Link href="#">{data.text}</Link>
            </div>
        </section>
    );
};

export default GallerySection;
