import { FC } from 'react';
import ServiceCard from './ServiceCard';
import { ServicesSectionProps } from '@/types/servicesSectionTypes';

const ServiceList: FC<ServicesSectionProps> = ({ data }) => {
    return (
        <ul>
            {data.serviceCard.map((card, index) => (
                <ServiceCard key={card.id} card={card} index={index} />
            ))}
        </ul>
    );
};

export default ServiceList;
