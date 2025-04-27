import { ReactNode } from "react"

const Container = ({children}: {children: ReactNode}) => {
  return (
    <div className='w-full my-14 max-sm:my-8 mx-auto px-4'>{children}</div>
  )
}

export default Container