'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Close } from '../icons/Close';
import { Ellipse } from '../icons/ellipse/Ellipse';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Popup = ({ isOpen, onClose, children }: PopupProps) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white popup-bg-svg p-10 xl:p-20 rounded-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-5 xl:right-10 text-gray-600 hover:text-gray-800"
                >
                    <Close className="size-6 xl:size-8" />
                </button>
                {children}
                <Ellipse className="size-12 low-box-shadow rounded-full text-white absolute top-6 left-24 hidden xl:block" />
                <Ellipse className="size-6 low-box-shadow rounded-full text-white absolute top-24 left-4 xl:left-6" />
                <Ellipse className="size-4 low-box-shadow rounded-full text-white absolute top-12 left-16 hidden xl:block" />
                <Ellipse className="size-10 xl:size-20 low-box-shadow rounded-full text-white absolute bottom-56 right-2 xl:right-1" />
                <Ellipse className="size-6 xl:size-10 low-box-shadow rounded-full text-white absolute bottom-72 xl:bottom-40 right-2 xl:right-8" />
            </div>
        </div>,
        document.body
    );
};

export default Popup;
