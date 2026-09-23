import { AppType } from "@/app.type"
import Image from "next/image"
import Link from "next/link"
import { FiDownload, FiStar } from "react-icons/fi"

export interface AppCardProps {
    app: AppType
}

export default function AppCard({ app }: AppCardProps) {
    
    return(

    <div className=" grid gap-2 group w-full max-w-85 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-52.5 w-full overflow-hidden rounded-xl bg-gray-100">
        
        <Image src={app.image} alt={app.title} width={300} height={200} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"></Image>

        {/* Rating Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm">
              <FiStar className="fill-orange-400 text-orange-400" size={15} />
                {app.ratingAvg}
        </div>
      </div>

      {/* Content */}
      <div className="pt-4">

        {/* Title */}
        <h2 className="truncate text-xl font-bold text-[#10233d]">
          {app.title}
        </h2>

        {/* Company */}
        <p className="mt-1 text-sm text-gray-500">
          {app.companyName}
        </p>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {app.description}
        </p>

        {/* Bottom Info */}
        <div className="mt-5 flex items-center justify-between">

          {/* Downloads */}
          <div className="flex items-center gap-2 rounded-lg bg-[#eef8e9] px-3 py-2 text-sm font-semibold text-emerald-500">
            <FiDownload size={17} />
            <span>{app.downloads}</span>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-2 rounded-lg bg-[#fff1e5] px-3 py-2 text-sm font-semibold text-orange-500">
            <FiStar className="fill-orange-500" size={16} />
            <span>{app.ratingAvg}</span>
          </div>
          

        </div>
      </div>
      <div>
       <Link href={`/Home/${app.id}`}>
         <button className="btn w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 mt-2 text-white">View Details</button>
       </Link>
            
          </div> 
    </div>
    ) 
}