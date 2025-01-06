import { Locale } from '@/i18n.config';
import { getClient } from '@/utils/apollo-client';
import { gql } from '@apollo/client';

import HeroSection from '@/page-components/HeroSection';

export default async function Home({ params }: { params: { lang: Locale } }) {
    const { lang } = await params;

    const query = gql`
        query MyQuery($locale: SiteLocale!) {
            heroSection(locale: $locale) {
                title
                text
                heroImage {
                    alt
                    url
                }
                button
                advantages {
                    id
                    text
                    image {
                        url
                        alt
                    }
                }
            }
        }
    `;

    const { data } = await getClient().query({
        query,
        variables: { locale: lang },
        context: {
            fetchOptions: {
                next: { revalidate: 60 },
            },
        },
    });

    return (
        <main className="flex flex-col flex-grow  justify-between">
            <HeroSection data={data.heroSection} />
        </main>
    );
}
