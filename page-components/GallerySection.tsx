import { FC } from 'react';
import Link from 'next/link';
import { ArrowLink } from '@/components/icons/arrows/ArrowLink';
import { H2 } from '@/components/typography/H2';
import { GallerySectionProps } from '@/types/gallerySectionTypes';
import GalleryList from '@/components/forGallerySection/GalleryList';

const GallerySection: FC<GallerySectionProps> = ({ data }) => {
    return (
        <section id="portfolio">
            <div className="container relative mt-4 xl:relative xl:mt-[60px]">
                <H2
                    variant="title-section"
                    className="absolute xl:relative top-[-4px] xl:top-0 left-4 xl:left-0"
                >
                    {data.title}
                </H2>
                <GalleryList gallery={data.gallery} />
                <Link
                    href="#"
                    className="xl:absolute top-2 right-20 2xl:right-60
                    flex items-center font-medium text-lg text-deep_blue leading-[30px] lowercase"
                >
                    {data.text}
                    <ArrowLink className="ml-5" />
                </Link>
            </div>
        </section>
    );
};

export default GallerySection;
