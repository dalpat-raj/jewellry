import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import Image from "next/image";

export default function Footer(){
    return ( 
        <div className="my-24 ">
            <div className="max-md:hidden px-4 grid grid-cols-4 max-lg:grid-cols-2 gap-8">
                <div className="col-span-1">
                    <h4 className="text-[18px] max-sm:text-sm">Subscribe to receive exciting gifts!</h4>
                    <div className="relative my-6">
                        <input 
                        type="text"
                        placeholder="Your email address"
                        className="w-full px-3 py-3 border-[1px] border-gray-200 text-sm text-[var(--h-text-gray)] focus:outline-none"
                        />
                        <div className="absolute right-4 top-2">
                            <Mail size={24} color="black"/>
                        </div>
                    </div>
                    <div className="text-sm text-[var(--h-text-gray)] flex flex-col gap-4">
                        <div className="line-clamp-3 max-sm:line-clamp-4 hover:text-[var(--black)] transition-all duration-150 ease relative">
                        <MapPin className="absolute top-0 left-0" size={14}/> 
                        <span className="">
                            &nbsp; &nbsp; &nbsp; Office No 501/502/503/504/505(A) 5th Floor, Verdant 84, Plot 1, Lane Z, Koregaon Park Annexe, Mundhwa, Pune, Maharashtra 411036.
                        </span>
                        </div>
                    
                        <div className="hover:text-[var(--black)] transition-all duration-150 ease relative">
                            <Link href={"tel:+919587478769"}>
                            <Phone size={14} className="absolute top-1 left-0"/>
                            <p>&nbsp; &nbsp; &nbsp;+91 93561 03736</p>
                            <span>(9 AM and 9 PM, available all week)</span>
                            </Link>
                        </div>
                        <div className="hover:text-[var(--black)] transition-all duration-150 ease relative">
                        <Link href="mailto:dalpatt1212@gmail.com">
                            <Mail size={14} className="absolute top-0 left-0"/>
                            <span>&nbsp; &nbsp; &nbsp;care@palmonas.com</span>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <h4 className="">Help</h4>
                    <div className="w-16 h-[1px] mt-2 bg-black"></div>
                    <ul className="my-6">
                        {['FAQ\'s', 'Shipping & Handling', 'Return & Exchange', 'Warranty Policy', 
                        'Refund Policy', 'Contact Us', 'Terms of Service', 'Privacy Policy', 
                        'Request for Return / Exchange'].map((item) => (
                        <li key={item}>
                            <Link href="/" className="text-[var(--h-text-gray)] hover:text-[var(--black)] text-[14px] my-3 transition-all duration-200 ease-in block">
                            {item}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-1">
                <h4 className="">All About Benefits</h4>
                    <div className="w-16 h-[1px] mt-2 bg-black"></div>
                    <ul className="my-6">
                        <li className="text-[var(--h-text-gray)] hover:text-[var(--black)] text-[14px] my-3 transition-all duration-200 ease-in">
                            <Link href={"/"}>Lifetime Buy-Back Policy</Link>
                        </li>
                        <li className="text-[var(--h-text-gray)] hover:text-[var(--black)] text-[14px] my-3 transition-all duration-200 ease-in">
                            <Link href={"/"}>Lifetime Warranty Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                <h4 className="">About Us</h4>
                    <div className="w-16 h-[1px] mt-2 bg-black"></div>
                    <ul className="my-6">
                        {['About Us', 'Blogs', 'Contact Us', 'Stores & Services'].map((item) => (
                        <li key={item}>
                            <Link href="/" className="text-[var(--h-text-gray)] hover:text-[var(--black)] text-[14px] my-3 transition-all duration-200 ease-in block">
                            {item}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* mobile footer  */}
            <div className="min-md:hidden max-sm:my-4 px-4">
            <div className="mt-10">
                <h4 className="text-[18px] max-sm:text-base">Subscribe to receive exciting gifts!</h4>
                <div className="w-[80%] max-sm:w-full relative mt-2 mb-4">
                    <input 
                    type="text"
                    placeholder="Your email address"
                    className="w-full px-3 py-3 border-[1px] border-gray-200 text-sm text-[var(--h-text-gray)] focus:outline-none"
                    />
                    <div className="absolute right-4 top-2">
                        <Mail size={24} color="black"/>
                    </div>
                </div>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="help">
                    <AccordionTrigger className="text-base font-normal text-[var(--h-text-color)] hover:no-underline cursor-pointer">Help</AccordionTrigger>
                    <AccordionContent>
                    <ul className="">
                    {['FAQ\'s', 'Shipping & Handling', 'Return & Exchange', 'Warranty Policy', 
                        'Refund Policy', 'Contact Us', 'Terms of Service', 'Privacy Policy', 
                        'Request for Return / Exchange'].map((item) => (
                        <li key={item}>
                            <Link href="/" className="text-[var(--h-text-gray)] hover:text-[var(--black)] text-[14px] my-3 transition-all duration-200 ease-in block">
                            {item}
                            </Link>
                        </li>
                    ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="all about">
                    <AccordionTrigger className="text-base font-normal text-[var(--h-text-color)] hover:no-underline cursor-pointer">All About Benefits</AccordionTrigger>
                    <AccordionContent>
                    <ul className="mt-2">
                    {['Lifetime Buy-Back Policy', 'Lifetime Warranty Policy'].map((item) => (
                        <li key={item}>
                            <Link href="/" className="text-[var(--h-text-gray)] hover:text-[var(--black)] text-[14px] my-3 transition-all duration-200 ease-in block">
                            {item}
                            </Link>
                        </li>
                    ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="about">
                    <AccordionTrigger className="text-base font-normal text-[var(--h-text-color)] hover:no-underline cursor-pointer">About Us</AccordionTrigger>
                    <AccordionContent>
                    <ul className="mt-2">
                    {['About Us', 'Blogs', 'Contact Us', 'Stores & Services'].map((item) => (
                        <li key={item}>
                            <Link href="/" className="text-[var(--h-text-gray)] hover:text-[var(--black)] text-[14px] my-3 transition-all duration-200 ease-in block">
                            {item}
                            </Link>
                        </li>
                    ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>

            {/* line  */}
            <div className="w-full h-[1px] bg-gray-200"></div>

            <div className="my-8 max-md:my-4 px-4 w-2/3 max-md:w-full flex max-md:flex-col place-items-center justify-between max-md:gap-4">
                <ul className="inline-flex gap-3 relative">
                <TooltipProvider>
                {[
                    {icon: <Facebook size={14} fill="gray" color="gray" className="hover:fill-black hover:text-black"/>, title: "Follow on Facebook"},
                    {icon: <Instagram size={14} color="gray" />, title: "Follow on Instagram"},
                    {icon: <Linkedin size={14} fill="gray" color="gray" />, title: "Follow on LinkedIn"},
                    {icon: <Youtube size={14} color="gray" />, title: "Follow on Youtube"}
                    ].map((item, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                            <li
                            className="border border-gray-500 hover:border-gray-800 rounded-full p-3 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 relative"
                            >{item.icon}</li>
                            </TooltipTrigger>
                            <TooltipContent>
                            <p>{item.title}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                    </TooltipProvider>
                </ul>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[var(--h-text-gray)] text-[13px]">All Rights Reserved © Palmonas</span>
                    <div className="flex gap-2">
                        <div className="border-[1px] border-gray-200 rounded-sm p-1">
                            <Image
                                src={"/icons/1.png"}
                                alt="google pay"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: '50px', height: '20px', objectFit: 'cover'}}
                                
                            />
                        </div>
                        <div className="border-[1px] border-gray-200 rounded-sm p-1">
                            <Image
                                src={"/icons/2.png"}
                                alt="google pay"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: '50px', height: '20px', objectFit: 'cover'}}
                            />
                        </div>
                        <div className="border-[1px] border-gray-200 rounded-sm p-1">
                            <Image
                                src={"/icons/3.png"}
                                alt="paypal"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: '50px', height: '20px', objectFit: 'cover'}}
                            />
                        </div>
                        <div className="border-[1px] border-gray-200 rounded-sm p-1">
                            <Image
                                src={"/icons/4.png"}
                                alt="visa card"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: '50px', height: '20px', objectFit: 'cover'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}