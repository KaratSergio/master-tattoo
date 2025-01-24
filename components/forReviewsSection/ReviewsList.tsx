'use client';

import { FC, useEffect, useState } from 'react';
import Slider from '../Slider';
import Comment from './Comment';
import { ReviewsListProps } from '@/types/reviewsSectionTypes';

const ReviewsList: FC<ReviewsListProps> = ({ reviewsList }) => {
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(window.innerWidth >= 1440 ? 2 : 1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ul>
            <Slider slidesToShow={slidesToShow} className="xl:pt-24">
                {reviewsList.map(comment => (
                    <Comment key={comment.id} {...comment} />
                ))}
            </Slider>
        </ul>
    );
};

export default ReviewsList;
