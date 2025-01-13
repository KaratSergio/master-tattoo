import { FC } from 'react';
import Image from 'next/image';
import { LinkBtn } from '../LinkBtn';
import { H2 } from '../typography/H2';
import { Markdown } from '../Markdown';
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

    // функція для вибору першого обзацу тексту
    const getFirstParagraph = (text: string) => {
        const paragraphs = text.split('\n');
        return paragraphs[0] || text;
    };

    return (
        <li
            key={card.id}
            className="flex flex-col low-box-shadow rounded-[15px] w-full max-w-[333px] px-5 py-10"
        >
            <Image
                src={card.image.url}
                alt={card.image.alt}
                width={314}
                height={219}
                className={imageClasses}
            />
            <H2 variant="title-section" className="mt-[30px]">
                {card.title}
            </H2>

            <div className="mt-5 text-15px leading-22px">
                {/* На мобільних пристроях рендерим лише перший абзац */}
                <div className="block sm:hidden">
                    <Markdown text={getFirstParagraph(card.text)} />
                </div>
                {/* На великих екранах рендерімо весь текст */}
                <div className="hidden sm:block">
                    <Markdown text={card.text} />
                </div>
            </div>

            <p className="mt-[30px] text-xl font-medium leading-7">{card.price}</p>
            <LinkBtn to="#" className="mt-[30px]">
                {card.button}
            </LinkBtn>
        </li>
    );
};

export default ServiceCard;
