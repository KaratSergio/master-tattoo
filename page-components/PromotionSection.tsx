'use client';

import { FC } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PromotionSectionProps } from '@/types/promotionSectionTypes';
import { H3 } from '@/components/typography/H3';
import { Button } from '@/components/Button';
import { Markdown } from '@/components/Markdown';

interface FormValues {
    name: string;
    phone: string;
}

const PromotionSection: FC<PromotionSectionProps> = ({ data }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = formData => {
        // Здесь обработка данных формы
        console.log('Form submitted:', formData);
    };

    return (
        <section className="mt-[60px]">
            <div className="container mx-auto px-4">
                <div className="relative w-full max-w-lg mx-auto">
                    <h2 className="absolute w-24 text-white top-16 left-10 text-4xl font-bold">
                        {data.title}
                    </h2>
                    <H3 className="absolute text-white top-8 left-10">{data.text}</H3>

                    <Image
                        src={data.image.url}
                        alt={data.image.alt}
                        width={815}
                        height={574}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 815px"
                        className="rounded-t-2xl object-cover object-end"
                    />
                </div>

                <div className="bg-a_gradient px-3 pt-10 pb-12 rounded-b-2xl">
                    <p className="text-lg text-gray-700">{data.text1}</p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 flex flex-col items-center"
                    >
                        <div>
                            <input
                                id="name"
                                placeholder="Ім'я"
                                type="text"
                                {...register('name', { required: "Введіть ваше ім'я" })}
                                className="p-[10px] block w-[295px] rounded-md border-gray-300 shadow-sm focus:outline-none"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Телефон"
                                {...register('phone', { required: 'Введіть номер телефону' })}
                                className="mt-[10px] mb-[30px] p-[10px] block w-[295px] rounded-md border-gray-300 shadow-sm focus:outline-none"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                            )}
                        </div>

                        <Button
                            variant="deep-blue"
                            iconEnabled={false}
                            type="submit"
                            className="w-full justify-center pr-10"
                        >
                            {data.button}
                        </Button>
                        {data.buttonError && (
                            <p className="text-red-500 text-center mt-4">{data.buttonError}</p>
                        )}
                    </form>

                    <Markdown className="mt-6 text-[12px] text-white" text={data.agreement} />
                </div>
            </div>
        </section>
    );
};

export default PromotionSection;
