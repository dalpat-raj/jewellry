"use client";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types/product.types";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import FileUploader from "./FileUploders";
import { useEffect } from "react";
import { deleteImageFromServer } from "@/lib/deleteImages";

const statusOptions = ["active", "discontinued"];
const recyclableOptions = ["yes", "no"];

const ProductVariants = () => {
  const {
    control,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<Product>();
  const colorField = useFieldArray({ control, name: "colors" });
  const sizeField = useFieldArray({ control, name: "sizes" });
  const materialField = useFieldArray({ control, name: "materials" });

  useEffect(() => {
    const colors = watch("colors");
    const sizes = watch("sizes");
    const materials = watch("materials");

    if (
      (colors && colors.length > 0) ||
      (sizes && sizes.length > 0) ||
      (materials && materials.length > 0)
    ) {
      setValue("hasVariants", true);
    } else {
      setValue("hasVariants", false);
    }
  }, [watch("colors"), watch("sizes"), watch("materials")]);

  const handleImageComplete = (files: { url: string; key: string }[]) => {
    console.log("Uploaded images preview URLs:", files);
  };

  return (
    <div className="">
      {/* Color Variants */}
      <div className="bg-sidebar rounded-sm mb-4">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-[15px] font-medium leading-0">
            Color Variants
            <span className="text-[var(--h-text-gray)] text-[13px]">
              &nbsp; &nbsp;Optional
            </span>
          </h2>
          <span
            className="bg-[var(--white)] border-[1px] border-black dark:bg-sidebar dark:border-gray-500 py-1 px-4 text-sm flex gap-2 items-center justify-center cursor-pointer"
            onClick={() =>
              colorField.append({
                name: "",
                hexCode: "",
                stock: 0,
                lowStockThreshold: 0,
                sku: "",
                status: "active",
                price: 0,
                images: [],
              })
            }
          >
            <Plus size={16} /> Add Color
          </span>
        </div>
        <Separator />
        <div className="flex flex-col gap-6">
          {colorField.fields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-3 gap-8 max-md:gap-4 relative  m-4 p-4 rounded-sm border border-gray-300"
            >
              <div className="col-span-2 max-md:col-span-3">
                <div className="col-span-7 bg-sidebar rounded-sm">
                  <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-4">
                    {(
                      watch(
                        `colors.${index}.images` as `colors.${number}.images`
                      ) || []
                    ).map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative rounded overflow-hidden border"
                        style={{ aspectRatio: "1/1" }}
                      >
                        <Image
                          src={img}
                          alt={`variant-${index}-img-${imgIndex}`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          type="button"
                          onClick={async () => {
                            const updated = [
                              ...(watch(
                                `colors.${index}.images` as `colors.${number}.images`
                              ) || []),
                            ];
                            const deletedImage = updated[imgIndex];
                            updated.splice(imgIndex, 1);
                            setValue(
                              `colors.${index}.images` as `colors.${number}.images`,
                              updated
                            );
                            await deleteImageFromServer(deletedImage);
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}

                    <FileUploader
                      onComplete={handleImageComplete}
                      index={index}
                      varientTypes="colors"
                      multiple={true}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 max-md:col-span-3">
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label>Color Name</Label>
                    <Input
                      {...register(`colors.${index}.name`)}
                      type="text"
                      placeholder="Eg. Black"
                      aria-invalid={
                        !!errors?.colors?.[index]?.name ? true : false
                      }
                      value={watch(`colors.${index}.name`)}
                    />
                    {errors?.colors?.[index]?.name && (
                      <span className="text-[12px] text-red-600">
                        {errors?.colors?.[index]?.name?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label>Hex Code</Label>
                    <Input
                      {...register(`colors.${index}.hexCode`)}
                      type="text"
                      placeholder="#000000"
                      aria-invalid={
                        !!errors?.colors?.[index]?.hexCode ? true : false
                      }
                      value={watch(`colors.${index}.hexCode`)}
                    />
                    {errors?.colors?.[index]?.hexCode && (
                      <span className="text-[12px] text-red-600">
                        {errors?.colors?.[index]?.hexCode.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      {...register(`colors.${index}.price`)}
                      id="price"
                      aria-invalid={
                        !!errors?.colors?.[index]?.price ? true : false
                      }
                      value={watch(`colors.${index}.price`)}
                    />
                    {errors?.colors?.[index]?.price && (
                      <span className="text-[12px] text-red-600">
                        {errors?.colors?.[index]?.price.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input
                      {...register(`colors.${index}.sku`)}
                      id="sku"
                      aria-invalid={
                        !!errors?.colors?.[index]?.sku ? true : false
                      }
                      value={watch(`colors.${index}.sku`)}
                    />
                    {errors?.colors?.[index]?.sku && (
                      <span className="text-[12px] text-red-600">
                        {errors?.colors?.[index]?.sku?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label>Stock</Label>
                    <Input
                      type="number"
                      {...register(`colors.${index}.stock`)}
                      id="stock"
                      aria-invalid={
                        !!errors?.colors?.[index]?.stock ? true : false
                      }
                      value={watch(`colors.${index}.stock`)}
                    />
                    {errors?.colors?.[index]?.stock && (
                      <span className="text-[12px] text-red-600">
                        {errors?.colors?.[index]?.stock?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="lowStockThreshold">
                      Low Stock Threshold
                    </Label>
                    <Input
                      type="number"
                      {...register(`colors.${index}.lowStockThreshold`)}
                      id="lowStockThreshold"
                      aria-invalid={
                        !!errors?.colors?.[index]?.lowStockThreshold
                          ? true
                          : false
                      }
                      value={watch(`colors.${index}.lowStockThreshold`)}
                    />
                    {errors?.colors?.[index]?.lowStockThreshold && (
                      <span className="text-[12px] text-red-600">
                        {errors?.colors?.[index]?.lowStockThreshold?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label id="status">Status</Label>
                  {errors?.colors?.[index]?.status && (
                    <span className="text-[12px] text-red-600">
                      {errors?.colors?.[index]?.status?.message}
                    </span>
                  )}
                  <Controller
                    name={`colors.${index}.status`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger id="status" className="w-full">
                          <SelectValue placeholder="select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions?.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <button
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                onClick={() => colorField.remove(index)}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Size Options */}
      <div className="bg-sidebar rounded-sm mb-4">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-[15px] font-medium leading-0">
            Size Options
            <span className="text-[var(--h-text-gray)] text-[13px]">
              &nbsp; &nbsp;Optional
            </span>
          </h2>
          <span
            className="bg-[var(--white)] border-[1px] border-black dark:bg-sidebar dark:border-gray-500 py-1 px-4 text-sm flex gap-2 items-center justify-center cursor-pointer"
            onClick={() =>
              sizeField.append({
                value: "",
                stock: 0,
                lowStockThreshold: 0,
                sku: "",
                status: "active",
                price: 0,
                images: [],
              })
            }
          >
            <Plus size={16} className="mr-1" /> Add Size
          </span>
        </div>
        <Separator />
        <div className="flex flex-col gap-6">
          {sizeField.fields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-3 gap-8 max-md:gap-4 relative m-4 p-4 rounded-sm border border-gray-300"
            >
              <div className="col-span-2 max-md:col-span-3">
                <div className="bg-sidebar rounded-sm">
                  <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-4">
                    {(
                      watch(
                        `sizes.${index}.images` as `sizes.${number}.images`
                      ) || []
                    ).map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative rounded overflow-hidden border"
                        style={{ aspectRatio: "1/1" }}
                      >
                        <Image
                          src={img}
                          alt={`variant-${index}-img-${imgIndex}`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          type="button"
                          onClick={async () => {
                            const updated = [
                              ...(watch(
                                `sizes.${index}.images` as `sizes.${number}.images`
                              ) || []),
                            ];
                            const deletedImage = updated[imgIndex];
                            updated.splice(imgIndex, 1);
                            setValue(
                              `sizes.${index}.images` as `sizes.${number}.images`,
                              updated
                            );
                            await deleteImageFromServer(deletedImage);
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}

                    <FileUploader
                      onComplete={handleImageComplete}
                      index={index}
                      varientTypes="sizes"
                      multiple={true}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 max-md:col-span-3">
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label>Size Value</Label>
                    <Input
                      {...register(`sizes.${index}.value`)}
                      placeholder="Eg. M, L, XL"
                      aria-invalid={
                        !!errors?.sizes?.[index]?.value ? true : false
                      }
                      value={watch(`sizes.${index}.value`)}
                    />
                    {errors?.sizes?.[index]?.value && (
                      <span className="text-[12px] text-red-600">
                        {errors?.sizes?.[index]?.value?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label>SKU</Label>
                    <Input
                      {...register(`sizes.${index}.sku`)}
                      aria-invalid={
                        !!errors?.sizes?.[index]?.sku ? true : false
                      }
                      value={watch(`sizes.${index}.sku`)}
                    />
                    {errors?.sizes?.[index]?.sku && (
                      <span className="text-[12px] text-red-600">
                        {errors?.sizes?.[index]?.sku?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label>Stock</Label>
                    <Input
                      type="number"
                      {...register(`sizes.${index}.stock`)}
                      aria-invalid={
                        !!errors?.sizes?.[index]?.stock ? true : false
                      }
                      value={watch(`sizes.${index}.stock`)}
                    />
                    {errors?.sizes?.[index]?.stock && (
                      <span className="text-[12px] text-red-600">
                        {errors?.sizes?.[index]?.stock?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label>Low Stock Threshold</Label>
                    <Input
                      type="number"
                      {...register(`sizes.${index}.lowStockThreshold`)}
                      aria-invalid={
                        !!errors?.sizes?.[index]?.lowStockThreshold
                          ? true
                          : false
                      }
                      value={watch(`colors.${index}.lowStockThreshold`)}
                    />
                    {errors?.sizes?.[index]?.lowStockThreshold && (
                      <span className="text-[12px] text-red-600">
                        {errors?.sizes?.[index]?.lowStockThreshold?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label>Price</Label>
                    <Input
                      type="number"
                      {...register(`sizes.${index}.price`)}
                      aria-invalid={
                        !!errors?.sizes?.[index]?.price ? true : false
                      }
                      value={watch(`sizes.${index}.price`)}
                    />
                    {errors?.sizes?.[index]?.price && (
                      <span className="text-[12px] text-red-600">
                        {errors?.sizes?.[index]?.price?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label>weightAdjustment</Label>
                    <Input
                      type="number"
                      {...register(`sizes.${index}.weightAdjustment`)}
                      aria-invalid={
                        !!errors?.sizes?.[index]?.weightAdjustment
                          ? true
                          : false
                      }
                      value={watch(`sizes.${index}.weightAdjustment`)}
                    />
                    {errors?.sizes?.[index]?.weightAdjustment && (
                      <span className="text-[12px] text-red-600">
                        {errors?.sizes?.[index]?.weightAdjustment?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2 mb-6">
                  <Label>Status</Label>
                  <Controller
                    name={`sizes.${index}.status`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger id="status" className="w-full">
                          <SelectValue placeholder="select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions?.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <button
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 cursor-pointer"
                onClick={() => sizeField.remove(index)}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Material Options */}
      <div className="bg-sidebar rounded-sm">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-[15px] font-medium leading-0">
            Material Options{" "}
            <span className="text-[var(--h-text-gray)] font-normal text-[13px]">
              &nbsp; &nbsp;Optional
            </span>
          </h2>
          <span
            className="bg-[var(--white)] border-[1px] border-black dark:bg-sidebar dark:border-gray-500 py-1 px-4 text-sm flex gap-2 items-center justify-center cursor-pointer"
            onClick={() =>
              materialField.append({
                name: "",
                stock: 0,
                lowStockThreshold: 0,
                sku: "",
                price: 0,
                images: [],
                status: "active",
              })
            }
          >
            <Plus size={16} className="mr-1" /> Add Material
          </span>
        </div>
        <Separator />
        <div className="flex flex-col gap-6">
          {materialField.fields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-3 gap-8 max-md:gap-4 relative m-4 p-4 rounded-sm border border-gray-300"
            >
              <div className="col-span-2 max-md:col-span-3">
                <div className="bg-sidebar rounded-sm">
                  <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-4">
                    {(
                      watch(
                        `materials.${index}.images` as `materials.${number}.images`
                      ) || []
                    ).map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative rounded overflow-hidden border"
                        style={{ aspectRatio: "1/1" }}
                      >
                        <Image
                          src={img}
                          alt={`variant-${index}-img-${imgIndex}`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          type="button"
                          onClick={async () => {
                            const updated = [
                              ...(watch(
                                `materials.${index}.images` as `materials.${number}.images`
                              ) || []),
                            ];
                            const deletedImage = updated[imgIndex];
                            updated.splice(imgIndex, 1);
                            setValue(
                              `materials.${index}.images` as `materials.${number}.images`,
                              updated
                            );
                            await deleteImageFromServer(deletedImage);
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}

                    <FileUploader
                      onComplete={handleImageComplete}
                      index={index}
                      varientTypes="materials"
                      multiple={true}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 max-md:col-span-3">
                <div className="w-full flex flex-col gap-2 mb-6">
                  <Label>Material Name</Label>
                  <Input
                    {...register(`materials.${index}.name`)}
                    aria-invalid={
                      !!errors?.materials?.[index]?.name ? true : false
                    }
                    value={watch(`materials.${index}.name`)}
                  />
                  {errors?.materials?.[index]?.name && (
                    <span className="text-[12px] text-red-600">
                      {errors?.materials?.[index]?.name?.message}
                    </span>
                  )}
                </div>
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label>SKU</Label>
                    <Input
                      {...register(`materials.${index}.sku`)}
                      aria-invalid={
                        !!errors?.materials?.[index]?.sku ? true : false
                      }
                      value={watch(`materials.${index}.sku`)}
                    />
                    {errors?.materials?.[index]?.sku && (
                      <span className="text-[12px] text-red-600">
                        {errors?.materials?.[index]?.sku?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label>Code</Label>
                    <Input
                      {...register(`materials.${index}.code`)}
                      aria-invalid={
                        !!errors?.materials?.[index]?.code ? true : false
                      }
                      value={watch(`materials.${index}.code`)}
                    />
                    {errors?.materials?.[index]?.code && (
                      <span className="text-[12px] text-red-600">
                        {errors?.materials?.[index]?.code?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label>Stock</Label>
                    <Input
                      type="number"
                      {...register(`materials.${index}.stock`)}
                      aria-invalid={
                        !!errors?.materials?.[index]?.stock ? true : false
                      }
                      value={watch(`materials.${index}.stock`)}
                    />
                    {errors?.materials?.[index]?.stock && (
                      <span className="text-[12px] text-red-600">
                        {errors?.materials?.[index]?.stock?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label>Low Stock Threshold</Label>
                    <Input
                      type="number"
                      {...register(`materials.${index}.lowStockThreshold`)}
                      aria-invalid={
                        !!errors?.materials?.[index]?.lowStockThreshold
                          ? true
                          : false
                      }
                      value={watch(`materials.${index}.lowStockThreshold`)}
                    />
                    {errors?.materials?.[index]?.lowStockThreshold && (
                      <span className="text-[12px] text-red-600">
                        {errors?.materials?.[index]?.lowStockThreshold?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
                  <div className="w-full flex flex-col gap-2">
                    <Label>Price</Label>
                    <Input
                      type="number"
                      {...register(`materials.${index}.price`)}
                      aria-invalid={
                        !!errors?.materials?.[index]?.price ? true : false
                      }
                      value={watch(`materials.${index}.price`)}
                    />
                    {errors?.materials?.[index]?.price && (
                      <span className="text-[12px] text-red-600">
                        {errors?.materials?.[index]?.price?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Label>Recyclable</Label>
                    <Controller
                      name={`materials.${index}.isRecyclable`}
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger id="status" className="w-full">
                            <SelectValue placeholder="select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            {recyclableOptions?.map((isRecyclable) => (
                              <SelectItem
                                key={isRecyclable}
                                value={isRecyclable}
                              >
                                {isRecyclable}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Label>Status</Label>
                  <Controller
                    name={`materials.${index}.status`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger id="status" className="w-full">
                          <SelectValue placeholder="select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions?.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <button
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 cursor-pointer"
                onClick={() => materialField.remove(index)}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductVariants;
