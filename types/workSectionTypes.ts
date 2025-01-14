interface Image {
    alt: string;
    url: string;
}

interface BaseListItem {
    id?: string;
    title: string;
    text: string;
}

interface WorkSectionData {
    title: string;
    titleStage: string;
    image: Image;
    button: string;
    workList: WorkItemProps[];
    workStage: StageItemProps[];
}

// WORK LIST
export interface WorkItemProps extends BaseListItem {
    number: string;
}
export type WorkListProps = Pick<WorkSectionData, 'workList'>;

// STAGE LIST
export interface StageItemProps extends BaseListItem {
    titleList: string;
}
export type StageListProps = Pick<WorkSectionData, 'workStage'>;

// WORK SECTION
export interface WorkSectionProps {
    data: WorkSectionData;
}
