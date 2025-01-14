import { FC } from 'react';
import Slider from '../Slider';
import ToolCard from './ToolCard';
import { ToolsListProps } from '@/types/toolsSectionTypes';

const ToolsList: FC<ToolsListProps> = ({ tools }) => {
    return (
        <ul>
            <Slider>
                {tools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </Slider>
        </ul>
    );
};

export default ToolsList;
