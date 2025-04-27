"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import Link from "next/link"

const Carousels = () => {
  return (
    <div className='w-full'>
        <Carousel className='' 
            opts={{
                align: "start",
                loop: true,
                duration: 50,
            }}
            // plugins={[
            //     Autoplay({
            //     delay: 6000,
            //     })
            // ]}
            >
            <CarouselContent className="max-md:hidden">
                {
                    ["/assets/b-d-1.jpeg", "/assets/b-d-2.png", "/assets/b-d-3.png"].map((item, i)=>(
                        <CarouselItem key={i}>
                            <Link href={"/raj"}>
                                <Image
                                    src={item}
                                    alt="Product Image"
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    style={{width: "100%", height: "100%", objectFit: "cover", transition: "ease"}}
                                />
                            </Link>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselContent className="min-md:hidden">
                {
                    ["/assets/b-m-1.png", "/assets/b-m-2.png", "/assets/b-m-3.png"].map((item, i)=>(
                        <CarouselItem key={i}>
                            <div className="">
                                <Image
                                    src={item}
                                    alt="Product Image"
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    style={{width: "100%", height: "100%", objectFit: "cover", transition: "ease"}}
                                />
                            </div>
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

export default Carousels