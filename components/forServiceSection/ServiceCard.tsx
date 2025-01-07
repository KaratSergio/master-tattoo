import { FC } from 'react';
import Image from 'next/image';
import { ServiceCardProps } from '@/types/servicesSectionTypes';

const ServiceCard: FC<ServiceCardProps> = ({ card, index }) => {
    const imageClasses = [
        'w-full',
        'h-auto',
        'object-cover',
        index === 0
            ? 'max-w-[314px] max-h-[219px]'
            : index === 1
              ? 'max-w-[290px] max-h-[364px]'
              : index === 2
                ? 'max-w-[114px] max-h-[235px]'
                : 'max-w-[300px] max-h-[200px]',
    ].join(' ');

    return (
        <li key={card.id}>
            <Image
                src={card.image.url}
                alt={card.image.alt}
                width={314}
                height={219}
                className={imageClasses}
            />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <p>{card.price}</p>
            <button>{card.button}</button>
        </li>
    );
};

export default ServiceCard;
