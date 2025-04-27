"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Product_Images from './Product_Images';
import Product_Details from './Product_Details';
import { Heart } from 'lucide-react';
import { formatTitle } from '@/lib/helpers';

const ProductCard = ({product, index}: {product: any, index: number}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isHovered = hoveredIndex === index;

  return (
    <Link 
        href={`/products/${formatTitle(product.name)}`} 
        className="group block w-full"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className='relative aspect-square overflow-hidden'>
        <Product_Images
          image1={product.image1}
          image2={product.image2}
          title={product.name}
          isHovered={isHovered}
          index={index}
        />
        <p className='absolute top-0 left-0 z-10 bg-[var(--bg-collection-2)] py-1 px-4 max-sm:px-2 text-sm max-sm:text-[9px] uppercase font-semibold max-sm:font-normal'>buy 1 get 1</p>
        {/* <p className='absolute top-2 left-2 max-sm:top-1 max-sm:left-1 z-10 bg-red-600 py-[3px] px-[9px] font-medium text-[var(--white)] text-[13px] max-sm:text-[10px] rounded-[20px] transition-all duration-1000'>Sold Out</p> */}
          <button className={cn('absolute top-2 right-2 z-10 transition-all duration-1000', isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90")}>
            <Heart size={16} className='fill-white text-white'/>
          </button>
          <button className={cn('absolute bottom-2 right-2 max-sm:bottom-1 max-sm:right-1 z-10 bg-[var(--white)] py-[3px] px-[9px] uppercase font-medium text-[var(--black)] text-[12px] rounded-[20px] transition-all duration-1000', isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90")}>
            Add to bag
          </button>
      </div>
        <Product_Details product={product}/>
    </Link>
  )
}

export default ProductCard