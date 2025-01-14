import { FC } from 'react';
import ServiceCard from './ServiceCard';
import { ServiceListProps } from '@/types/servicesSectionTypes';
import Slider from '../Slider';

const ServiceList: FC<ServiceListProps> = ({ serviceCards }) => {
    return (
        <ul>
            <Slider>
                {serviceCards.map((card, index) => (
                    <ServiceCard key={card.id} serviceCard={card} index={index} />
                ))}
            </Slider>
        </ul>
    );
};

export default ServiceList;
