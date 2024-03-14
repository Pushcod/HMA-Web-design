import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Projects', url: '/sales' },
  { label: 'Videos', url: '/catalog' },
  { label: 'Contacts', url: '/contacts' }
];

const Navbar = ( { containerStyle } : { containerStyle: string } ) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex items-center justify-end gap-6">
        {menuLinks.map(( item, index ) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url} className='text-white font-semibold  hover:text-orange-500 text- transition-all'>{item.label}</Link>
              </li>
            </>
          )
        })}
        <Link href="" className='uppercase text-black/70 font-semibold py-[10px] px-[25px] hover:text-black hover:scale-[1.1] transition-all duration-300 bg-white'>Login</Link>
      </menu>
    </nav>
  )
}

export default Navbar;