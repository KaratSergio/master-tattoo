'use client';

import { FC } from 'react';
import Image from 'next/image';
import { PromotionSectionProps } from '@/types/promotionSectionTypes';
import { H3 } from '@/components/typography/H3';
import { Markdown } from '@/components/Markdown';
import { Ellipse } from '@/components/icons/ellipse/Ellipse';
import { FormContact } from '@/components/forms/FormContact';

const PromotionSection: FC<PromotionSectionProps> = ({ data }) => {
    const handleSubmit = (formData: { name: string; phone: string }) => {
        console.log('Form submitted:', formData);
    };

    return (
        <section className="mt-[60px]">
            <div className="relative container xl:flex xl:flex-row-reverse">
                <div className="w-full max-w-lg xl:max-w-[640px] 2xl:max-w-[815px] flex-shrink-0">
                    <h2 className="absolute w-24 xl:w-96 text-white xl:text-dark_a top-16 xl:top-24 left-10 xl:left-[176px] 2xl:left-[345px] text-4xl font-bold">
                        {data.title}
                    </h2>
                    <H3 className="absolute text-white xl:text-dark_a top-8 xl:top-16 left-10 xl:left-[176px] 2xl:left-[346px]">
                        {data.text}
                    </H3>

                    <Image
                        src={data.image.url}
                        alt={data.image.alt}
                        width={815}
                        height={574}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 815px"
                        className="rounded-t-2xl xl:rounded-tl-none xl:rounded-r-2xl object-cover w-full h-full flex-shrink-0"
                    />
                </div>

                <div className="bg-a_gradient px-3 sm:px-8 xl:pl-[111px] 2xl:pl-[151px] xl:pr-[168px] xl:pt-[160px] pt-10 pb-12 xl:pb-10 rounded-b-2xl xl:rounded-b-none xl:rounded-l-2xl">
                    <p className="text-[15px] 2xl:text-base 2xl:w-[439px] text-gray-700">
                        {data.text1}
                    </p>

                    <FormContact
                        buttonText={data.button}
                        buttonError={data.buttonError}
                        onSubmit={handleSubmit}
                    />

                    <Markdown
                        className="mt-6 text-[12px] 2xl:w-[360px] text-white"
                        text={data.agreement}
                    />
                </div>
                <Ellipse className="hidden xl:block low-box-shadow rounded-full size-12 xl:size-20 text-white absolute top-[-28px] left-24 2xl:left-[240px]" />
                <Ellipse className="hidden xl:block low-box-shadow rounded-full size-4 xl:size-4 text-white absolute top-6 xl:top-1 left-16 xl:left-48 2xl:left-[340px]" />
                <Ellipse className="low-box-shadow rounded-full size-10 xl:size-[60px] text-white absolute bottom-[-20px] xl:right-[800px] 2xl:right-[1000px] right-12" />
                <Ellipse className="low-box-shadow rounded-full size-3 xl:size-6 text-white absolute bottom-2 right-24 xl:right-[890px] 2xl:right-[1080px]" />
            </div>
        </section>
    );
};

export default PromotionSection;
