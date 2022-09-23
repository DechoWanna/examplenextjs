import {
  FunctionComponent,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { fetchData } from "../service/data";
import { Imake } from "../types/DataMake";
import { user } from "../types/User";
interface MakeContextType {
  make: Imake[];
}
const MakeContext = createContext<MakeContextType | null>(null);

interface MakeProviderProps {
  children: ReactNode;
}

const MakeProvider: FunctionComponent<MakeProviderProps> = (props) => {
  const [make, setMake] = useState<Imake[]>([]);
  useEffect(() => {
    functionFetchData();
  }, []);

  async function functionFetchData() {
    let data = await fetchData();
    setMake(data);
  }
  return (
    <MakeContext.Provider value={{ make }}>
      {props.children}
    </MakeContext.Provider>
  );
};
export { MakeProvider, MakeContext };
