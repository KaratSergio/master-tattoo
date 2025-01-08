import { FC } from 'react';
import { ProfileSectionProps } from '@/types/profileSectionTypes';

const ProfileSection: FC<ProfileSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
            </div>
        </section>
    );
};

export default ProfileSection;
