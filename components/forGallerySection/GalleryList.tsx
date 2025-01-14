import { FC } from 'react';
import Slider from '../Slider';
import GalleryCard from './GalleryCard';
import { GalleryListProps } from '@/types/gallerySectionTypes';

const GalleryList: FC<GalleryListProps> = ({ gallery }) => {
    return (
        <ul>
            <Slider hideButtons className="pt-0">
                {gallery.map(picture => (
                    <GalleryCard key={picture.id} picture={picture} />
                ))}
            </Slider>
        </ul>
    );
};

export default GalleryList;
