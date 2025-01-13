import { TextColor, TextType } from '@/types/textTypes';
import cn from 'classnames';

export const P = ({
    children,
    className,
    type = 'regular',
    color = 'light',
}: {
    children: React.ReactNode;
    className?: string;
    type?: TextType;
    color?: TextColor;
}) => {
    return (
        <p
            className={cn(
                {
                    'text-[15px] leading-22px': type === 'regular',
                    'text-subtitleTextSm xl:text-subtitleTextXl': type === 'subtitle',
                    'text-subtitleTextBoldSm xl:text-subtitleTextBoldXl': type === 'subtitleBold',
                    'text-black2': color === 'dark',
                    'text-text': color === 'light',
                    'text-border': color === 'grey',
                    'text-white': color === 'white',
                },
                className
            )}
        >
            {children}
        </p>
    );
};
