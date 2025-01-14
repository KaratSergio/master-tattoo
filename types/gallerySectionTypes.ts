interface Image {
    id: string;
    alt: string;
    url: string;
}

interface GallerySectionData {
    title: string;
    text: string;
    gallery: Image[];
}

export interface GalleryCardProps {
    picture: Image;
}
export interface GalleryListProps {
    gallery: Image[];
}
export interface GallerySectionProps {
    data: GallerySectionData;
}
