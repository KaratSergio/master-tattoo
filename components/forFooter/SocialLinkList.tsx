import { FC } from 'react';
import SocialLink from './SocialLink';
import { SocialLinkListProps } from '@/types/footerTypes';

const SocialLinkList: FC<SocialLinkListProps> = ({ social, className }) => {
    return (
        <ul className={`flex gap-5 items-center justify-center mt-5 ${className}`}>
            {social.map(social => (
                <SocialLink key={social.id} {...social} />
            ))}
        </ul>
    );
};

export default SocialLinkList;
