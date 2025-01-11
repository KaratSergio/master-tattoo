import { FC } from 'react';
import ServiceCard from './ServiceCard';
import { ServicesSectionProps } from '@/types/servicesSectionTypes';
import Slider from '../Slider';

const ServiceList: FC<ServicesSectionProps> = ({ data }) => {
    return (
        <ul>
            <Slider>
                {data.serviceCard.map((card, index) => (
                    <ServiceCard key={card.id} card={card} index={index} />
                ))}
            </Slider>
        </ul>
    );
};

export default ServiceList;
