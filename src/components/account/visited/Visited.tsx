import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Visited_Model = () => {
  return (
    <div className='overflow-y-scroll h-[79vh] mini-scrollbar'>
        <div className='flex justify-between mb-8 relative after:absolute after:-top-5 after:left-0 after:w-full after:border-t after:border-gray-300 after:h-0'>
            <div className='flex justify-items-start items-center gap-4'>
                <Image
                    src={"/assets/1.jpeg"}
                    alt='cart payment'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width: "100px", height: "130px", objectFit: "cover"}}
                />
                <div>
                    <div className='flex gap-2 items-center'>
                        <div>rating</div>
                        <p className='text-[var(--text-color)] text-[14px]'>(6)</p>
                    </div>
                    <Link href={"/"} className='text-[14px] hover:text-[var(--text-color)] transition-colors duration-300'>Two Layered Solitaire Dalapat Dadais Drop Necklace</Link>
                    <div className='flex items-center gap-2'>
                        <span className='text-[var(--black)] [word-spacing:3px] text-[12px]'>₹ 3,623.00</span>
                        <del className='text-[var(--black)] text-[12px]'>₹ 5,176.00</del>
                        <span className='text-[var(--d-text-color)] font-bold text-[12px] [letter-spacing:0.5px]'>(30%)</span>
                    </div>
                    
                </div>
            </div>
            <div className='mt-4 mr-4 text-[var(--h-text-gray)]'>
                <Heart size={18}/>
            </div>
        </div>        
    </div>
  )
}

export default Visited_Model