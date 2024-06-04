import { httpClient } from "../httpClient"

export const getAllPackages = async() => {
  const { data } = await httpClient.get('/packages/all');

  if (!data.ok) {
    return [];
  }

  return data.data;
}
