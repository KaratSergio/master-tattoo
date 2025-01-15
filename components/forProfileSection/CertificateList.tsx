import { FC } from 'react';
import Slider from '../Slider';
import CertificateCard from './CertificateCard';
import { CertificateListProps } from '@/types/profileSectionTypes';

const CertificateList: FC<CertificateListProps> = ({ certificate }) => {
    return (
        <ul className="container">
            <Slider>
                {certificate.map(certificate => (
                    <CertificateCard key={certificate.id} {...certificate} />
                ))}
            </Slider>
        </ul>
    );
};

export default CertificateList;
