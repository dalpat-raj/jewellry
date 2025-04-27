"use client"
import { UserRound } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function Account() {

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <Dialog>
            <DialogTrigger asChild><UserRound size={22} /></DialogTrigger>
            <DialogContent className="!max-w-[900px] max-lg:w-[320px] [&>button]:hover:bg-[var(--white)] [&>button]:text-white [&>button]:max-sm:text-[var(--h-text-gray)] [&>button]:hover:text-[var(--h-text-gray)] [&>button]:rounded-md [&>button]:h-10 [&>button]:w-8 [&>button]:-top-4 [&>button]:max-sm:top-0 [&>button]:-right-10 [&>button]:max-sm:right-0 [&>button]:flex [&>button]:justify-center [&>button]:items-center bg-[var(--bg-pink-light)] border-0 p-4">

                <DialogTitle className="sr-only">Are you absolutely sure?</DialogTitle>
                <div className="flex justify-between max-lg:flex-col">
                    <div className=" p-4 max-lg:p-0">
                        <div className="flex items-center justify-center gap-12 max-lg:gap-6 max-lg:mt-10">
                            <h2 className="uppercase text-[32px] max-lg:text-[14px] tracking-widest mt-4 max-lg:mt-0">palmonas</h2>
                            <Image
                                src={"/icons/kp_black.png"}
                                alt="kwick pass"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: "60px", height: "30px", objectFit: "contain"}}
                            />
                        </div>
                        <div className="mb-12 mt-8 max-lg:mb-6 max-lg:mt-4 max-lg:px-12 max-sm:px-6">
                            <h5 className="text-center text-[20px] leading-6 font-bold ">Welcome to Palmonas!</h5>
                            <h5 className="text-center text-[20px] leading-6 font-bold ">India's 1st Demifine Jewellery Brand</h5>
                        </div>

                        <div className="max-lg:hidden flex place-items-center gap-4 text-center pr-4">
                            <div className="border border-gray-600 shadow-[inset_0px_0px_8px_4px_rgba(0,0,0,0.25)] rounded-3xl flex flex-col items-center gap-2 px-4 py-8">
                                <Image
                                    src={"/icons/gowStar.png"}
                                    alt="kwick pass"
                                    width={0}
                                    height={0}  
                                    sizes="100vw"
                                    style={{width: "30px", height: "30px", objectFit: "cover"}}
                                    className="border-1 border-gray-300 rounded-full"
                                />
                                <p className="text-[15px] font-medium">Powered by Demifine</p>
                                <p className="text-[12px] leading-4 text-[var(--h-text-color)]">Built to Last, Swim, Sweat, No Tarnish, no worries</p>
                            </div>
                            <div className="border border-gray-600 shadow-[inset_0px_0px_8px_4px_rgba(0,0,0,0.25)] rounded-3xl flex flex-col items-center gap-2 px-4 py-8">
                                <Image
                                    src={"/icons/gowStar.png"}
                                    alt="kwick pass"
                                    width={0}
                                    height={0}  
                                    sizes="100vw"
                                    style={{width: "30px", height: "30px", objectFit: "cover"}}
                                    className="border-1 border-gray-300 rounded-full"
                                />
                                <p className="text-[15px] font-medium">Powered by Demifine</p>
                                <p className="text-[12px] leading-4 text-[var(--h-text-color)]">Built to Last, Swim, Sweat, No Tarnish, no worries</p>
                            </div>
                            <div className="border border-gray-600 shadow-[inset_0px_0px_8px_4px_rgba(0,0,0,0.25)] rounded-3xl flex flex-col items-center gap-2 px-4 py-8">
                                <Image
                                    src={"/icons/gowStar.png"}
                                    alt="kwick pass"
                                    width={0}
                                    height={0}  
                                    sizes="100vw"
                                    style={{width: "30px", height: "30px", objectFit: "cover"}}
                                    className="border-1 border-gray-300 rounded-full"
                                />
                                <p className="text-[15px] font-medium">Powered by Demifine</p>
                                <p className="text-[12px] leading-4 text-[var(--h-text-color)]">Built to Last, Swim, Sweat, No Tarnish, no worries</p>
                            </div>
                        </div>

                        <div className="min-lg:hidden border-1 w-[290px] border-white flex px-2 py-1 rounded-3xl mb-4">
                            <Image
                                src={"/icons/gowStar.png"}
                                alt="kwick pass"
                                width={0}
                                height={0}  
                                sizes="100vw"
                                style={{width: "28px", height: "28px", objectFit: "cover"}}
                                className="border-1 border-gray-300 rounded-full"
                            />
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlaySpeed={3000}
                                keyBoardControl={true}
                                customTransition="all .5s"
                                transitionDuration={500}
                                arrows={false}
                                // autoPlay={true}
                                containerClass="w-full"
                                dotListClass="custom-dot-list max-sm:!bottom-[56.5%]"
                                itemClass="carousel-item-padding-40-px"
                                 >
                                    {["/icons/gowStar.png", "/icons/gowStar.png", "/icons/gowStar.png"].map((item, i) => (
                                        <div key={i}>
                                            <p  className="text-[13px] font-medium text-center">Powered by Demifine</p>
                                        </div>
                                    ))}
                                </Carousel>
                        </div>
                    </div>

                    <div className="basis-[538px] max-lg:basis-1 bg-white rounded-md px-8 py-8 max-lg:p-4">
                        <div className="text-center mt-12 max-lg:mt-0">
                            <h4 className="text-[24px] text-[var(--h-text-login)] font-extrabold">Explore Palmonas</h4>
                            <p className="text-[12px] font-normal text-[var(--h-text-color)]">Affordable Luxury, Made for Every Day!</p>
                        </div>
                        <div className="mt-8 max-lg:mt-6">
                            <form action="">
                                <input 
                                type="text" 
                                placeholder="Enter Mobile Number"
                                className="w-full border-1 border-gray-300 focus-shadow-[0px_2px_4px_0px_var(--login)] rounded-md text-[var(--black)] text-md px-4 py-2"
                                />
                                <div className="flex place-content-start gap-2 my-3 max-lg:my-2">
                                    <input type="checkbox" />
                                    <p className="text-[13px] leading-4 text-[var(--h-text-gray)]">Notify me with offers & updates</p>
                                </div>
                                <button className="w-full bg-[var(--bg-pink-light-1)] border-1 border-gray-300 text-black py-2 text-[15px] font-semibold rounded-md ">Submit</button>
                            </form>
                        </div>
                        <div className="text-center max-lg:text-left mt-14 max-lg:mt-6">
                            <p className="text-[11px] leading-4 text-[var(--h-text-gray)]">I accept that I have read & understood your</p>
                            <p className="text-[12px] leading-4 text-[var(--h-text-gray)] underline">Privacy Policy and T&Cs.</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}