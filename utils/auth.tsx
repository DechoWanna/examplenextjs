import { FunctionComponent, createContext, ReactNode, useState } from "react";
import { user } from "../types/User";
interface AuthContextType {
  status: "unauthenticated" | "authenticated";
  setStatus: (status: "unauthenticated" | "authenticated") => void;
}
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = (props) => {
  const [status, setStatus] = useState<"unauthenticated" | "authenticated">(
    "unauthenticated"
  );

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };
