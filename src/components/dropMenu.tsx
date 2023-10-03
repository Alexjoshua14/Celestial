import { FC } from 'react'

import { IoClose } from 'react-icons/io5'

import DropMenuItem from './dropMenuItem'
import SignUp from './signUp'
import { Accordion } from './ui/accordion'
import { dropMenuContent } from '@/data/dropMenuContent'

interface DropMenuProps {
  close: Function
}

const DropMenu: FC<DropMenuProps> = ({ close }) => {
  return (
    <div className="z-40 w-full sticky top-3 flex items-center justify-center transition-all">
      <div className="w-[95%] max-h-[90vh] relative backdrop-blur-2xl rounded-lg border-[1px] border-white shadow-md overflow-auto">
        <div className="z-50 w-full h-full p-6 flex justify-between sticky top-0 bg-gradient-to-t to-background-primary from-transparent to-20%">
          <h1 className="title">
            Menu
          </h1>
          <button onClick={() => close()}>
            <IoClose size={24} className="title" />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-6 pt-10">
          <Accordion type="single" collapsible className="flex flex-col gap-4 header">
            {dropMenuContent.map(section => (
              <DropMenuItem key={section.title} section={section} />
            ))}
          </Accordion>
          <div className="w-full">
            <SignUp className="w-full bg-primary-800" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropMenu