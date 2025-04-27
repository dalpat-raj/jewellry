import { Heart } from "lucide-react";
import Link from "next/link";

export default function Wishlist() {

    return (
        <Link href={"/wishlist"} className="relative mr-2">
            <Heart size={22} className="cursor-pointer hover:text-[var(--h-text-color-hover)] hover:scale-110 transition-colors duration-500 ease"/>
            <span className="w-4 h-4 absolute -top-2 -right-4 max-md:-right-2 rounded-full bg-[var(--black)] text-[var(--white)] flex justify-center items-center text-[10px] shadow-[var(--shadow-total)]">12</span>
        </Link>
    )
}