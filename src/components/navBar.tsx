'use client'

import Link from 'next/link';
import { FC, useCallback, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

import DropMenu from './dropMenu';

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
      <section className="z-40 h-[4.5rem] w-full sticky top-0 backdrop-blur-2xl px-4 sm:px-8 lg:px-24 py-4 flex items-center justify-center transition-all" {...props}>
        <div className="flex items-center justify-between w-full max-w-[1300px]">
          <Link href="/" className="text-primary-800 hover:text-primary-900 transition-all">
            <h1 className=" font-bold text-2xl">
              celestial
            </h1>
          </Link>
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
        </div>
      </section>
    )
}

export default NavBar