import { FC } from 'react';
import { ReviewsSectionProps } from '@/types/reviewsSectionTypes';

const ReviewsSection: FC<ReviewsSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
            </div>
        </section>
    );
};

export default ReviewsSection;
