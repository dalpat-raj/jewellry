import React, { ReactNode } from 'react'

const Button_Primary = ({children}: {children: ReactNode}) => {
  return (
    <button className='uppercase border-[1px] border-black py-2 px-6 text-lg cursor-pointer'>{children}</button>
  )
}

export default Button_Primary