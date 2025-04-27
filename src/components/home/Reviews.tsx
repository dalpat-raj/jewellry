import React from 'react'
import Container from '@/components/common/Container'
import { italianno } from '@/lib/fonts';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Rating from '../common/Rating';
import Image from 'next/image';
import Link from 'next/link';
import Button_Primary from '../common/Button_Primary';

const Reviews = () => {
    const ratings = [
        {name: "Dalpat Raj", image: "/products/p-1.png", title: "small heart hoop earrings", desc: "It is gold plated product, so expect to have e-certificate and physical certificate of it, mentioned how much (gm) and what carate gold , even in small amount."},
        {name: "Dalpat Raj", image: "/products/p-2.png", title: "golden love hoops", desc: "First experience with Palmonas and it truly is beautiful The size of the Bracelet is OVAL shape and as a curvy size I didn’t expect it to fit perfectly"},
        {name: "Dalpat Raj", image: "/products/p-3.png", title: "small heart hoop earrings golden love hoops heart hoop earrings golden love", desc: "i love the quality of the product  i had been using palmonas products since 3 yrs"},
        {name: "Dalpat Raj", image: "/products/p-2.png", title: "golden love hoops", desc: "First experience with Palmonas and it truly is beautiful The size of the Bracelet is OVAL shape and as a curvy size I didn’t expect it to fit perfectly"},
        {name: "Dalpat Raj", image: "/products/p-1.png", title: "small heart hoop earrings", desc: "It is gold plated product, so expect to have e-certificate and physical certificate of it, mentioned how much (gm) and what carate gold , even in small amount."},
    ]
  return (
    <Container>
        <h2 className={`${italianno.className} text-center text-[var(--h-rating)] text-[35px] font-medium`}>Trusted by our community</h2>
        
        <Carousel 
            className="w-full mt-10 max-sm:mt-4"
            opts={{
                align: "start",
                loop: true,
                duration: 50,
            }}
        >
            <CarouselContent>
                {ratings.map((item, i) => (
                    <CarouselItem 
                        key={i}
                        className="sm:basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/4 "
                    >
                        <div  
                            className='flex flex-col justify-between gap-12 items-center h-full'
                            >
                            <Link href={"/reviews"} className='flex flex-col items-center text-center'>
                                <Rating rating={4} size={18}/>
                                <p className='capitalize text-[var(--text-color)] text-lg font-medium pt-3 pb-4'>
                                {item.name}
                                </p>
                                <p className='text-md leading-6 text-[var(--black)]'>{item.desc}</p>
                            </Link>
                            
                            <Link href={"/product"} className='bg-[var(--bg-cart)] inline-flex items-center gap-3 rounded-xl p-3 mt-auto'>
                                <Image
                                src={item.image}
                                alt={item.title}
                                width={70}
                                height={70}
                                className='object-cover'
                                />
                                <span className='text-md text-black font-medium underline'>{item.title}</span>
                            </Link>
                        </div>
                    </CarouselItem>   
                ))}             
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
        
        <div className='text-center mt-8'>
            <Button_Primary>View all reviews</Button_Primary>
        </div>
    </Container>
  )
}

export default Reviews