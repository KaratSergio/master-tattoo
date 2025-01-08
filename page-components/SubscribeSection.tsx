import { FC } from 'react';
import { SubscribeSectionProps } from '@/types/subscribeSectionTypes';

const SubscribeSection: FC<SubscribeSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
            </div>
        </section>
    );
};

export default SubscribeSection;
