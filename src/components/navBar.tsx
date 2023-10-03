'use client'

import { FC, useCallback, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import DropMenu from './dropMenu';
import Link from 'next/link';

interface NavBarProps extends React.HTMLAttributes<HTMLElement> {

}

/**
 * 
 * TODO: shadow should be present when navBar is overlayed
 */
const NavBar: FC<NavBarProps> = ({ ...props }) => {
  const [showDropMenu, toggleDropMenu] = useState(false);

  const closeDropMenu = useCallback(() => {
    toggleDropMenu(false)
  }, [toggleDropMenu]);

  return showDropMenu ?
    (
      <DropMenu close={closeDropMenu} />
    )
    : (
      <section className="z-40 h-[4.5rem] w-full sticky top-0 backdrop-blur-2xl flex items-center justify-between px-8 py-4 transition-all" {...props}>
        <h1 className="text-primary-800 font-bold text-2xl">
          celestial
        </h1>
        <div className="flex gap-2 text-lg font-light">
          <Link href="/" className="clickable">
            <p>
              Login
            </p>
          </Link>
          <button onClick={() => toggleDropMenu(true)} className="flex items-center justify-center gap-1 clickable">
            <p>
              Menu
            </p>
            <IoChevronDown size={16} />
          </button>
        </div>
      </section>
    )
}

export default NavBar