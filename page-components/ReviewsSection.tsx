import { FC } from 'react';
import { ReviewsSectionProps } from '@/types/reviewsSectionTypes';

const ReviewsSection: FC<ReviewsSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
                <ul>
                    {data.reviewsList.map(review => (
                        <li key={review.id}>
                            <h3>{review.title}</h3>
                            <p>{review.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ReviewsSection;
