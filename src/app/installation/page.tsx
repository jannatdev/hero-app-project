
'use client'

import { AppType } from "@/app.type";
import InstalledApps from "@/Component/shared/InstalledApps";
import { AppContext } from "@/Contex/AppProvider";
import { Metadata } from "next";
import { useContext } from "react"

//  export const metadata: Metadata = {
//   title: 'Installation'
// }

export default function InstallationPage() {

    

    const context =useContext(AppContext)
    if (!context) {
         throw new Error("InstallationPage must be used inside AppProvider");
         }
    const {installedApps}=context
    
    return (
        <div>
            <h2 className="text-[40px] font-bold">Your Installed Apps:{installedApps.length}</h2>
            <div>
                {installedApps.length>0?(
                    <div>
                        {installedApps.map((app:AppType)=>{
                            return <InstalledApps key={app.id} app={app}/>
                        })}
                    </div>
                ):(<p className="text-center text-gray-500 font-bold text-5xl py-20">
          No installed apps found.
        </p>)}
            </div>
            
        </div>
    )
};