import { FC } from 'react';
import Image from 'next/image';
import { LinkBtn } from '../LinkBtn';
import { H2 } from '../typography/H2';
import { Markdown } from '../Markdown';
import { ServiceCardProps } from '@/types/servicesSectionTypes';

import { EllipseBlue } from '../icons/ellipse/serviceSection/EllipseBlue';
import { EllipseGreen } from '../icons/ellipse/serviceSection/EllipseGreen';
import { EllipseSky } from '../icons/ellipse/serviceSection/EllipseSky';

const ServiceCard: FC<ServiceCardProps> = ({ serviceCard, index }) => {
    const imageClasses = [
        'w-full',
        'h-auto',
        'object-cover',
        'mx-auto',
        index === 0
            ? 'max-w-[214px] max-h-[219px]'
            : index === 1
              ? 'max-w-[190px] max-h-[264px]'
              : index === 2
                ? 'max-w-[114px] max-h-[235px]'
                : 'max-w-[300px] max-h-[200px]',
    ].join(' ');

    // функція для вибору першого обзацу тексту
    const getFirstParagraph = (text: string) => {
        const paragraphs = text.split('\n');
        return paragraphs[0] || text;
    };

    // Вибір відповідного фону залежно від індексу
    const renderBackground = () => {
        switch (index) {
            case 0:
                return <EllipseBlue className="absolute top-6 left-[-20px] z-[-1] h-48" />;
            case 1:
                return <EllipseGreen className="absolute top-6 left-[-30px] z-[-1] h-48" />;
            case 2:
                return <EllipseSky className="absolute top-16 left-[-80px] z-[-1] h-48" />;
            default:
                return null;
        }
    };

    return (
        <li
            key={serviceCard.id}
            className="relative flex flex-col low-box-shadow rounded-[15px] w-full max-w-[333px] px-5 py-10"
        >
            {renderBackground()}

            <Image
                src={serviceCard.image.url}
                alt={serviceCard.image.alt}
                width={314}
                height={219}
                className={imageClasses}
            />

            <H2 variant="title-section" className="mt-12">
                {serviceCard.title}
            </H2>

            <div className="mt-5 text-15px leading-22px">
                {/* На мобільних пристроях рендерим лише перший абзац */}
                <div className="block sm:hidden">
                    <Markdown text={getFirstParagraph(serviceCard.text)} />
                </div>
                {/* На великих екранах рендеримо весь текст */}
                <div className="hidden sm:block">
                    <Markdown text={serviceCard.text} />
                </div>
            </div>

            <p className="mt-[30px] text-xl font-medium leading-7">{serviceCard.price}</p>
            <LinkBtn to="#" className="mt-[30px]">
                {serviceCard.button}
            </LinkBtn>
        </li>
    );
};

export default ServiceCard;
