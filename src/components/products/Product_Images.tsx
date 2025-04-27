import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Product_Images = (
    {
        image1,
        image2,
        title,
        isHovered,
        index
    } : {
        image1: string,
        image2: string,
        title: string
        isHovered: boolean,
        index: number,
    }
) => {
  return (
    <>
        <Image
            src={image1}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw,
                    (max-width: 768px) 33vw,
                    (max-width: 1024px) 25vw,
                    (max-width: 1280px) 20vw,
                    16vw"
            className={cn(
                "object-cover transition-all duration-1000",
                isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            )}
            quality={85}
            priority={index < 3}
        />
        <Image
            src={image2}
            alt={`${title} alternate view`}
            fill
            sizes="(max-width: 640px) 50vw,
                    (max-width: 768px) 33vw,
                    (max-width: 1024px) 25vw,
                    (max-width: 1280px) 20vw,
                    16vw"
            className={cn(
                "object-cover transition-all duration-1000",
                isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
            )}
            quality={85}
        />
        <div className={cn(
            "w-full h-full absolute top-0 left-0 max-lg:hidden transition-all duration-1000",
            isHovered ? "product-black-overlay scale-110 opacity-100" : "opacity-0 scale-100"
        )}></div>
    </>
  )
}

export default Product_Images