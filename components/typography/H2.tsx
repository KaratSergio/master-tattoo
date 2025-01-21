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
                    'text-25px xl:text-[35px] 2xl:text-[45px] font-bold leading-8 xl:leading-[42px] 2xl:leading-[60px]':
                        variant === 'title-section',
                },
                className
            )}
        >
            {children}
        </h2>
    );
};
