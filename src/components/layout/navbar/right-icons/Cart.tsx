import { ShoppingBag, X } from "lucide-react";
import { FC, useState } from "react";
import CartModel from "@/components/cart/Cart_Model";

export default function Cart_Icon() {
    const [openCart, setOepnCart] = useState(false)

    return (
        <div className="relative max-md:mr-2 mr-4">
            <ShoppingBag size={22} className="cursor-pointer hover:text-[var(--h-text-color-hover)] hover:scale-110 transition-all duration-500" onClick={()=>setOepnCart(!openCart)} /> 
            <span className="w-4 h-4 absolute -top-2 -right-4 max-md:-right-2 rounded-full bg-[var(--black)] text-[var(--white)] flex justify-center items-center text-[10px]">1</span>


            <div>
                <div className={`z-50  no-scrollbar bg-[var(--white)] h-screen overflow-scroll w-3/9 max-lg:w-[430px] max-md:w-11/12 fixed top-0  box-shadow transition-all duration-500 ease-in-out ${openCart ? "right-0" : "-right-full"} `}>                   
                    <div className="absolute right-3 top-3 bg-[var(--bg-menu-link)] rounded-full p-2 cursor-pointer transition-transform duration-500 hover:rotate-180 max-md:hover:rotate-0" onClick={()=>setOepnCart(false)}>
                        <X size={18}/>
                    </div>
                    <CartModel/>
                </div>
                <div className={`fixed top-0 left-0 w-full h-screen black-overlay transition-all duration-500 ease-in-out 
                    ${openCart ? "opacity-100 block pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={()=>setOepnCart(false)}>
                </div>
            </div>

        </div>
    )
}


