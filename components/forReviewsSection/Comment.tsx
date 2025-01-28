import { FC } from 'react';
import { H3 } from '../typography/H3';
import { P } from '../typography/P';
import Image from 'next/image';
import { CommentProps } from '@/types/reviewsSectionTypes';
import { EllipseList } from '@/components/icons/ellipse/EllipseList';

const Comment: FC<CommentProps> = ({ title, text, image }) => {
    return (
        <li className="items-center w-full max-w-[290px] sm:max-w-[420px] xl:max-w-[640px]  xl:flex xl:gap-12">
            <div className="relative hidden xl:flex  flex-shrink-0">
                <Image
                    src={image.url}
                    alt={image.alt}
                    width={157}
                    height={157}
                    quality={90}
                    className="object-cover rounded-full w-[157px] h-[157px]"
                />
                <EllipseList className="hidden xl:block size-[60px] absolute top-0 right-0 z-[-1]" />
                <EllipseList className="hidden xl:block size-8 absolute bottom-0 right-4 z-[-1]" />
                <EllipseList className="hidden xl:block size-1 absolute bottom-6 right-2" />
            </div>
            <div>
                <H3>{title}</H3>
                <P>{text}</P>
            </div>
        </li>
    );
};

export default Comment;
