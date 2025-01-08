import { FC } from 'react';
import { FooterProps } from '@/types/footerTypes';

const Footer: FC<FooterProps> = ({ data }) => {
    return (
        <footer className="bg-dark w-full">
            <div className="container">{data.nameAuthor}</div>
        </footer>
    );
};

export default Footer;
