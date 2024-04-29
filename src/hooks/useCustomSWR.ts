
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BASE_API_URL } from "../utils";

export const useCustomSWR = <T>(apiUrl: string | null) => {
  const result = useSWR(`${BASE_API_URL}/${apiUrl}`, fetcher<T>, {
    revalidateOnFocus: false,
  });

  return result;
};