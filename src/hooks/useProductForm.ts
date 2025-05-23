import { Product } from "@/types/product.types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/schema";

export const useProductForm = () => {
    return useForm<Product>({
      resolver: zodResolver(ProductSchema),
      defaultValues: {
        hasDiscount: false,
        status: "active",
        hasDimension: false,
        dimension: {
          weightUnit: "g",
          shippingClass: "light",
          dimensionUnit: "cm",
        },
        hasVariants: false,
      }
    });
  };



