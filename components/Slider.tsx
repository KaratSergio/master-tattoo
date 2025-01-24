'use client';

import { FC, ReactNode, useState } from 'react';
import { ArrowLeft } from './icons/arrows/ArrowLeft';
import { ArrowRight } from './icons/arrows/ArrowRight';

interface SliderProps {
    children: ReactNode[];
    hideButtons?: boolean;
    className?: string;
    slidesToShow?: number;
}

const Slider: FC<SliderProps> = ({
    children,
    className,
    hideButtons = false,
    slidesToShow = 1,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // for mobile swipe
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
    };

    // for mobile touch swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
        setTouchEnd(null);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart !== null && touchEnd !== null) {
            const swipeDistance = touchStart - touchEnd;
            if (swipeDistance > 50) {
                handleNext();
            } else if (swipeDistance < -50) {
                handlePrev();
            }
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div
            className={`relative w-full overflow-hidden pt-12 ${className}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="flex transition-transform duration-300"
                style={{
                    transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
                    width: `${(children.length * 50) / slidesToShow}%`,
                }}
            >
                {children.map((child, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0"
                        style={{ width: `${100 / slidesToShow}%` }}
                    >
                        {child}
                    </div>
                ))}
            </div>

            {/* Кнопки навиігації */}
            {!hideButtons && (
                <>
                    <button onClick={handlePrev} className="absolute right-14 top-[-1px]">
                        <ArrowLeft className="" />
                    </button>
                    <button onClick={handleNext} className="absolute right-2 top-[-1px]">
                        <ArrowRight className="" />
                    </button>
                </>
            )}
        </div>
    );
};

export default Slider;
