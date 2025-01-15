interface Image {
    alt: string;
    url: string;
}

interface ReviewsSectionData {
    title: string;
    text: string;
    reviewsList: CommentProps[];
}

export type CommentProps = Pick<ReviewsSectionData, 'title' | 'text'> & {
    id: string;
    image?: Image;
};

export type ReviewsListProps = Pick<ReviewsSectionData, 'reviewsList'>;

export interface ReviewsSectionProps {
    data: ReviewsSectionData;
}
