import { gql } from "@apollo/client";

export const GET_DEVIL_FRUITS = gql`
  query GetDevilFruits($page: Int!) {
    devilFruits(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        englishName
        avatarSrc
        description
        currentOwner
        type
      }
    }
  }
`;





/** 
 * I chose Apollo Client as the core data layer because the app is GraphQL-native. It gives me normalized 
 * caching, pagination, query management, and devtools without extra work. For local app state like game 
 * progress or UI toggles, I planned to use Redux or context, but only where it adds clarity. I want 
 * to avoid premature optimization.
 */