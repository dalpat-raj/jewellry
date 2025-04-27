import { Product } from "@/types/product.types";
import { Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/schema";

export const useProductForm = () => {
    return useForm<Product>({
      resolver: zodResolver(ProductSchema),
      defaultValues: {
        sku: "",
        slug: "",
        title: "",
        collection: "",
        basePrice: 0,
        sellingPrice: 0,
        hasDiscount: false,
        stock: 0,
        status: "active",
        mainImage: undefined,
        gallery: [],
        hasDimension: false,
        dimension: {
          weightValue: 0,
          weightUnit: "g",
          shippingClass: "light",
          dimensionUnit: "cm",
        },
        hasVariants: false,
      }
    });
  };



