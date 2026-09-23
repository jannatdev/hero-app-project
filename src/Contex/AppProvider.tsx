
'use client';
import { AppType } from "@/app.type";

import { useState } from "react";
import { createContext } from "react";

export interface AppProviderProps {
    installedApps:AppType[]
    setInstalledApps:React.Dispatch<React.SetStateAction<AppType[]>>

}

 export const AppContext=createContext<AppProviderProps|undefined>(undefined)

 const AppProvider=({ children }: {children:React.ReactNode})=> {

     const [installedApps,setInstalledApps]=useState<AppType[]>([])

    const sharedValue:AppProviderProps={
        installedApps,
        setInstalledApps

    }
    
    return (
        <div>
            <AppContext.Provider value={sharedValue}>
               {children}
            </AppContext.Provider>
        </div>
    )
};
export default AppProvider;