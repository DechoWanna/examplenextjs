import { useContext } from "react";
import { SignupContext } from "../utils/user";

const useSignup = () => {
  const context = useContext(SignupContext);
  if (!context)
    throw new Error("Load Context must be use inside Load Provider");
  return context;
};

export default useSignup;
