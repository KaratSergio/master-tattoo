import { FC } from 'react';
import Slider from '../Slider';
import CertificateCard from './CertificateCard';
import { CertificateListProps } from '@/types/profileSectionTypes';

const CertificateList: FC<CertificateListProps> = ({ certificate }) => {
    return (
        <ul className="xl:flex xl:justify-around xl:items-end">
            <Slider className="xl:hidden">
                {certificate.map(certificate => (
                    <CertificateCard key={certificate.id} {...certificate} />
                ))}
            </Slider>

            {certificate.map(certificate => (
                <CertificateCard
                    className="hidden xl:block"
                    key={certificate.id}
                    {...certificate}
                />
            ))}
        </ul>
    );
};

export default CertificateList;
