import { FC } from 'react';
import Slider from '../Slider';
import Comment from './Comment';
import { ReviewsListProps } from '@/types/reviewsSectionTypes';

const ReviewsList: FC<ReviewsListProps> = ({ reviewsList }) => {
    return (
        <ul>
            <Slider>
                {reviewsList.map(comment => (
                    <Comment key={comment.id} {...comment} />
                ))}
            </Slider>
        </ul>
    );
};

export default ReviewsList;
