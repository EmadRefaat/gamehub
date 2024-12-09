import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface fechResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<fechResponse<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setLoading(true);
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { data, error, isloading };
};

export default useData;
