import { FC } from 'react';
import Slider from '../Slider';
import ToolCard from './ToolCard';
import { ToolsListProps } from '@/types/toolsSectionTypes';

const ToolsList: FC<ToolsListProps> = ({ tools }) => {
    return (
        <ul className="xl:flex xl:flex-wrap xl:justify-center 2xl:gap-x-20">
            <Slider className="xl:hidden">
                {tools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </Slider>

            {tools.map(tool => (
                <ToolCard className="hidden xl:flex" key={tool.id} tool={tool} />
            ))}
        </ul>
    );
};

export default ToolsList;
