import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/app/assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {

    const link =<>
        <li><Link href={'/Home'}>Home</Link></li>
        <li><Link href={'/installation'}>Installation</Link></li>
        
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm " >
            <div className='container mx-auto flex' >
                
                <div className="navbar-start container mx-auto">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                        
                    </ul>
                    </div>
                    <Link href={'/'} className='flex items-center gap-2'>
                    <Image src={Logo} alt="Nav Logo" width={45}height={45} />
                     {/* <p className='font-bold bg-linear-r from-[#632EE3] to-[#9F62F2 bg] bg-clip-text text-transparent'></p>    */}
                     <h2 className='font-bold text-[#632EE3]'>HERO.IO</h2>
                    </Link>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-1.5 px-5 rounded-[5px] text-[] 16px text-white flex items-center gap-2  "><FaGithub />Contribute</button>
                    {/* <a className="btn  bg-linear-r from-[#632EE3] to-[#9F62F2 bg] "> </a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;