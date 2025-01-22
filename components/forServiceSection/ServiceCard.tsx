import { FC } from 'react';
import Image from 'next/image';
import { LinkBtn } from '../LinkBtn';
import { H2 } from '../typography/H2';
import { Markdown } from '../Markdown';
import { ServiceCardProps } from '@/types/servicesSectionTypes';

import { EllipseBlue } from '../icons/ellipse/serviceSection/EllipseBlue';
import { EllipseGreen } from '../icons/ellipse/serviceSection/EllipseGreen';
import { EllipseSky } from '../icons/ellipse/serviceSection/EllipseSky';

const ServiceCard: FC<ServiceCardProps> = ({ serviceCard, index, className }) => {
    const imageClasses = [
        'w-full xl:mt-20',
        'h-auto',
        'object-cover',
        'mx-auto',
        index === 0
            ? 'max-w-[214px] xl:max-w-[314px] max-h-[219px]'
            : index === 1
              ? 'max-w-[190px] xl:max-w-[305px] max-h-[264px]'
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
                return (
                    <EllipseBlue className="absolute top-6 xl:top-24 right-2 xl:right-40 xl:size-80 z-[-1] h-48" />
                );
            case 1:
                return (
                    <EllipseGreen className="absolute top-6 xl:top-24 left-[-30px] xl:left-36 xl:size-80 z-[-1] h-48" />
                );
            case 2:
                return (
                    <EllipseSky className="absolute top-16 right-[-78px] xl:right-20 xl:size-80 z-[-1] h-48" />
                );
            default:
                return null;
        }
    };

    return (
        <li
            key={serviceCard.id}
            className={`relative flex flex-col xl:flex-row w-full max-w-[333px] xl:max-w-full px-5 xl:px-[60px] py-10 ${className}`}
        >
            {renderBackground()}

            <div className="w-[314px] xl:w-[460px] flex-shrink-0">
                <Image
                    src={serviceCard.image.url}
                    alt={serviceCard.image.alt}
                    width={314}
                    height={219}
                    className={imageClasses}
                />
            </div>

            <div>
                <H2 variant="title-section" className="mt-12 xl:mt-0">
                    {serviceCard.title}
                </H2>
                <div className="mt-5 text-15px leading-22px">
                    {/* На мобільних пристроях рендерим лише перший абзац */}
                    <div className="block sm:hidden">
                        <Markdown text={getFirstParagraph(serviceCard.text)} />
                    </div>
                    {/* На великих екранах рендеримо весь текст */}
                    <div className="hidden sm:block">
                        <Markdown className="mt-6" text={serviceCard.text} />
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row xl:justify-between">
                    <p className="mt-[30px] text-xl font-medium leading-7">{serviceCard.price}</p>
                    <LinkBtn to="#" className="mt-[30px] pr-12 xl:max-w-fit xl:px-16">
                        {serviceCard.button}
                    </LinkBtn>
                </div>
            </div>
        </li>
    );
};

export default ServiceCard;
