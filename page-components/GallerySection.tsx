import { FC } from 'react';
import Link from 'next/link';
import { ArrowLink } from '@/components/icons/arrows/ArrowLink';
import { H2 } from '@/components/typography/H2';
import { GallerySectionProps } from '@/types/gallerySectionTypes';
import GalleryList from '@/components/forGallerySection/GalleryList';

const GallerySection: FC<GallerySectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container mt-4">
                <H2 variant="title-section">{data.title}</H2>
                <GalleryList gallery={data.gallery} />
                <Link
                    href="#"
                    className="flex items-center font-medium text-lg text-deep_blue leading-[30px] lowercase"
                >
                    {data.text}
                    <ArrowLink className="ml-5" />
                </Link>
            </div>
        </section>
    );
};

export default GallerySection;
