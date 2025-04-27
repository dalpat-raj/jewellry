import Heading from '../common/Heading'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import ProductCard from '../products/ProductCard'
import "react-multi-carousel/lib/styles.css";
import Container from '../common/Container';

const Product_Scrollbar = () => {
  const products = [
    { image1: "/products/p-1.png", image2: "/products/p-1-1.png", name: "Necklace Dalpat Raj Is Present Best pandle Necklace Raj Is Present", price: 3623, originalPrice: 5176, discount: 30 },
    { image1: "/products/p-2.png", image2: "/products/p-2-2.png", name: "Bracelet", price: 2850, originalPrice: 4071, discount: 30 },
    { image1: "/products/p-3.png", image2: "/products/p-3-3.png", name: "Earrings", price: 1899, originalPrice: 2713, discount: 30 },
    { image1: "/products/p-2.png", image2: "/products/p-1-1.png", name: "Ring", price: 2475, originalPrice: 3536, discount: 30 },
    { image1: "/products/p-1.png", image2: "/products/p-2-2.png", name: "Anklet", price: 3150, originalPrice: 4500, discount: 30 },
    { image1: "/products/p-2.png", image2: "/products/p-3-3.png", name: "Pendant", price: 2799, originalPrice: 3999, discount: 30 }
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Container>
        <Heading>Everyday Fashion Jewellery</Heading>
        <Carousel 
            className="w-full mt-10 max-sm:mt-4"
            opts={{
                align: "start",
                loop: true,
                duration: 50,
            }}
            // plugins={[
            //     Autoplay({
            //         delay: 6000,
            //     })
            // ]}
        >
            <CarouselContent>
                {products.map((product, i) => (
                    <CarouselItem 
                        key={i}
                        className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4 2xl:basis-1/6"
                    >
                        <ProductCard product={product} index={i}/> 
                    </CarouselItem>   
                ))}             
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
    </Container>
  )
}

export default Product_Scrollbar
