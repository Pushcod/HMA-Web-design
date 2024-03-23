import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Projects', url: '/sales' },
  { label: 'Videos', url: '/catalog' },
  { label: 'Contacts', url: '/contacts' }
];

const NavbarMobile = ({ containerStyle } : { containerStyle: string }) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex flex-col items-center gap-10 ">
        {menuLinks.map((item, index) => {
          return (
            <>
              <li key={index}>
                
                <Link href={item.url}  className='text-white hover:text-orange-500 transition-all'>{item.label}</Link>
                
              </li>
              
            </>
          );
        })}
        <Link href="" className='uppercase text-[#1a6076] py-[10px] px-[25px] hover:text-[#1a6076] hover:scale-[1.1] transition-all duration-300 bg-white'>Login</Link>
      </menu>
    </nav>
  )
}

export default NavbarMobile
