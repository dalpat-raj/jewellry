import { ArrowRight, Heart, MoveDownRight, ShoppingBag } from 'lucide-react'
import React from 'react'

const Button = () => {
  return (
    <div className='mt-3'>
        <div className='grid grid-cols-2 gap-1 text-white text-[13px]'>
            <button className='col-span-11 bg-[var(--bg-btn-secondry)] hover:bg-[var(--bg-btn-secondary-hover)] flex justify-center items-center gap-2 py-[14px] cursor-pointer transition-all duration-300'>
                <ShoppingBag size={18}/>
                <span className='pt-1 font-medium'>ADD TO BAG</span>
                <ArrowRight size={20}/>
            </button>
            <button className='col-span-1 bg-[var(--bg-btn-secondry)] py-[14px] px-3 cursor-pointer'>
                <Heart size={20} className='fill-white'/>
            </button>
            <button className='col-span-12 bg-[var(--bg-btn-secondry)] py-[14px] cursor-pointer'>BUY IT NOW</button>
        </div>
    </div>
  )
}

export default Button