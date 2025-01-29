'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/Button';

interface FormValues {
    name: string;
    phone: string;
}

interface FormContactProps {
    buttonText: string;
    buttonError?: string;
    onSubmit: SubmitHandler<FormValues>;
}

export const FormContact: FC<FormContactProps> = ({ buttonText, buttonError, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col items-center 2xl:items-start"
        >
            <div>
                <input
                    id="name"
                    placeholder="Ім'я"
                    type="text"
                    {...register('name', { required: "Введіть ваше ім'я" })}
                    className="p-[10px] block w-full sm:w-[295px] xl:w-[381px] 2xl:w-[439px] rounded-md border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
                <input
                    id="phone"
                    type="text"
                    placeholder="Телефон"
                    {...register('phone', { required: 'Введіть номер телефону' })}
                    className="mt-[10px] mb-[30px] p-[10px] block w-full sm:w-[295px] xl:w-[381px] 2xl:w-[439px] rounded-md border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
            </div>

            <Button
                variant="deep-blue"
                iconEnabled={false}
                type="submit"
                className="w-full 2xl:w-[439px]"
            >
                {buttonText}
            </Button>
            {buttonError && <p className="text-red-500 text-center mt-4">{buttonError}</p>}
        </form>
    );
};
