// import * as z from "zod";

import { z } from "zod";


export const ProductSchema = z.object({
  sku: z.string().min(5, {message: "Stock keeping unit are required!"}),
  barcode: z.string().optional(),
  slug: z.string().min(1, {message: "slug is required!"}),
  taxCode: z.string().optional(),

  title: z.string().min(5).max(150),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  collection: z.string().min(1, { message: "Please select collections!"}),
  categories: z.array(z.string()).min(1).optional(),
  tags: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  origin: z.string().optional(),
  warranty: z.coerce.number().optional(),
  warrantyType: z.string().optional(),

  basePrice: z.coerce.number().min(200, { message : 'Base Price more than Rs. 200'}),
  sellingPrice: z.coerce.number().min(200, { message : 'Selling Price more than Rs. 200'}),
  originalPrice: z.coerce.number().optional(),
  costPrice: z.coerce.number().optional(),

  hasDiscount: z.boolean().default(false),
  discount: z.object({
    discountTitle: z.string().optional(),
    discountAmount: z.coerce.number(),
    discountType: z.enum(["percentage", "fixed"]),
    discountEndDate: z.date().optional().refine(date => !date || date > new Date(), { message: "End date must be in the future" }),
  }).optional(),

  stock: z.coerce.number().min(1, {message: "stock must be at least 1"}),
  lowStockThreshold: z.coerce.number().optional(),
  moq: z.coerce.number().max(20, { message: 'Maximum 20 order accept'}).optional(),
  allowBackorder: z.boolean().default(false),
  status: z.enum(["draft", "active", "outOfStock", "archived", "discontinued"]),

  mainImage: z.union([z.string().url(), z.literal("")]).optional(),
  gallery: z.array(z.string()).optional(),

  hasDimension: z.boolean().default(false),
  dimension: z.object({
    width: z.coerce.number().optional(),
    height: z.coerce.number().optional(),
    depth: z.coerce.number().optional(),
    dimensionUnit: z.enum(["cm", "inch"]).default("cm"),
    weightValue: z.coerce.number().min(0.1, { message: "Weight must be at least 0.1" }),
    weightUnit: z.enum(["g", "kg", "oz", "lb"]),
    shippingClass: z.enum(["light", "fragile", "standard", "fragileHeavy"]),
  }).refine(data => data.weightValue > 0, {
    message: "Weight value must be positive",
    path: ["weightValue"]
  }),
  
  hasVariants: z.boolean().default(false),
  colors: z.array(z.object({
    name: z.string().min(3, { message: "al least 3 letter are required!"}).optional(),
    hexCode: z.string().min(4, { message: "Hax code is required!"}),
    images: z.array(z.string().url()).optional(),
    stock: z.coerce.number().min(1, {message: "Stock must be at least 1"}),
    lowStockThreshold: z.coerce.number().optional(),
    sku: z.string().optional(),
    price: z.coerce.number().optional(),
    status: z.enum(["active", "discontinued"]).refine(val => !!val, { message: "Status is required!" }),
  })).optional(),

  sizes: z.array(z.object({
    value: z.string().min(1, { message : "sizes are required!"}),
    code: z.string().optional(),
    images: z.array(z.string().url()).optional(),
    stock: z.coerce.number().min(1, {message: "stock must be at least 1"}),
    lowStockThreshold: z.coerce.number().optional(),
    price: z.coerce.number().optional(),
    weightAdjustment: z.coerce.number().min(0).optional(),
    sku: z.string().optional(),
    status: z.enum(["active", "discontinued"]).refine(val => !!val, { message: "Status is required!" }),
  })).optional(),

  materials: z.array(z.object({
    name: z.string().min(3, { message : "Material name is required!"}),
    code: z.string().optional(),
    images: z.array(z.string().url()).optional(),
    price: z.coerce.number().optional(),
    isRecyclable: z.string().optional(),
    origin: z.string().optional(),
    stock: z.coerce.number().min(1, {message: "stock must be at least 1"}),
    lowStockThreshold: z.coerce.number().optional(),
    weightAdjustment: z.coerce.number().min(0).optional(),
    sku: z.string().optional(),
    status: z.enum(["active", "discontinued"]).refine(val => !!val, { message: "Status is required!" }),
  })).optional(),

    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    publishedAt: z.date().optional(),

    version: z.coerce.number().optional(),
    metadata: z.record(z.any()).optional()
});


