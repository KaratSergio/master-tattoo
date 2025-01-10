import { FC } from 'react';
import ServiceList from '@/components/forServiceSection/ServiceList';
import { ServicesSectionProps } from '@/types/servicesSectionTypes';

const ServicesSection: FC<ServicesSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
                <ServiceList data={data} />
            </div>
        </section>
    );
};

export default ServicesSection;
