import { FunctionComponent, createContext, ReactNode, useState } from "react";
import { user } from "../types/User";
interface SignupContextType {
  signup: user[];
  setSignup: (user: user[]) => void;
}
const SignupContext = createContext<SignupContextType | null>(null);

interface SignupProviderProps {
  children: ReactNode;
}

const SignupProvider: FunctionComponent<SignupProviderProps> = (props) => {
  const [signup, setSignup] = useState<user[]>([]);

  return (
    <SignupContext.Provider value={{ signup, setSignup }}>
      {props.children}
    </SignupContext.Provider>
  );
};
export { SignupProvider, SignupContext };
