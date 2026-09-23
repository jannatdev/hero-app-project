import { AppType } from "@/app.type";
import { getApps } from "@/lib/appFetch";
import AppCard from "@/Component/shared/AppCard";
import { Metadata } from "next";

// export interface PageProps {
//     app: AppType
// }
 export const metadata: Metadata = {
  title: 'Home'
  
}

 const HomePage= async()=> {
    const apps =await getApps()

    
    
    return (
         <div className="mt-10 container mx-auto ">
                    <h2 className="text-[40px] font-bold text-[#001931] text-center"> Trending Apps</h2>
                    <div className="grid grid-cols-4 gap-5 mt-4">
                        {apps.map((app:AppType) => <AppCard key={app.id} app={app}></AppCard> )}
                    </div>
                </div>

    )
};
export default HomePage;