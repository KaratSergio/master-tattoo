import { FC } from 'react';
import Image from 'next/image';
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
                <button className="mt-[50px] py-[15px] pl-[42px] pr-[17px] text-[15px] low-box-shadow rounded-[10px] font-bold leading-5 text-white uppercase bg-a_gradient">
                    {data.button}
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
