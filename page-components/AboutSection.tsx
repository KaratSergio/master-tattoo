import { FC } from 'react';
import Image from 'next/image';
import { Markdown } from '@/components/Markdown';
import { AboutSectionProps } from '@/types/aboutSectionTypes';

const AboutSection: FC<AboutSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2 className="mt-[82px] text-25px font-bold leading-8">{data.title}</h2>
                <p className="mt-5 text-15px leading-22px">{data.text}</p>
                <div className="mt-[30px] mb-8 flex items-center justify-center">
                    <div className="w-full max-w-[179px]">
                        <Image
                            src={data.image1.url}
                            alt={data.image1.alt}
                            width={179}
                            height={337}
                            quality={90}
                            sizes="337px"
                            className="h-auto object-cover"
                        />
                    </div>
                    <div className="w-full max-w-[193px]">
                        <Image
                            src={data.image2.url}
                            alt={data.image2.alt}
                            width={193}
                            height={337}
                            quality={90}
                            sizes="337px"
                            className="h-auto object-cover"
                        />
                    </div>
                </div>
                <Markdown className="mt-[15px]" text={data.list} />
            </div>
        </section>
    );
};

export default AboutSection;
