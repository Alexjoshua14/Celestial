import { FC } from 'react'
import SignUp from './signUp'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import DropMenuItem from './dropMenuItem'
import { dropMenuContent } from '@/data/dropMenuContent'
import { IoClose } from 'react-icons/io5'

interface DropMenuProps {
  close: Function
}

const DropMenu: FC<DropMenuProps> = ({ close }) => {
  return (
    <div className="z-50 w-full sticky top-3 flex items-center justify-center transition-all">
      <div className="w-[95%] max-h-[90vh] p-6 flex flex-col gap-8 backdrop-blur-2xl rounded-lg border-[1px] border-white shadow-md overflow-auto">
        <div className="w-full flex justify-between">
          <h1 className="title">
            Menu
          </h1>
          <button onClick={() => close()}>
            <IoClose size={24} className="title" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
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