import { FC } from 'react';
import { PromotionSectionProps } from '@/types/promotionSectionTypes';

const PromotionSection: FC<PromotionSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
            </div>
        </section>
    );
};

export default PromotionSection;
