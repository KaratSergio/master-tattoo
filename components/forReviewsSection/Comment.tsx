import { FC } from 'react';
import { H3 } from '../typography/H3';
import { P } from '../typography/P';
import { CommentProps } from '@/types/reviewsSectionTypes';

const Comment: FC<CommentProps> = ({ title, text }) => {
    return (
        <li>
            <H3>{title}</H3>
            <P>{text}</P>
        </li>
    );
};

export default Comment;
