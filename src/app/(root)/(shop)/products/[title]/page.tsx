import Carousel_Product_Images from "@/components/products/product_Details/carousel/Carousel";
import Product_Details from "@/components/products/product_Details/details/Details";


const Page = () => {
    const images = ["/products/p-1.png", "/products/p-2.png", "/products/p-3.png"];

    return (
        <div className="px-4">
            <div className='w-full h-auto grid grid-cols-2 max-sm:grid-cols-1 grid-rows-subgrid max-sm:grid-rows-1 max-md:gap-8'>
                <Carousel_Product_Images images={images} arrowColor="red"/>
                <Product_Details/>
            </div>
        </div>
    );
}

export default Page;