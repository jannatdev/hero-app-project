
import { AppType } from "@/app.type";
import AppCard from "../shared/AppCard";
import { getApps } from "@/lib/appFetch";



 

 const HomeApp= async()=> {

    const apps= await getApps()
    
    return (
        <div className="mt-10 container mx-auto ">
            <h2 className="text-[40px] font-bold text-[#001931] text-center"> Trending Apps</h2>
            <div className="grid grid-cols-4 gap-5 mt-4">
                {apps.slice(0,8).map((app:AppType) => <AppCard key={app.id} app={app}></AppCard> )}
            </div>
        </div>
    )
}
export default  HomeApp