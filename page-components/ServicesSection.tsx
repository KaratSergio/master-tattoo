import { FC } from 'react';
import { H2 } from '@/components/typography/H2';
import ServiceList from '@/components/forServiceSection/ServiceList';
import { ServicesSectionProps } from '@/types/servicesSectionTypes';

const ServicesSection: FC<ServicesSectionProps> = ({ data }) => {
    return (
        <section id="services">
            <div className="container xl:px-[100px] 2xl:px-[190px] relative mt-[60px]">
                <H2 variant="title-section" className="absolute top-[-6px] left-5 xl:hidden">
                    {data.title}
                </H2>
                <ServiceList serviceCards={data.serviceCards} />
            </div>
        </section>
    );
};

export default ServicesSection;
