import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

export interface ButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'sky-blue' | 'sky-white' | 'deep-blue';
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
    return (
        <button
            className={cn(
                'w-full rounded-[10px] py-[15px] pl-[42px] pr-[17px] text-[15px] low-box-shadow font-bold leading-5 uppercase',
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
            {children}
        </button>
    );
};
