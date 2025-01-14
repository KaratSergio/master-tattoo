import { FC } from 'react';
import { H2 } from '@/components/typography/H2';
import { ToolsSectionProps } from '@/types/toolsSectionTypes';
import ToolsList from '@/components/forToolsSection/ToolsList';

const ToolsSection: FC<ToolsSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container relative mt-[60px]">
                <H2 variant="title-section" className="absolute top-[-6px] left-5 w-[280px]">
                    {data.title}
                </H2>
                <ToolsList tools={data.tools} />
            </div>
        </section>
    );
};

export default ToolsSection;
