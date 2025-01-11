import { FC } from 'react';
import ServiceList from '@/components/forServiceSection/ServiceList';
import { ServicesSectionProps } from '@/types/servicesSectionTypes';
import { H2 } from '@/components/typography/H2';

const ServicesSection: FC<ServicesSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container relative mt-[60px]">
                <H2 variant="title-section" className="absolute top-[-6px] left-5">
                    {data.title}
                </H2>
                <ServiceList data={data} />
            </div>
        </section>
    );
};

export default ServicesSection;
