import { FC } from 'react'
import { IoChevronDown } from 'react-icons/io5'

interface NavBarProps extends React.HTMLAttributes<HTMLElement> {

}

/**
 * 
 * TODO: shadow should be present when navBar is overlayed
 */
const NavBar: FC<NavBarProps> = ({ ...props }) => {
  return (
    <section className="z-50 h-[4.5rem] w-full sticky top-0 backdrop-blur-2xl flex items-center justify-between px-8 py-4" {...props}>
      <h1 className="text-primary-800 font-bold text-2xl">
        celestial
      </h1>
      <div className="flex gap-8 text-lg font-light">
        <p>
          Login
        </p>
        <div className="flex items-center justify-center gap-1">
          <p>
            Menu
          </p>
          <IoChevronDown size={16} />
        </div>
      </div>
    </section>
  )
}

export default NavBar