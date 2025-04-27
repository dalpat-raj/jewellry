import Search_Model from "@/components/search/Search_Model";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";


export default function Search_Icon(){
    const [openSearch, setOepnSearch] = useState<boolean>(false)

    return(
        <div className="min-lg:hidden">
            <SearchIcon size={22} className="cursor-pointer hover:text-[var(--h-text-color-hover)] hover:scale-110 transition-colors duration-500 ease" onClick={()=>setOepnSearch(!openSearch)}/>

            <div className="">
                <div className={`z-50 min-lg:hidden no-scrollbar bg-[var(--white)] h-screen overflow-scroll max-lg:w-8/12 max-md:w-7/12 max-sm:w-11/12 fixed top-0 box-shadow transition-all duration-500 ease-in-out
                    ${openSearch ? "right-0" : "-right-full"}`}>
                    <Search_Model/>
                    <div className="absolute right-2 top-2 bg-[var(--bg-menu-link)] rounded-full p-2 cursor-pointer min-lg:hidden" onClick={()=>setOepnSearch(false)}>
                        <X size={20}/>
                    </div>
                </div>
                <div className={`fixed top-0 left-0 w-full h-screen black-overlay transition-all duration-500 ease-in-out 
                    ${openSearch ? "opacity-100 block pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={()=>setOepnSearch(false)}>
                </div>
            </div>

        </div>
    )
}