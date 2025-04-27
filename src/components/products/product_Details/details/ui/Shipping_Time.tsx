"use client"
import { poppins } from '@/lib/fonts'
import Image from 'next/image'
import React, { useState } from 'react'

const Shipping_Time = () => {
  const [checkPin, setCheckPin] = useState<boolean>(false)
  return (
    <div className='my-6'>
    <div className='flex justify-between items-center'>
        <div className='text-[16px] max-sm:text-sm font-medium'>
            <span>Typically arrives in</span>
            <span className='ml-2 py-[2px] px-[6px] bg-[var(--bg--prod-details-btn)] text-[var(--white)] rounded-sm'>3-4 Days</span>
        </div>
        <button onClick={()=>setCheckPin(!checkPin)} className='uppercase text-[var(--bg--prod-details-btn)] text-md max-sm:text-sm max-lg:text-[15px] underline cursor-pointer'>Check PinCode</button>
    </div>
    {
        checkPin && (
            <div className='relative w-full mt-2 max-sm:mt-3'>
                <form>
                    <input type="number" placeholder='Enter Your Pincode' className='w-full border-[1px] border-gray-300 px-3 py-[6px] text-sm text-[var(--h-text-color)] rounded-sm'/>
                    <button className='absolute right-0 top-0 h-full px-4 rounded-sm bg-[var(--bg--prod-details-btn)] text-[var(--white)] text-sm cursor-pointer'>Check</button>
            </form>
            </div>
        )
    }
     <div className={`mt-6 w-full flex items-center max-sm:items-baseline gap-0 text-[12px] text-[var(--text-color)] font-normal ${poppins.className} [letter-spacing:0.5px]`}>
          {/* Item 1 */}
          <div className={`basis-1/3 flex flex-col gap-[10px] items-center text-center w-full border-[1px] border-gray-200 py-2 sm:w-auto`}>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                src="/icons/Return_1.png"
                alt="Lifetime Warranty icon"
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className='object-contain'
              />
            </div>
            <p className='leading-4'>2 Days Return</p>
          </div>
    
          {/* Item 2 */}
          <div className='basis-1/3 flex flex-col gap-[10px] items-center text-center w-full border-[1px] border-gray-200 py-2 sm:w-auto'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                src="/icons/Exchange_1.png"
                alt="Skin Safe Jewellery icon"
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className='object-contain'
              />
            </div>
            <p className='leading-4'>10 Days Exchange</p>
          </div>
    
          {/* Item 3 */}
          <div className='basis-1/3 flex flex-col gap-[10px] items-center text-center w-full border-[1px] border-gray-200 py-2 sm:w-auto'>
            <div className='relative w-[28px] h-[28px]'>
              <Image
                src="/icons/Cash_on_delivery.png"
                alt="18k Gold Tone Plated icon"
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className='object-contain'
              />
            </div>
            <p className='leading-4'>Cash On Delivery</p>
          </div>
        </div>
    </div>
  )
}

export default Shipping_Time