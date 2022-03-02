import { useContext } from "react";
import { HomeContext } from "../contexts/HomeProvider";

export const useHomeContextValues = () => {
  return useContext(HomeContext);
};
