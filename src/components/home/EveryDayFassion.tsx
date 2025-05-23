import React from "react";
import Product_Scrollbar from "./Product_Scrollbar";
import { getProducts } from "@/lib/data";
import { Product } from "@/types/product.types";

const EveryDayFassion = async () => {
  const products = await getProducts();
  return (
    <Product_Scrollbar
      heading="Everyday Fashion Jewellery"
      products={products}
    />
  );
};

export default EveryDayFassion;
