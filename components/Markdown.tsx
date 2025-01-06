import cn from 'classnames';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { P } from './typography/P';
import { H1 } from './typography/H1';
import { H2 } from './typography/H2';
import { H3 } from './typography/H3';
import { TextColor, TextType } from '@/types/textTypes';
import { H4 } from './typography/H4';

interface InterfaceMarkdown {
    text: string;
    className?: string;
    pType?: TextType;
    pColor?: TextColor;
    xlTextSize?: 'lg' | 'base';
    strong?: string;
}

export const Markdown: FC<InterfaceMarkdown> = ({
    text,
    className,
    pType,
    pColor,
    xlTextSize = 'lg',
    strong,
}) => {
    const xlClass = xlTextSize === 'lg' ? 'xl:text-lg' : 'xl:text-base';

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                p: props => (
                    <P className={cn(className, xlClass)} type={pType} color={pColor}>
                        {props.children}
                    </P>
                ),
                h1: props => <H1 className={className}>{props.children}</H1>,
                h2: props => <H2 className={className}>{props.children}</H2>,
                h3: props => <H3 className={className}>{props.children}</H3>,
                h4: props => <H4 className={className}>{props.children}</H4>,
                li: props => (
                    <li
                        className={cn(
                            className,
                            'relative mt-2 pl-2 before:content-[""] before:absolute before:left-[-2px] before:top-3 before:-translate-y-1/2 before:size-1  before:rounded-full before:bg-black text-[15px] xl:text-base'
                        )}
                    >
                        {props.children}
                    </li>
                ),
                ul: props => <ul className={cn(className, '')}>{props.children}</ul>,
                a: props => (
                    <a
                        href={props.href}
                        className={cn(
                            className,
                            'text-blue underline hover:text-blue-800 transition-colors'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.children}
                    </a>
                ),
                strong: props => (
                    <strong className={cn(className, strong, '!inline')}>{props.children}</strong>
                ),
            }}
        >
            {text}
        </ReactMarkdown>
    );
};
