import { FC } from 'react';
import { H3 } from '../typography/H3';
import { P } from '../typography/P';
import Image from 'next/image';
import { CommentProps } from '@/types/reviewsSectionTypes';

const Comment: FC<CommentProps> = ({ title, text, image }) => {
    return (
        <li className="items-center w-[330px] sm:w-[420px] xl:w-[640px]  xl:flex xl:gap-12">
            <div className="hidden xl:flex overflow-hidden rounded-full w-[157px] h-[157px] flex-shrink-0">
                <Image
                    src={image.url}
                    alt={image.alt}
                    width={157}
                    height={157}
                    quality={90}
                    className="object-cover w-full h-full"
                />
            </div>
            <div>
                <H3>{title}</H3>
                <P>{text}</P>
            </div>
        </li>
    );
};

export default Comment;
