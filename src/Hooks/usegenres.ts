import useData from "./useData";

export interface genre {
  id: number;
  name: string;
  image_background: string;
}

const usegenres = () => {
  const { data, error, isloading } = useData<genre>("/genres");
  return { data, error, isloading };
};

export default usegenres;
