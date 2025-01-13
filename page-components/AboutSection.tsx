import { FC } from 'react';
import Image from 'next/image';
import { Markdown } from '@/components/Markdown';
import { AboutSectionProps } from '@/types/aboutSectionTypes';

import { Before } from '@/components/icons/Before';
import { After } from '@/components/icons/After';
import { Arrows } from '@/components/icons/arrows/Arrows';

const AboutSection: FC<AboutSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2 className="mt-[82px] text-25px font-bold leading-8">{data.title}</h2>
                <p className="mt-5 text-15px leading-22px">{data.text}</p>
                <div className="mt-[30px] mb-8 flex items-center justify-center">
                    <div className="relative">
                        <Image
                            src={data.image1.url}
                            alt={data.image1.alt}
                            width={179}
                            height={337}
                            quality={90}
                            sizes="337px"
                            className="object-cover"
                        />
                        <Before className="absolute top-4 left-0" />
                        <p className="text-lg text-white leading-[30px] absolute top-5 left-6 z-1">
                            {data.before}
                        </p>
                    </div>
                    <div className="ml-[2px] relative">
                        <Image
                            src={data.image2.url}
                            alt={data.image2.alt}
                            width={193}
                            height={337}
                            quality={90}
                            sizes="337px"
                            className="object-cover"
                        />
                        <Arrows className="absolute top-32 left-[-14px]" />
                        <After className="absolute bottom-4 right-0" />
                        <p className="text-lg text-white leading-[30px] absolute bottom-5 right-3 z-1">
                            {data.after}
                        </p>
                    </div>
                </div>
                <Markdown
                    className="mt-[15px] w-[310px] font-medium leading-25px"
                    text={data.list}
                />
            </div>
        </section>
    );
};

export default AboutSection;
