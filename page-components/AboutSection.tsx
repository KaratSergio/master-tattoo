import { FC } from 'react';
import Image from 'next/image';
import { H2 } from '@/components/typography/H2';
import { Markdown } from '@/components/Markdown';
import { AboutSectionProps } from '@/types/aboutSectionTypes';

import { Before } from '@/components/icons/Before';
import { After } from '@/components/icons/After';
import { Arrows } from '@/components/icons/arrows/Arrows';

const AboutSection: FC<AboutSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container about-section-grid">
                {/* A */}
                <div className="block-a">
                    <H2 variant="title-section">{data.title}</H2>
                    <p className="mt-5 text-15px 2xl:text-base leading-22px">{data.text}</p>
                </div>
                {/* B */}
                <div className="block-b my-8 xl:my-0 flex items-center justify-center">
                    <div className="relative w-[179px] xl:w-[260px] 2xl:w-[328px]">
                        <Image
                            src={data.image1.url}
                            alt={data.image1.alt}
                            width={328}
                            height={615}
                            quality={90}
                            className="object-cover"
                        />
                        <Before className="absolute top-4 left-0 xl:w-[90px] xl:h-[50px]" />
                        <p className="text-lg xl:text-xl text-white leading-[30px] absolute top-5 xl:top-7 left-6 z-1">
                            {data.before}
                        </p>
                    </div>
                    <div className="ml-[2px] w-[193px] relative xl:w-[279px] 2xl:w-[352px]">
                        <Image
                            src={data.image2.url}
                            alt={data.image2.alt}
                            width={352}
                            height={615}
                            quality={90}
                            className="object-cover"
                        />
                        <Arrows className="absolute top-32 xl:top-[216px] 2xl:top-[286px] left-[-14px] xl:left-[-24px] xl:size-[46px]" />
                        <After className="absolute bottom-4 right-0 xl:w-[90px] xl:h-[50px]" />
                        <p className="text-lg xl:text-xl text-white leading-[30px] absolute bottom-5 xl:bottom-7 right-3 z-1">
                            {data.after}
                        </p>
                    </div>
                </div>
                {/* C */}
                <div className="block-c xl:mt-[60px] 2xl:mt-[10px]">
                    <Markdown
                        className="mt-[15px] xl:mt-6 w-[310px] xl:w-full 2xl:text-lg font-medium leading-25px"
                        text={data.list}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
