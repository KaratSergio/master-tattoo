import { FC } from 'react';
import Image from 'next/image';
import { H3 } from '../typography/H3';
import { P } from '../typography/P';
import { ToolCardProps } from '@/types/toolsSectionTypes';

import { EllipseTools } from '@/components/icons/Ellipse_temp/toolsSection/EllipseTools';

const ToolCard: FC<ToolCardProps> = ({ tool, className }) => {
    return (
        <li
            className={`flex flex-col items-center w-full max-w-[330px] sm:max-w-[440px] xl:max-w-[620px] xl:flex-row xl:gap-6 2xl:gap-10 ${className}`}
        >
            <div className="relative mt-12 w-[200px] xl:w-[230px] h-[220px] xl:h-[280px] flex-shrink-0">
                <Image
                    src={tool.image.url}
                    alt={tool.image.alt}
                    width={270}
                    height={295}
                    quality={90}
                    className="object-cover w-full h-full custom-rounded"
                />
                <EllipseTools className="absolute top-0 left-0 z-[-1] xl:z-40" />
            </div>
            <div>
                <H3 className="mt-12 xl:w-[300px]">{tool.title}</H3>
                <P className="mt-5 w-full max-w-[320px]">{tool.text}</P>
            </div>
        </li>
    );
};

export default ToolCard;
