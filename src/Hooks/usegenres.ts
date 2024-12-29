import Genres from "../Data/Genres";
export interface genre {
  id: number;
  name: string;
  image_background: string;
}

const usegenres = () => ({ data: Genres, isloading: false, error: null });

export default usegenres;
