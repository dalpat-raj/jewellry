"use client"
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Search from "@/components/search/Search";
import Logo from "@/components/layout/navbar/Logo"; 
import OfferBar from "@/components/layout/navbar/OfferBar";
import Right from "@/components/layout/navbar/right-icons/Right";
import Menu_List from "@/components/layout/navbar/Menu";
import Mobile_Menu_List from "@/components/layout/navbar/Mobile_Menu";


export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const offerBarRef = useRef<HTMLDivElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (navbarRef.current) {
            setNavHeight(navbarRef.current.offsetHeight);
        }
        
        const handleScroll = () => {
          if (offerBarRef.current) {
            const offerBarHeight = offerBarRef.current.getBoundingClientRect().bottom;
            setIsSticky(offerBarHeight <= 0);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []); 
    
    return (
        <div className={`w-full`}>

            <div ref={offerBarRef}>
                <OfferBar />
            </div>

            {isSticky && <div style={{ height: window.innerWidth >= 1024 ? navHeight : navHeight / 2 }}></div>}

            <div ref={navbarRef} className={`z-40 w-full bg-white grid grid-cols-12 items-center gap-x-8 max-md:gap-0 py-4 px-4 max-md:px-3 transition-all duration-500 ease-in-out ${isSticky ? "fixed top-0 left-0 shadow-lg animate-slideDown" : "relative"}`}>
            
                <div className="hidden col-span-1 max-lg:block max-lg:col-span-4 max-md:col-span-2 cursor-pointer">
                    {
                       isMenuOpen ? (
                            <X size={26} onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
                        ) : (
                           <Menu size={26} onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
                         )
                     }
                </div>

                <div className={`${isSticky && "col-span-3"} col-span-3 max-lg:col-span-4 max-md:col-span-2`}>
                <Logo />
                </div>

                <div className={`${isSticky && "hidden min-lg:block"} max-lg:mt-8 col-span-6 flex justify-center max-lg:row-start-2 max-lg:col-span-12 transition-opacity duration-500 ease-in-out`}>
                    <Search />
                </div>

                <div className={`${isSticky && "col-span-3"} col-span-3 max-lg:col-span-4 max-md:col-span-8`}>
                    <Right/>
                </div>

                <div className={`col-span-12 mt-8 row-start-2 flex justify-center max-lg:hidden`}>
                    <Menu_List />
                </div>

                <div className="">
                     <div className={`z-50 min-lg:hidden no-scrollbar bg-[var(--white)] h-screen overflow-scroll max-lg:w-5/12 max-sm:w-full fixed top-0 box-shadow transition-all duration-500 ease-in-out
                        ${isMenuOpen ? "left-0" : "-left-full"}`}>
                         <Mobile_Menu_List/>
                         <div className="absolute right-0 top-0 p-2 cursor-pointer min-lg:hidden" onClick={()=>setIsMenuOpen(false)}>
                             <X size={26}/>
                         </div>
                     </div>
                     <div className={`fixed -top-1 left-0 w-full h-screen black-overlay transition-all duration-500 ease-in-out 
                         ${isMenuOpen ? "opacity-100 block pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={()=>setIsMenuOpen(false)}>
                    </div>
                </div>

            </div>
        </div>
    )
}

