'use client';

import { FC } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PromotionSectionProps } from '@/types/promotionSectionTypes';
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
        <section className="promotion-section py-12">
            <div className="container mx-auto px-4">
                <div className="relative w-full max-w-lg mx-auto">
                    <h2 className="absolute text-white top-16 left-2 text-2xl font-bold">
                        {data.title}
                    </h2>
                    <p className="absolute text-white top-2 left-2">{data.text}</p>
                    <Image
                        src={data.image.url}
                        alt={data.image.alt}
                        width={815}
                        height={574}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 815px"
                        className="rounded-lg object-cover"
                    />
                </div>

                <div className="bg-a_gradient p-3">
                    <p className="text-lg text-gray-700 text-center">{data.text1}</p>
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
                                className="p-4 block w-[295px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
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
                                className="p-4 block w-[295px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                            )}
                        </div>

                        <Button variant="deep-blue" type="submit" className="w-full">
                            {data.button}
                        </Button>
                        {data.buttonError && (
                            <p className="text-red-500 text-center mt-4">{data.buttonError}</p>
                        )}
                    </form>

                    <Markdown
                        className="mt-6 text-sm text-gray-500 text-center"
                        text={data.agreement}
                    />
                </div>
            </div>
        </section>
    );
};

export default PromotionSection;
