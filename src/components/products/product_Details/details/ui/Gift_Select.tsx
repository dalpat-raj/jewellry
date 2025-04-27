"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const Gift_Select = () => {
    const [gift, setGift] = useState<boolean>(false)
  return (
    <div className={cn("flex items-end gap-2 my-6 text-[14px] text-[var(--h-text-gray)] hover:underline transition-all duration-300 ease-in cursor-pointer", gift ? "text-blue-500" : "text-[var(--h-text-gray)]")} onClick={()=>setGift(!gift)}>
        <div className='flex items-center gap-2 col-span-8'>
            <input type="checkbox" className='w-4 h-4'  checked={gift ? true : false} readOnly/>
            <p className=''>🎁 is it a gift? Make it Special</p>
        </div>
        <p className='col-span-4'>₹ 399.00</p>
    </div>
  )
}

export default Gift_Select