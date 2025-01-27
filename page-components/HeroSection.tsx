import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { HeroSectionProps } from '@/types/heroSectionTypes';

import { Ellipse } from '@/components/icons/ellipse/Ellipse';

const HeroSection: FC<HeroSectionProps> = ({ data }) => {
    return (
        <section className="pb-[110px]">
            <div className="hero-rectangle-bg container xl:px-[135px] w-full min-w-[320px] flex flex-col xl:flex-row">
                <div className="xl:w-[745px]">
                    <h1 className="mt-[61px] w-[300px] xl:w-full 2xl:w-[600px] text-[28px] xl:text-[40px] 2xl:text-[50px] font-bold leading-8 xl:leading-[50px] 2xl:leading-[60px] txt-shadow">
                        {data.title}
                    </h1>

                    <ul className="mt-[50px] xl:my-[30px] xl:max-w-[500px] flex flex-col xl:flex-row xl:flex-wrap gap-6">
                        {data.advantages.map(advantage => (
                            <li
                                className="flex gap-5 items-center w-full max-w-[200px] 2xl:text-lg  leading-6"
                                key={advantage.id}
                            >
                                <Image
                                    src={advantage.image.url}
                                    alt={advantage.image.alt}
                                    width={43}
                                    height={58}
                                    quality={90}
                                    sizes="43px"
                                    className="h-auto object-cover"
                                />
                                {advantage.text}
                            </li>
                        ))}
                    </ul>

                    <p className="hidden xl:block leading-5 text-[15px] 2xl:text-base 2xl:leading-6">
                        {data.text}
                    </p>
                    <Button className="mt-[50px] xl:mt-[30px] 2xl:mt-[60px] xl:pl-[42px] max-w-fit">
                        {data.button}
                    </Button>
                </div>

                <div className="hidden relative xl:block w-full h-auto max-w-[420px] xl:mt-[62px] xl:max-w-[470px] xl:h-[560px] 2xl:h-auto 2xl:max-w-[746px] 2xl:mt-[68px]">
                    <Image
                        src={data.heroImage.url}
                        alt={data.heroImage.alt}
                        width={846}
                        height={856}
                        quality={100}
                        className="w-full h-full object-cover clip-angled"
                    />
                    <Ellipse className="absolute top-24 right-[-60px] z-[-20] text-deep_blue size-[144px] 2xl:size-[184px]" />
                    <Ellipse className="absolute bottom-[114px] 2xl:bottom-[198px] 2xl:z-[-20] right-5 2xl:right-14 text-deep_blue size-[16px] 2xl:size-[24px]" />
                    <Ellipse className="absolute bottom-[200px] 2xl:bottom-[320px] left-14 2xl:left-[150px] z-[-20] text-deep_blue size-[70px] 2xl:size-[114px]" />
                    <Ellipse className="absolute bottom-12 2xl:bottom-[110px] right-5 2xl:right-20 z-[-20] text-deep_blue size-[40px] 2xl:size-[64px]" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
