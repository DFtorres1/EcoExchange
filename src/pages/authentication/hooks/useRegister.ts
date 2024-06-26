import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "src/utils/api";

const postRegister = async (newUser: users) => {
  const { data } = await api.post("/authentication/register", newUser);
  return data;
};

const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (newUser: users) => postRegister(newUser),
    onError: (err: any) => {
      console.log(err);
    },
    onSuccess: () => {
      return navigate("/login");
    },
  });
};

export default useRegister;
