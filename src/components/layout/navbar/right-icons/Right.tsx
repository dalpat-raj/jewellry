import Account from "@/components/layout/navbar/right-icons/Account";
import Cart_Icon from "@/components/layout/navbar/right-icons/Cart";
import Wishlist from "@/components/layout/navbar/right-icons/Wishlist";
import Search_Icon from "./Search";

export default function Right() {

    return (
        <div className="flex justify-end gap-4 max-md:gap-2">
            <Account />
            <Search_Icon />
            <Wishlist />
            <Cart_Icon />
        </div>
    )
}