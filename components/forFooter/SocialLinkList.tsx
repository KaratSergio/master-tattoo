import { FC } from 'react';
import SocialLink from './SocialLink';
import { SocialLinkListProps } from '@/types/footerTypes';

const SocialLinkList: FC<SocialLinkListProps> = ({ social }) => {
    return (
        <ul className="flex gap-5 items-center justify-center mt-5">
            {social.map(social => (
                <SocialLink key={social.id} {...social} />
            ))}
        </ul>
    );
};

export default SocialLinkList;
