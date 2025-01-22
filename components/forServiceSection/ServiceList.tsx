import { FC } from 'react';
import ServiceCard from './ServiceCard';
import { ServiceListProps } from '@/types/servicesSectionTypes';
import Slider from '../Slider';

const ServiceList: FC<ServiceListProps> = ({ serviceCards }) => {
    return (
        <ul>
            <div className="xl:hidden">
                <Slider>
                    {serviceCards.map((card, index) => (
                        <ServiceCard
                            className="low-box-shadow rounded-[15px]"
                            key={card.id}
                            serviceCard={card}
                            index={index}
                        />
                    ))}
                </Slider>
            </div>

            {/* Cards without slider on screens xl and above */}
            <div className="hidden xl:flex flex-col low-box-shadow rounded-[15px]">
                {serviceCards.map((card, index) => (
                    <ServiceCard
                        key={card.id}
                        className={`${index % 2 === 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}
                        serviceCard={card}
                        index={index}
                    />
                ))}
            </div>
        </ul>
    );
};

export default ServiceList;
