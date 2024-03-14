"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import { FaBars } from 'react-icons/fa6';
import NavbarMobile from '../NavbarMobile/NavbarMobile';

const Header = () => {

  const [ openNav, setOpenNav ] = useState(false);

  return (
    <header className='w-full h-[70px] border-b border-[#1a6076] bg-blue-550'>
      <div className="container h-full flex items-center mx-auto">
        <div className="relative w-full h-full flex items-center justify-between">
          <Link href="/" className=' w-[200px] h-[50px]'>
            <Image src='/assets/img/logo.svg' alt='Логотип сайта' width={200} height={50} className='w-full h-full' />
          </Link>
          <NavbarMobile containerStyle={`${openNav ? 'max-h-max border-b border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0' } fixed h-full w-[250px] top-[68px]  right-0 transition-all duration-300 bg-[#1a6076] md:hidden`} />

          <Navbar containerStyle='hidden md:flex relative right-[-150px]' />
          <button onClick={() => setOpenNav(!openNav)} className=' top-0 text-3xl text-white h-full w-[80px] flex items-center justify-center bg-[#1a6076] md:hidden'>
              <FaBars />
            </button>
          
        </div>
      </div> 
    </header>
  )
}

export default Header