import React from "react";
import { useHomeContextValues } from "../../hooks";
import { PrivateNavigationBar } from "./PrivateNavigationBar";
import { PublicNavigationBar } from "./PublicNavigationBar";

export const AppNavigationBar = () => {
  const { isLoggedIn } = useHomeContextValues();
  return <>{isLoggedIn ? <PrivateNavigationBar /> : <PublicNavigationBar />}</>;
};
