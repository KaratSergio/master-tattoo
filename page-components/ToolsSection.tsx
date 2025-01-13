import { FC } from 'react';
import Image from 'next/image';
import { H2 } from '@/components/typography/H2';
import { ToolsSectionProps } from '@/types/toolsSectionTypes';

const ToolsSection: FC<ToolsSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container mt-[60px]">
                <H2 variant="title-section">{data.title}</H2>
                <ul>
                    {data.tools.map(tool => (
                        <li key={tool.id}>
                            <div className="">
                                <Image
                                    src={tool.image.url}
                                    alt={tool.image.alt}
                                    width={270}
                                    height={295}
                                    quality={90}
                                    className="object-cover"
                                />
                            </div>
                            <h3>{tool.title}</h3>
                            <p>{tool.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ToolsSection;
