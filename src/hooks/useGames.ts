import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //array of objects where each property has an object of platform of type Platform
  metacritic: number;
}

const useGames = () => useData<Games> ("/games")

export default useGames;
