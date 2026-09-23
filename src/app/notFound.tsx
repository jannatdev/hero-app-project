import Link from 'next/link';
import React from 'react';
import { FiArrowLeft, FiHome, FiSearch } from 'react-icons/fi';

const notFound = () => {
    return (
        <div>
            <div>
            return  <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8fafc] px-6"> {/* Background decorations */} 
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
                 <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" /> {/* Main Content */}
                  <div className="relative z-10 mx-auto max-w-2xl text-center"> {/* Small badge */} 
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600"> <span className="h-2 w-2 rounded-full bg-orange-500" /> Page not found </div> 
                    {/* 404 */} <h1 className="bg-linear-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-[130px] font-black leading-none tracking-tight text-transparent sm:text-[180px]"> 404 </h1> {/* Heading */} <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#10233d] sm:text-4xl"> Oops! You lost your way. </h2> {/* Description */}
                     <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-500 sm:text-lg"> The page you are looking for doesn&apos;t exist, has been moved, or may have been removed. </p> {/* Buttons */} <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"> {/* Home */} 
                        <Link href="/" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#10233d] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#10233d]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1b3557] sm:w-auto" >
                         <FiHome size={18} /> Back to Home </Link> 
                        {/* Go Back */} 
                        <button onClick={() => window.history.back()} className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md sm:w-auto" >
                             <FiArrowLeft size={18} /> Go Back </button> </div> 
                        {/* Search suggestion */}
                         <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-400"> <FiSearch size={16} /> 
                        <span>Try checking the URL or return to the homepage.</span> </div> 
                        </div> 
                        </main>
        </div>
        </div>
    );
};

export default notFound;