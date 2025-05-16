import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://onepieceql.up.railway.app/graphql',
  cache: new InMemoryCache(), // is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
});

/** 
 * Notes on Apollo
 * 
 * Introduction to Apollo Client
 * Learn how Apollo Client simplifies GraphQL data management to help build web apps
 * 
 * Apollo Client is a comprehensive state management library for JavaScript. 
 * It enables you to manage both local and remote data with GraphQL. 
 * Use it to fetch, cache, and modify application data, all while automatically updating your UI.
 * 
 * got all these notes from https://www.apollographql.com/docs/react
 * there are competitors to Apollo but this is what i'm going with for now
 * 
 * npm installed: 
 * @apollo/client: This single package contains virtually everything you need to set up Apollo Client. 
 * It includes the in-memory cache, 
 * local state management, error handling, and a React-based view layer.
 * 
 * some more info here: https://www.freecodecamp.org/news/5-ways-to-fetch-data-react-graphql/
 */
