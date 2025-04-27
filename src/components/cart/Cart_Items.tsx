import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cart_Items = () => {

    function increment(){
        
    }
    function decrement(){

    }
  return (
    <div>
        <div className='overflow-y-scroll h-[34vh] mini-scrollbar'>
            <div className='flex gap-4 items-start border-b-[1px] border-gray-200 mb-6 pb-4'>
            <Image
                src={"/assets/1.jpeg"}
                alt='cart payment'
                width={0}
                height={0}
                sizes='100vw'
                style={{width: "100px", height: "130px", objectFit: "cover"}}
            />
                <div>
                    <h4>Drop Bead Necklace</h4>
                    <div className='flex gap-4 items-center text-[12px] mt-1 mb-2'>
                        <span className=''>₹ 3,247.00</span>
                        <span>₹ 2,273.00</span>
                    </div>

                    <div className='flex justify-items-start flex-wrap items-center gap-4'>
                        <div className='mt-2 h-8 w-28 border border-gray-300 bg-white grid grid-cols-3 items-center'>
                            <button onClick={()=>decrement()} className='col-span-1 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700 cursor-pointer'><Minus size={10}/> </button>
                            <p className='col-span-1 text-center text-black text-[14px]'>1</p>
                            <button onClick={()=>increment()} className='col-span-1 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700 cursor-pointer'><Plus size={10}/> </button>
                        </div>
                        <div className='text-center text-[13px] font-normal'>
                            <del>₹ 12,988.00</del>
                            <ins className='pl-4 no-underline'>₹ 9,092.00</ins>  
                        </div>    
                    </div>

                    <div className='grid grid-cols-12 items-center gap-4 mt-4 text-[14px] text-[var(--h-text-gray)] hover:underline transition-all duration-300 ease-in cursor-pointer'>
                        <div className='flex items-center gap-4 col-span-8'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <p className=''>🎁 is it a gift? Make it Special</p>
                        </div>
                        <p className='col-span-4'>₹ 399.00</p>
                    </div>
                    
                </div>
            </div>
            <div className='flex gap-4 items-start border-b-[1px] border-gray-200 mb-6 pb-4'>
            <Image
                src={"/assets/1.jpeg"}
                alt='cart payment'
                width={0}
                height={0}
                sizes='100vw'
                style={{width: "100px", height: "130px", objectFit: "cover"}}
            />
                <div>
                    <h4>Drop Bead Necklace</h4>
                    <div className='flex gap-4 items-center text-[12px] mt-1 mb-2'>
                        <span className='through'>₹ 3,247.00</span>
                        <span>₹ 2,273.00</span>
                    </div>

                    <div className='flex justify-items-start flex-wrap items-center gap-4'>
                        <div className='mt-2 h-8 w-28 border border-gray-300 bg-white grid grid-cols-3 items-center'>
                            <button onClick={()=>decrement()} className='col-span-1 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700 cursor-pointer'><Minus size={10}/> </button>
                            <p className='col-span-1 text-center text-black text-[14px]'>1</p>
                            <button onClick={()=>increment()} className='col-span-1 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700 cursor-pointer'><Plus size={10}/> </button>
                        </div>
                        <div className='text-center text-[13px] font-normal'>
                            <del>₹ 12,988.00</del>
                            <ins className='pl-4 no-underline'>₹ 9,092.00</ins>  
                        </div>
                    </div>

                    <div className='grid grid-cols-12 items-center gap-4 mt-4 text-[14px] text-[var(--h-text-gray)] hover:underline transition-all duration-300 ease-in cursor-pointer'>
                        <div className='flex items-center gap-4 col-span-8'>
                            <input type="checkbox" className='w-4 h-4'/>
                            <p className=''>🎁 is it a gift? Make it Special</p>
                        </div>
                        <p className='col-span-4'>₹ 399.00</p>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='w-full bg-[var(--bg-cart)] absolute bottom-0 left-0'>
            <div className='w-9/11 m-auto py-4'>
                <div>
                    <button className='w-full bg-[var(--bg-btn-primary)] text-[13px] font-normal text-[var(--white)] py-2 rounded-lg'>LIFETIME WARRANTY | EVERYDAY JEWELLERY</button>
                    
                    <div className='w-full h-[1px] bg-gray-500 my-4'></div>

                    <div className='flex justify-between items-center'>
                        <span>Subtotal:</span>
                        <span>₹ 12,588.00</span>
                    </div>

                    <div className='w-full bg-[var(--white)] mt-2'>
                        <Image
                            src={"/assets/cart_payment.png"}
                            alt='cart payment'
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{width: "100%", height: "34px", objectFit: "contain"}}
                        />
                    </div>

                    <div className='mt-2 bg-[var(--bg-btn-secondryry)] text-white text-center py-3 uppercase text-[14px] [letter-spacing:2px]'>
                        <Link href={"/checkout"}>Proceed to secure checkout</Link>
                    </div>
                    <div className='mt-3 bg-[var(--bg-btn-secondryry)] text-white text-center py-3 text-[12px] font-normal uppercase
                    '> 
                        <Link href={"/checkout"}>international Order</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart_Items