import Heading from "../common/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "../products/ProductCard";
import "react-multi-carousel/lib/styles.css";
import Container from "../common/Container";
import { Product } from "@/types/product.types";

const Product_Scrollbar = ({
  heading,
  products,
}: {
  heading: string;
  products: Product[];
}) => {
  return (
    <Container>
      <Heading>{heading && heading}</Heading>
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
          {products?.map((product, i) => (
            <CarouselItem
              key={i}
              className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4 2xl:basis-1/6"
            >
              <ProductCard product={product} index={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Container>
  );
};

export default Product_Scrollbar;
