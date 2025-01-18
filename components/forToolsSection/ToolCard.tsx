import { FC } from 'react';
import Image from 'next/image';
import { H3 } from '../typography/H3';
import { P } from '../typography/P';
import { EllipseTools } from '@/components/icons/ellipse/toolsSection/EllipseTools';
import { ToolCardProps } from '@/types/toolsSectionTypes';

const ToolCard: FC<ToolCardProps> = ({ tool }) => {
    return (
        <li className="flex flex-col items-center w-full max-w-[330px] sm:max-w-[440px]">
            <div className="relative mt-12 w-[200px] h-[220px]">
                <Image
                    src={tool.image.url}
                    alt={tool.image.alt}
                    width={270}
                    height={295}
                    quality={90}
                    className="object-cover w-full h-full custom-rounded"
                />
                <EllipseTools className="absolute top-0 left-0 z-[-1]" />
            </div>
            <div>
                <H3 className="mt-12">{tool.title}</H3>
                <P className="mt-5 w-full max-w-[320px]">{tool.text}</P>
            </div>
        </li>
    );
};

export default ToolCard;
