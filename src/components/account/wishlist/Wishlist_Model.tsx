import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import Rating from '@/components/common/Rating'

const Wishlist_Model = () => {
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
                    style={{width: "100px", height: "100px", objectFit: "cover"}}
                />
                <div>
                    <div className='flex gap-2 items-center'>
                        <Rating rating={3.5} size={16}/>
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
            <div className='mt-6 mr-4 text-[var(--h-text-gray)]  '>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Heart size={18} className='cursor-pointer hover:fill-black transition-colors duration-600 delay-200'/>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>Add to Wishlist</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>
        </div>        
    </div>
  )
}

export default Wishlist_Model