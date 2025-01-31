'use client';

import { FC } from 'react';
import { Popup } from './Popup';
import { FormContact } from '../forms/FormContact';
import { FormEmail } from '../forms/FormEmail';
import { usePopup } from '@/hooks/usePopup';

export const FormPopup: FC = () => {
    const { isOpen, popupType, closePopup } = usePopup();

    return (
        <Popup isOpen={isOpen} onClose={closePopup}>
            {popupType === 'contact' && (
                <div className="text-center">
                    <h2 className="mt-4 xl:mt-0 text-xl xl:text-3xl font-bold mb-4">
                        Записатися на консультацію
                    </h2>
                    <p className="text-[15px] my-10">
                        Залишіть свої контактні дані і я зв&apos;яжуся <br /> з вами у найкоротший
                        термін
                    </p>
                    <FormContact
                        buttonText="Залишити заявку"
                        variant="primary"
                        onSubmit={closePopup}
                    />
                </div>
            )}
            {popupType === 'email' && (
                <div className="text-center">
                    <h2 className="mt-4 xl:mt-0 text-xl xl:text-3xl font-bold mb-4">
                        Дякую за заявку!
                    </h2>
                    <p className="mb-6">Скоро я обов&apos;язково зв&apos;яжусь з вами</p>
                    <p className="mb-2 font-bold">Ваша заявка №34</p>
                    <p className="mb-1 font-bold">Свистулька Жанна Олегівна</p>
                    <p className="font-semibold">+38 098 666-22-99</p>
                    <p className="mt-6 text-sm">Бажаєте отримати рекомендації перед прийомом?</p>
                    <FormEmail buttonText="Отримати рекомендації" onSubmit={closePopup} />
                </div>
            )}
        </Popup>
    );
};
