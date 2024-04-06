import { useContext, useMemo, useState } from "react";
import { createContext } from "react";

interface AuthProps {
  children: React.ReactNode;
  userRole?: user_role;
}

interface UserContextInterface {
  userRoles: user_role | undefined;
  setUserRoles: React.Dispatch<user_role | undefined>;
}

const UserContext = createContext<UserContextInterface | null>(null);

const UserProvider = (props: AuthProps) => {
  const { children, userRole } = props;

  const [userRoles, setUserRoles] = useState<user_role | undefined>(userRole);

  const contextRoles = useMemo(
    () => ({ userRoles, setUserRoles }),
    [userRoles]
  );

  return (
    <UserContext.Provider value={contextRoles}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
export const useAuth = () => useContext(UserContext);