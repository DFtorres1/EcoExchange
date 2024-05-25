import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "src/utils/api";

const postProduct = async (newResource: Resource) => {
  const { data } = await api.post("/resource", newResource);
  return data;
};

const useCreateProduct = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (newResource: Resource) => postProduct(newResource),
    onError: (err: any) => {
      console.log(err);
    },
    onSuccess: () => {
      return navigate("/offers");
    },
  });
};

export default useCreateProduct;
