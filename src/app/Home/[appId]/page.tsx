import { AppType } from "@/app.type";
import InstalledButton from "@/Component/shared/Installed Button";
import { getApps } from "@/lib/appFetch";
import Image from "next/image";
import { notFound } from "next/navigation";


interface PageProps {
  params: Promise<{
    appId: string;
  }>;
}

const AppDetailsPage = async ({ params }: PageProps) => {
  const { appId } = await params;

  const apps: AppType[] = await getApps();

  const app = apps.find(
    (item) => item.id === Number(appId)
  );

  // IMPORTANT: Check before using app.ratings
  if (!app) {
    notFound();
  }

  const maxRating = Math.max(
    ...app.ratings.map((rating) => rating.count)
  );

 
    return (

      
   
         <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">

        {/* Main App Card */}
        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-10">

          {/* App Header */}
          <div className="flex flex-col gap-8 md:flex-row">

            {/* App Image */}
            <div className="flex justify-center md:justify-start">
            <Image src={app.image}
                width={100}
                height={100}
                alt={app.title}
                className="h-40 w-40 rounded-3xl object-cover shadow-lg md:h-48 md:w-48"/>
             
            </div>

            {/* App Information */}
            <div className="flex-1">
              <div className="mb-3">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                  Communication
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {app.title}
              </h1>

              <p className="mt-2 text-lg text-gray-500">
                {app.companyName}
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {app.ratingAvg}
                  </p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {app.reviews}
                  </p>
                  <p className="text-sm text-gray-500">Reviews</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {app.downloads}
                  </p>
                  <p className="text-sm text-gray-500">Downloads</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {app.size} MB
                  </p>
                  <p className="text-sm text-gray-500">Size</p>
                </div>

              </div>

              {/* Install Button */}

              <InstalledButton key={app.id} app={app}></InstalledButton>
              
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-gray-200" />

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              About this app
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-gray-600">
              {app.description}
            </p>
          </div>

          {/* Ratings Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Ratings & Reviews
            </h2>

            <div className="mt-8 flex flex-col gap-10 md:flex-row">

              {/* Average Rating */}
              <div className="flex min-w-45 flex-col items-center justify-center">
                <p className="text-6xl font-bold text-gray-900">
                  {app.ratingAvg}
                </p>

                <div className="mt-3 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                    key={star}
                    className={
                        star <= Math.floor(app.ratingAvg)
                        ? "text-2xl text-yellow-400"
                        : "text-2xl text-gray-300"
                    }
                    >
                   ★
                 </span>
                ))}
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {app.reviews} reviews
                </p>
              </div>

              {/* Rating Bars */}
                            <div className="flex-1 space-y-4">
                           {[...app.ratings]
                    .reverse()
                    .map((rating) => {
                    const percentage =
                        (rating.count / maxRating) * 100;

                    return (
                        <div
                        key={rating.name}
                        className="flex items-center gap-4"
                        >
                        {/* Star Name */}
                        <span className="w-14 text-sm font-medium text-gray-600">
                            {rating.name}
                        </span>

                        {/* Progress Bar */}
                        <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-200">
                            <div
                            className="h-full rounded-full bg-yellow-400"
                            style={{
                                width: `${percentage}%`,
                            }}
                            />
                        </div>

                        {/* Count */}
                        <span className="w-24 text-right text-sm text-gray-500">
                            {rating.count.toLocaleString()}
                        </span>
                        </div>
                    );
                    })}
                </div>



            </div>
          </div>

        </section>

      </div>
        </main>
    )
};
export default  AppDetailsPage;