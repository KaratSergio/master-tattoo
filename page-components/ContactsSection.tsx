import { FC } from 'react';
import { ContactsSectionProps } from '@/types/contactsSectionTypes';

const ContactsSection: FC<ContactsSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
            </div>
        </section>
    );
};

export default ContactsSection;
