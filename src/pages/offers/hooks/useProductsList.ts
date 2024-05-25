import { useQuery } from "@tanstack/react-query";
import api from "src/utils/api";
import { resourceQueryKey } from "src/utils/queryKeys";

const getProductList = async (): Promise<Resource[]> => {
  const { data } = await api.get("/resource");
  return data;
};

const useProductList = (): any => {
  return useQuery<Resource[]>({
    queryKey: resourceQueryKey.details(),
    queryFn: getProductList,
    staleTime: Infinity,
    notifyOnChangeProps: ["data", "error"],
  });
};

export default useProductList;
