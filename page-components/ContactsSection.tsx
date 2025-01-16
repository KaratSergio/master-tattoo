import { FC } from 'react';
import { H2 } from '@/components/typography/H2';
import { Markdown } from '@/components/Markdown';
import { ContactsSectionProps } from '@/types/contactsSectionTypes';

import { Watch } from '@/components/icons/contacts/Watch';
import { Chat } from '@/components/icons/contacts/Chat';
import { Mail } from '@/components/icons/contacts/Mail';
import { Phone } from '@/components/icons/contacts/Phone';
import { Map } from '@/components/icons/contacts/Map';

import { Telegram } from '@/components/icons/contacts/Telegram';
import { Viber } from '@/components/icons/contacts/Viber';
import { WhatsApp } from '@/components/icons/contacts/WhatsApp';

const ContactsSection: FC<ContactsSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container mt-[60px] pb-[50px]">
                <H2 variant="title-section">{data.title}</H2>
                <ul className="mt-10 flex flex-col gap-5">
                    <li className="flex items-center">
                        <Watch className="mr-[15px]" />
                        <div>
                            <Markdown text={data.operating} />
                        </div>
                    </li>
                    <li className="flex items-center">
                        <Map className="mr-[15px]" />
                        {data.address}
                    </li>
                    <li className="flex items-center">
                        <Phone className="mr-[15px]" />
                        {data.telephone}
                    </li>
                    <li className="flex items-center">
                        <Mail className="mr-[15px]" />
                        {data.email}
                    </li>
                    <li className="flex items-center">
                        <Chat className="mr-[15px]" />
                        {data.social}
                        <div className="flex gap-2 ml-6">
                            <Viber className="" />
                            <WhatsApp className="" />
                            <Telegram className="" />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ContactsSection;
