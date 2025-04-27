import React, { ReactEventHandler, ReactNode } from 'react'

const Button_Input_Absolute = ({children, func}: { children: ReactNode, func: ReactEventHandler}) => {
  return (
    <button type="button" className="absolute right-0 top-0 text-[13px] border-l-2 border-gray-200 dark:border-gray-700 px-2 py-[6px] cursor-pointer" onClick={func}>
        {children}
    </button>
  )
}

export default Button_Input_Absolute