import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    <AppContext.Provider value={{}}>
    {children}
    </AppContext.Provider>;
};


export const useAppContext = (() => {return useContext(AppContext)})