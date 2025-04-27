import { poppins } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'

const Loyalty = () => {
  return (
    <div className={`bg-[var(--bg-loyality)] flex justify-between items-center max-sm:items-baseline gap-4 sm:gap-0 py-[30px] px-[45px] max-sm:px-2 max-lg:px-4 text-[13px] max-sm:text-[12px] font-normal ${poppins.className} [letter-spacing:0.5px]`}>
      {/* Item 1 */}
      <div className={`flex flex-col gap-[18px] items-center text-center w-full sm:w-auto`}>
        <div className='relative w-9 h-9'>
          <Image
            src="/icons/warranty1.png"
            alt="Lifetime Warranty icon"
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className='object-contain'
          />
        </div>
        <p className='leading-4'>Lifetime Warranty</p>
      </div>

      {/* Item 2 */}
      <div className='flex flex-col gap-[18px] items-center text-center w-full sm:w-auto'>
        <div className='relative w-9 h-9'>
          <Image
            src="/icons/organic1.png"
            alt="Skin Safe Jewellery icon"
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className='object-contain'
          />
        </div>
        <p className='leading-4'>Skin Safe Jewellery</p>
      </div>

      {/* Item 3 */}
      <div className='flex flex-col gap-[18px] items-center text-center w-full sm:w-auto'>
        <div className='relative w-9 h-9'>
          <Image
            src="/icons/gold1.png"
            alt="18k Gold Tone Plated icon"
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className='object-contain'
          />
        </div>
        <p className='leading-4'>18k Gold Tone Plated</p>
      </div>
    </div>
  )
}

export default Loyalty