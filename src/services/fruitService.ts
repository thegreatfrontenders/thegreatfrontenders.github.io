// services/fruitService.ts
import { ApolloClient } from "@apollo/client";
import { DevilFruit } from "../types";
import { GET_DEVIL_FRUITS } from "./graphql/queries";

export const getFruitsWithImages = async (
  client: ApolloClient<any>,
  page: number = 1
) => {
  const { data } = await client.query({
    query: GET_DEVIL_FRUITS,
    variables: { page },
  });

  const allFruits = data?.devilFruits?.results ?? [];

  // Filter to fruits with images
  return allFruits.filter((fruit: DevilFruit) => fruit.avatarSrc);
};
