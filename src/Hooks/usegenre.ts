import usegenres from "./usegenres";

const usegenre = (id?: number) => {
  const { data } = usegenres();
  return data.results.find((genre) => genre.id === id);
};

export default usegenre;
