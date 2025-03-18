import { Publisher } from "./publisher";
import { genre } from "./genre";
import { Platform } from "./Platform";

export interface Game {
  id: number;
  description_raw: string;
  name: string;
  publishers: Publisher[];
  slug?: string;
  genres: genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
