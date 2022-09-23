import { useContext } from "react";
import { AuthContext } from "../utils/auth";
import { MakeContext } from "../utils/data";

const useSession = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("Load Context must be use inside Load Provider");
  return context;
};

export default useSession;
