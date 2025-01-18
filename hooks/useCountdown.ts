'use client';

import { useState, useEffect } from 'react';

/**
 * A hook for the countdown
 * @param durationInSeconds The duration of the countdown in seconds
 * @returns Formatted time in the form of a date (HH:MM:SS)
 */
export const useCountdown = (durationInSeconds: number) => {
    const [remainingTime, setRemainingTime] = useState(durationInSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime <= 1) {
                    return durationInSeconds;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [durationInSeconds]);

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600)
            .toString()
            .padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return formatTime(remainingTime);
};
