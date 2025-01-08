import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { HeroSectionProps } from '@/types/heroSectionTypes';

const HeroSection: FC<HeroSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h1 className="mt-[61px] text-[28px] font-bold leading-8 txt-shadow">
                    {data.title}
                </h1>
                <p className="hidden">{data.text}</p>
                <ul className="mt-[50px] flex flex-col gap-6">
                    {data.advantages.map(advantage => (
                        <li
                            className="flex gap-5 items-center w-full max-w-[200px]"
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
                <Button className="mt-[50px]">{data.button}</Button>
            </div>
        </section>
    );
};

export default HeroSection;
