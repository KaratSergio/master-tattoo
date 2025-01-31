'use client';

import { createContext, FC, ReactNode, useState } from 'react';

type PopupType = 'contact' | 'email' | null;

interface PopupContextProps {
    isOpen: boolean;
    popupType: PopupType;
    openPopup: (type: PopupType) => void;
    closePopup: () => void;
}

export const PopupContext = createContext<PopupContextProps | undefined>(undefined);

export const PopupProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [popupType, setPopupType] = useState<PopupType>(null);

    const openPopup = (type: PopupType) => {
        setPopupType(type);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setPopupType(null);
    };

    return (
        <PopupContext.Provider value={{ isOpen, popupType, openPopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    );
};
