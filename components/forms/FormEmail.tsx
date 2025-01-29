'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/Button';

interface FormValues {
    email: string;
}

interface FormEmailProps {
    buttonText: string;
    buttonError?: string;
    onSubmit: SubmitHandler<FormValues>;
}

export const FormEmail: FC<FormEmailProps> = ({ buttonText, buttonError, onSubmit }) => {
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
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register('email', {
                        required: 'Введіть ваш email',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Невірний email',
                        },
                    })}
                    className="p-[10px] block w-full sm:w-[295px] xl:w-[381px] 2xl:w-[439px] rounded-md border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            <Button
                variant="deep-blue"
                iconEnabled={false}
                type="submit"
                className="w-full 2xl:w-[439px] mt-[10px]"
            >
                {buttonText}
            </Button>
            {buttonError && <p className="text-red-500 text-center mt-4">{buttonError}</p>}
        </form>
    );
};
