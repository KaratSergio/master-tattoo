import { FC } from 'react';
import ServiceList from '@/components/forServiceSection/ServiceList';
import { ServicesSectionProps } from '@/types/servicesSectionTypes';

const ServicesSection: FC<ServicesSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <ServiceList data={data} />
            </div>
        </section>
    );
};

export default ServicesSection;
