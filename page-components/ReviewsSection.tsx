import { FC } from 'react';
import { H2 } from '@/components/typography/H2';
import ReviewsList from '@/components/forReviewsSection/ReviewsList';
import { ReviewsSectionProps } from '@/types/reviewsSectionTypes';

const ReviewsSection: FC<ReviewsSectionProps> = ({ data }) => {
    return (
        <section id="reviews">
            <div className="container relative mt-[60px] xl:mt-[90px]">
                <H2
                    variant="title-section"
                    className="absolute top-[-6px] left-5 xl:left-[70px] 2xl:left-[135px]"
                >
                    {data.title}
                </H2>
                <ReviewsList reviewsList={data.reviewsList} />
            </div>
        </section>
    );
};

export default ReviewsSection;
