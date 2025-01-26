import { FC } from 'react';
import Image from 'next/image';
import { P } from '@/components/typography/P';
import { H2 } from '@/components/typography/H2';
import { LinkBtn } from '@/components/LinkBtn';
import { SubscribeSectionProps } from '@/types/subscribeSectionTypes';

const SubscribeSection: FC<SubscribeSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container xl:flex xl:px-[100px] 2xl:px-[300px]">
                <Image
                    src={data.image.url}
                    alt={data.image.alt}
                    width={387}
                    height={574}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 387px"
                    className="object-cover w-full h-full xl:w-[906px]"
                />
                <div className="xl:pt-[160px] 2xl:pt-[110px]">
                    <div className="flex relative">
                        <H2 variant="title-section" className="text-lg font-bold mb-[30px]">
                            {data.title}
                        </H2>
                        <Image
                            src={data.imageIcon.url}
                            alt={data.imageIcon.alt}
                            width={30}
                            height={30}
                            quality={90}
                            className="hidden xl:block size-6 xl:size-8 2xl:size-10 absolute xl:right-20 2xl:right-5 xl:top-[45px] 2xl:top-[68px]"
                        />
                    </div>
                    <P className="xl:w-[620px]">{data.text}</P>
                    <div className="flex flex-col xl:flex-row gap-[31px] mt-10">
                        <LinkBtn to="#" className="xl:max-w-fit xl:px-10">
                            {data.button1}
                        </LinkBtn>
                        <LinkBtn to="#" className="xl:max-w-fit xl:px-10">
                            {data.button2}
                        </LinkBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
