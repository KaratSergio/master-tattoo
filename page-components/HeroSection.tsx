import { FC } from 'react';
import { HeroSectionProps } from '@/types/heroSectionTypes';

const HeroSection: FC<HeroSectionProps> = ({ data }) => {
    return (
        <section>
            <div>
                <h1>{data.title}</h1>
                <p>{data.text}</p>
            </div>
        </section>
    );
};

export default HeroSection;
