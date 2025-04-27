import { TicketPercent } from 'lucide-react'
import Color_Select from '@/components/products/product_Details/details/ui/Color_Select';
import Gift_Select from '@/components/products/product_Details/details/ui/Gift_Select';
import Button from '@/components/products/product_Details/details/ui/Button';
import More_Details from '@/components/products/product_Details/details/ui/more-details/More_Details';
import Loyalty from '@/components/products/product_Details/details/ui/Loyalty';
import Shipping_Time from '@/components/products/product_Details/details/ui/Shipping_Time';
import Rating from '@/components/common/Rating'
import Link from 'next/link'



const Product_Details = () => {
  
  return (
    <div className='col-span-1 max-sm:col-span-2 scroll-smooth overflow-scroll no-scrollbar overflow-y-auto pl-28 max-lg:pl-6 max-md:pl-2 max-sm:pl-0'>
        <div className='flex justify-between items-start max-sm:items-baseline '>
            <h2 className="text-[26px] max-sm:text-[18px] font-normal mb-4">Crystal Love Bangle Bracelet</h2>
            <div className='flex items-center gap-2 mr-4'>
                <Rating rating={3.5} size={13} color='--h-rating-dark'/> 
                <span className='text-[12px] text-[var(--h-text-gray)]'>(284)</span>
            </div>
        </div>
        <div className='flex items-center gap-3'>
          <del className='text-[13px]'>
            <span>MRP &nbsp;</span>  
            <span>₹ 3,799</span>
          </del>
          <ins className='text-[14px] no-underline'>
            <span>₹ 2,346</span>
          </ins>
          <p className='bg-black text-white text-[13px] px-2 py-[2px] rounded-sm'>SAVE 38%</p>
        </div>
        <div >
          <span className='text-[var(--h-text-gray)] text-sm leading-10 max-sm:leading-6'>Inclusive of all taxes</span>
        </div>
        <div className=''>
          <span className='text-[var(--h-text-gray)] text-[11px]'>SKU:</span>
          <span className='text-[var(--black)] text-[11px] pl-1'>BR076</span>
        </div>

        <div className='mt-[10px] text-[var(--offer-text)] text-[15px] font-medium border-t border-b border-gray-200 py-6'>
          <div className='flex flex-col sm:flex-row gap-2'>
            <div className='flex gap-2'>
              <TicketPercent size={20} className="flex-shrink-0 mt-0.5" />
              <p className='text-start'>
                Buy 1 Get 1 Free Use Code: 
                <strong className='font-medium'> B1G1 </strong> 
                at checkout
              </p>
            </div>
            <Link 
              href={"/"} 
              className='font-medium whitespace-nowrap sm:ml-auto text-start sm:text-end'
            >
              See All Offers
            </Link>
          </div>
        </div>

        {/* <div className='flex items-center gap-[5px] my-6'>
          <CircleCheckBig size={20} color='green'/>
          <span className='text-sm'>In stock - ready to ship</span>
        </div> */}

        <Color_Select/>
        <Gift_Select/>
        <Button/>
        <More_Details/>
        <Loyalty/>
        <Shipping_Time/>
         
    </div>
  )
}

export default Product_Details