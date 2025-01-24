import { FC } from 'react';
import Slider from '../Slider';
import GalleryCard from './GalleryCard';
import { GalleryListProps } from '@/types/gallerySectionTypes';

const GalleryList: FC<GalleryListProps> = ({ gallery }) => {
    return (
        <ul className="xl:grid xl:grid-cols-4">
            <Slider hideButtons className="pt-0 xl:hidden">
                {gallery.map(picture => (
                    <GalleryCard key={picture.id} picture={picture} />
                ))}
            </Slider>

            {gallery.map((picture, index) => (
                <GalleryCard
                    key={picture.id}
                    picture={picture}
                    className={`hidden xl:block xl:w-full xl:h-full ${
                        index % 4 === 0 ? 'column-1' : index % 4 === 2 ? 'column-3' : ''
                    }`}
                />
            ))}
        </ul>
    );
};

export default GalleryList;
