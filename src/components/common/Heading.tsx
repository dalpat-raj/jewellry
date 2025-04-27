import React, { ReactNode } from 'react'

const Heading = ({children}: {children: ReactNode}) => {
  return (
    <h2 className={`text-center text-[30px] max-md:text-[24px] max-sm:text-[20px] `}>{children}</h2>
  )
}

export default Heading