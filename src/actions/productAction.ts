"use server"
import { db } from "@/lib/db";
import { ProductSchema } from "@/schema";
import { Product } from "@/types/product.types";
import { revalidatePath } from "next/cache";
import { z } from "zod";



export async function CreateProduct(formData: Product) {
    console.log(formData);
    
  try {
    const {sku, barcode, slug, taxCode, title, subtitle, description, collection, categories, tags, features, warranty, warrantyType, origin, basePrice, sellingPrice, originalPrice, costPrice, hasDiscount, discount, stock, lowStockThreshold, moq, allowBackorder, status, mainImage, gallery, hasDimension, dimension, hasVariants, colors, sizes, materials, } = ProductSchema.parse(formData);

    const product = await db.product.create({
        data: {
            sku,
            barcode,
            slug,
            taxCode,
            title,
            subtitle,
            description,
            collection,
            categories,
            tags,
            features,
            warranty,
            warrantyType,
            origin,
            basePrice,
            sellingPrice,
            originalPrice,
            costPrice,
            hasDiscount,
            discount: hasDiscount && discount ? {
                create: { 
                    discountTitle: discount.discountTitle,
                    discountAmount: discount.discountAmount,
                    discountType: discount.discountType,
                    discountEndDate: discount.discountEndDate,
                } 
            } : undefined,
            stock,
            lowStockThreshold,
            moq,
            allowBackorder,
            status,
            mainImage,
            gallery,
            hasDimension,
            dimension: {
                create: {
                    width: dimension.width,
                    height: dimension.height,
                    depth: dimension.depth,
                    dimensionUnit: dimension.dimensionUnit ?? "in",
                    weightValue: dimension.weightValue,
                    weightUnit: dimension.weightUnit,
                    shippingClass: dimension.shippingClass ?? "light",
                }
            },
            hasVariants,
            colors: hasVariants && colors ? {
                create: colors.map(color => ({
                    name: color.name,
                    hexCode: color.hexCode,
                    images: color.images,
                    stock: color.stock,
                    lowStockThreshold: color.lowStockThreshold,
                    sku: color.sku,
                    price: color.price,
                    status: color.status,
                }))
            } : undefined,
            sizes: hasVariants && sizes ? {
                create: sizes.map(size => ({
                  value: size.value,
                  code: size.code,
                  images: size.images,
                  stock: size.stock,
                  lowStockThreshold: size.lowStockThreshold,
                  price: size.price,
                  weightAdjustment: size.weightAdjustment,
                  sku: size.sku,
                  status: size.status,
                }))
            } : undefined,
            materials: hasVariants && materials ? {
                create: materials.map(material => ({
                  name: material.name,
                  code: material.code,
                  images: material.images,
                  price: material.price,
                  isRecyclable: material.isRecyclable,
                  origin: material.origin,
                  stock: material.stock,
                  lowStockThreshold: material.lowStockThreshold,
                  weightAdjustment: material.weightAdjustment,
                  sku: material.sku,
                  status: material.status,
                }))
            } : undefined,
            createdAt: new Date(),
            publishedAt: new Date(),
          },
          include: {
            discount: true,
            dimension: true,
            colors: true,
            sizes: true,
            materials: true,
          },
    
    })
    console.log(product);
    
    // revalidatePath("/dashboard/products/create-product");

    return { success: "Product Created ✅" };
  } catch (error: any) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return { error: error.errors[0]?.message || "Validation error" };
    }

    return { error: "Database error" };
  }
  }
