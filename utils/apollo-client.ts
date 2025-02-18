import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://graphql.datocms.com/",
      headers: {
        Authorization: `Bearer ${process.env.DATO_TOKEN}`,
      },
    }),
  });
});
