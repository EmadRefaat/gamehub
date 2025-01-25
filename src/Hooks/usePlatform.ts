import useplatforms from "./useplatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = useplatforms();
  return platforms.results.find((p) => p.id == id);
};

export default usePlatform;
