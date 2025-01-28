import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { Check } from './icons/Check';

export interface ButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'sky-blue' | 'sky-white' | 'deep-blue';
    iconEnabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className,
    iconEnabled = true,
    ...props
}) => {
    return (
        <button
            className={cn(
                'w-full flex items-center justify-center gap-2 rounded-[10px] py-[15px] pl-[17px] pr-[17px] text-sm sm:text-[15px] low-box-shadow font-bold leading-5 uppercase',
                {
                    'text-white bg-a_gradient': variant === 'primary',
                    'text-deep_blue bg-white': variant === 'deep-blue',
                    'text-sky_blue bg-white': variant === 'sky-blue',
                    'text-dark_b bg-b_gradient': variant === 'sky-white',
                },
                className
            )}
            {...props}
        >
            {iconEnabled && (
                <Check
                    className={cn('size-4', {
                        'text-deep_blue': variant === 'deep-blue',
                        'text-white': variant === 'primary',
                        'text-dark_b': variant === 'sky-white',
                    })}
                />
            )}

            {children}
        </button>
    );
};
