import Carousels from "@/components/home/Carousel";
import Collection_Rounded from "@/components/home/Collection_Rounded";
import EveryDayFassion from "@/components/home/EveryDayFassion";
import Product_Scrollbar from "@/components/home/Product_Scrollbar";
import Reviews from "@/components/home/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Carousels />
      <Collection_Rounded />
      <EveryDayFassion />
      <Reviews />
    </main>
  );
}
