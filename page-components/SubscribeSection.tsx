import { FC } from 'react';
import Image from 'next/image';
import { LinkBtn } from '@/components/LinkBtn';
import { SubscribeSectionProps } from '@/types/subscribeSectionTypes';

const SubscribeSection: FC<SubscribeSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <Image
                    src={data.image.url}
                    alt={data.image.alt}
                    width={387}
                    height={574}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 387px"
                    className="object-cover"
                />
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                <LinkBtn to="#">{data.button1}</LinkBtn>
                <LinkBtn to="#">{data.button2}</LinkBtn>
            </div>
        </section>
    );
};

export default SubscribeSection;
