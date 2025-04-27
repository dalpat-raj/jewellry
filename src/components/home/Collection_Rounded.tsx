"use client"
import React from 'react'
import Heading from '../common/Heading'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

const Collection_Rounded = () => {
  return (
    <div className='my-8'>
        <Heading>Everyday Fession Jewellery</Heading>
        <Carousel className="w-full mt-4 px-4"
            opts={{
                align: "start",
                loop: true,
                duration: 50,
                slidesToScroll: "auto"
            }}
            // plugins={[
            //     Autoplay({
            //     delay: 6000,
            //     })
            // ]}
        >
            <CarouselContent>
                {
                    ["/collection/c-1.png", "/collection/c-2.png", "/collection/c-3.png", "/collection/c-4.png", "/collection/c-5.png", "/collection/c-1.png"].map((item, i)=>(
                        <CarouselItem className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5" key={i}>
                            <Link href={"/"} className="relative aspect-square w-full flex flex-col gap-2 items-center">
                                <Image
                                    src={item}
                                    alt="Product Image"
                                    fill
                                    sizes="100vw"
                                    className='object-cover rounded-full'
                                />
                            </Link>
                            <p className="mt-2 uppercase text-center text-[16px] max-sm:text-[15px] font-medium ">Necklace</p>
                        </CarouselItem>   
                    ))
                }             
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default Collection_Rounded


           