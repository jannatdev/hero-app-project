'use client';

import { AppType } from "@/app.type"
import { AppContext } from "@/Contex/AppProvider";
import { useContext } from "react";



export default function InstalledButton({app}:{app:AppType}) {

    const context = useContext(AppContext)
    if (!context) { throw new Error( "InstalledButton must be used inside AppProvider" ); }
   
    const { installedApps, setInstalledApps } = context;

    const handleInstalledButton=()=>{
     


        setInstalledApps([...installedApps,app])
        
    }
    
    return (
        <div>
            
            <button 
            onClick={()=>handleInstalledButton()}
            className="mt-8 rounded-xl bg-green-500 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-green-600">
                Install App
              </button>
        </div>
    )
}