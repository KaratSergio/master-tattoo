interface Image {
    alt: string;
    url: string;
}

interface WorkList {
    id: string;
    number: string;
    title: string;
    text: string;
}

interface WorkStage {
    id: string;
    title: string;
    text: string;
    titleList: string;
}

interface WorkSectionData {
    title: string;
    titleStage: string;
    image: Image;
    button: string;
    workList: WorkList[];
    workStage: WorkStage[];
}

export interface WorkSectionProps {
    data: WorkSectionData;
}
