import { FC } from 'react';
import { Markdown } from '@/components/Markdown';
import { ContactsSectionProps } from '@/types/contactsSectionTypes';

const ContactsSection: FC<ContactsSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <h2>{data.title}</h2>
                <ul>
                    <li>
                        <Markdown text={data.operating} />
                    </li>
                    <li>{data.address}</li>
                    <li>{data.telephone}</li>
                    <li>{data.email}</li>
                    <li>{data.social}</li>
                </ul>
            </div>
        </section>
    );
};

export default ContactsSection;
