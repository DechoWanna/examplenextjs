import { useContext } from "react";
import { MakeContext } from "../utils/data";

const useMake = () => {
  const context = useContext(MakeContext);
  if (!context)
    throw new Error("Load Context must be use inside Load Provider");
  return context;
};

export default useMake;
