import cn from 'classnames';
import { ReactNode } from 'react';

export const H2 = ({
    children,
    className,
    variant = 'primary',
}: {
    children: ReactNode;
    className?: string;
    variant?: 'primary' | 'title-section';
}) => {
    return (
        <h2
            className={cn(
                '',
                {
                    'gradient-text': variant === 'primary',
                    'text-25px font-bold leading-8': variant === 'title-section',
                },
                className
            )}
        >
            {children}
        </h2>
    );
};
