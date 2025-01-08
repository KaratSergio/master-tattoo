interface Image {
    alt: string;
    url: string;
}

interface ToolsList {
    id: string;
    title: string;
    text: string;
    image: Image;
}

interface ToolsSectionData {
    title: string;
    tools: ToolsList[];
}

export interface ToolsSectionProps {
    data: ToolsSectionData;
}
