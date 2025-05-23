import { Product } from "@/types/product.types";
import React from "react";

const Product_Details = ({ product }: { product: Product }) => {
  return (
    <div className="mt-4 max-sm:mt-3">
      <p className="text-sm font-normal text-[var(--h-text-color)] hover:text-[var(--p-text-hover)] transition-colors duration-300 leading-5">
        {product.title}
      </p>
      <div className="flex items-center gap-2 max-sm:gap-1 mt-2 max-sm:mt-1">
        <span className="text-[var(--black)] [word-spacing:2px] text-[13px]">
          ₹ {product?.sellingPrice.toLocaleString("en-IN")}.00
        </span>
        <del className="text-[var(--h-text-color)] opacity-80 text-[12px]">
          ₹ {product?.basePrice.toLocaleString("en-IN")}.00
        </del>
        {product?.hasDiscount && (
          <span className="text-[var(--d-text-color)] font-bold text-[12px] [letter-spacing:0.5px]">
            ({product?.discount?.discountAmount}%)
          </span>
        )}
      </div>
    </div>
  );
};

export default Product_Details;
