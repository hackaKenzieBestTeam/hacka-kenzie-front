
import { createContext, useState } from "react";


export const MainContext = createContext({});

export const MainProvider = ({ children }: iProductsProvider) => {
  
  return (
    <MainContext.Provider
      value={{}}
    >
      {children}
    </MainContext.Provider>
  );
};
