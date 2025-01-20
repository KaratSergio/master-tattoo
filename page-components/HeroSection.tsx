import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { HeroSectionProps } from '@/types/heroSectionTypes';

const HeroSection: FC<HeroSectionProps> = ({ data }) => {
    return (
        <section className="">
            <div className="hero-bg container xl:px-[135px] w-full min-w-[375px] flex flex-col xl:flex-row">
                <div className="xl:w-[745px]">
                    <h1 className="mt-[61px] w-[300px] xl:w-full text-[28px] xl:text-[40px] font-bold leading-8 xl:leading-[50px] txt-shadow">
                        {data.title}
                    </h1>

                    <ul className="mt-[50px] xl:my-[30px] xl:max-w-[500px] flex flex-col xl:flex-row xl:flex-wrap gap-6">
                        {data.advantages.map(advantage => (
                            <li
                                className="flex gap-5 items-center w-full max-w-[200px] leading-6"
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

                    <p className="hidden xl:block leading-5 text-[15px]">{data.text}</p>
                    <Button className="mt-[50px] xl:mt-[30px] xl:pl-[42px] w-fit">
                        {data.button}
                    </Button>
                </div>

                <div className="hidden xl:block w-full h-auto max-w-[420px]">
                    <Image
                        src={data.heroImage.url}
                        alt={data.heroImage.alt}
                        width={580}
                        height={520}
                        quality={100}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
