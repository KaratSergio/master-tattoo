interface Image {
    alt: string;
    url: string;
}

interface ToolCard {
    id: string;
    title: string;
    text: string;
    image: Image;
}

interface ToolsSectionData {
    title: string;
    tools: ToolCard[];
}

export interface ToolCardProps {
    tool: ToolCard;
}

export interface ToolsListProps {
    tools: ToolCard[];
}

export interface ToolsSectionProps {
    data: ToolsSectionData;
}
