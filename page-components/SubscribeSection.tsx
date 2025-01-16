import { FC } from 'react';
import Image from 'next/image';
import { P } from '@/components/typography/P';
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
                    className="object-cover w-full h-full"
                />
                <h2 className="text-lg font-bold mb-[30px]">{data.title}</h2>
                <P>{data.text}</P>
                <div className="flex flex-col gap-[31px] mt-10">
                    <LinkBtn className="pl-4" to="#">
                        {data.button1}
                    </LinkBtn>
                    <LinkBtn className="pl-4" to="#">
                        {data.button2}
                    </LinkBtn>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
