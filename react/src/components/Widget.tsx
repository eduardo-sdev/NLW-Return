import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel className="text-white">
        Hello Word!
      </Popover.Panel>

      <Popover.Button 
        className="flex items-center h-12 px-3 text-white rounded-full bg-brand-500 group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="overflow-hidden max-w-0 group-hover:max-w-xs translate-all duration-500 ease-linear">
          <span className="pl-2">
            Feedback
          </span>
        </span>
      </Popover.Button>
    </Popover>
  )
}

