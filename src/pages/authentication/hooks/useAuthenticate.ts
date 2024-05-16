import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "src/UserProvider";
import { useNavigate } from "react-router-dom";
import api from "src/utils/api";

const postAuthentication = async (loginObject: LoginObjectModel) => {
  const { data } = await api.post("/authentication/login", loginObject);
  return data;
};

const useAuthentication = () => {
  const currentUserRole = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (loginObject: LoginObjectModel) =>
      postAuthentication(loginObject),
    onError: (err: any) => {
      console.log(err);
      return navigate("/login");
    },
    onSuccess: (data: any) => {
      const { token } = data;
      const decodedToken = jwtDecode<any>(token);
      const localUserRole = decodedToken.userRoles;
      if (localUserRole) {
        currentUserRole?.setUserRoles(localUserRole);
      }
      sessionStorage.setItem("token", token);
    },
  });
};

export default useAuthentication;
