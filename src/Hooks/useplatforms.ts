import { Platform } from "./usegames";
import useData from "./useData";

const useplatforms = () => useData<Platform>("/platforms/lists/parents");

export default useplatforms;
