"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Tags from "./Tags";
import Features from "./Features";
import { Controller, useFormContext } from "react-hook-form";
import { Product } from "@/types/product.types";
import { useState } from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion-form";
import BarCode from "./BarCode";
import { cn } from "@/lib/utils";

export function Identification() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<Product>();

  return (
    <AccordionItem
      value="item-1"
      className={cn(
        "bg-sidebar",
        (errors?.sku || errors?.slug) && "border border-red-400"
      )}
    >
      <AccordionTrigger>
        <h2 className=" text-[15px] font-medium">Identification</h2>
      </AccordionTrigger>
      <AccordionContent>
        <Separator />
        <div className="p-4">
          <div className="flex flex-col gap-2 mb-4">
            <Label htmlFor="sku">Stock Keeping Unit</Label>
            <Input
              id="sku"
              {...register("sku")}
              aria-invalid={errors?.sku ? true : false}
              placeholder="Eg:- MDL-029-GOLD"
              value={watch("sku")}
              name="sku"
            />
            {errors?.sku && (
              <span className="text-[12px] text-red-600">
                {errors?.sku?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label htmlFor="tax">Tax Code</Label>
            <Input
              {...register("taxCode")}
              id="tax"
              placeholder="Eg:- TAX-28"
              aria-invalid={errors?.taxCode ? true : false}
              name="taxCode"
              value={watch("taxCode")}
            />
            {errors?.taxCode && (
              <span className="text-[12px] text-red-600">
                {errors?.taxCode?.message}
              </span>
            )}
          </div>
          <BarCode />
          <div className="flex flex-col gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              {...register("slug")}
              id="slug"
              placeholder="Eg:- product-cotton-man"
              aria-invalid={errors?.slug ? true : false}
              name="slug"
              value={watch("slug")}
            />
            {errors?.slug && (
              <span className="text-[12px] text-red-600">
                {errors?.slug?.message}
              </span>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export function BasicInfo() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<Product>();

  const [desc, setDesc] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 250) {
      setDesc(value);
    }
  };
  return (
    <AccordionItem
      value="item-2"
      className={cn(
        "bg-sidebar",
        (errors?.title || errors.subtitle || errors?.description) &&
          "border border-red-400"
      )}
    >
      <AccordionTrigger>
        <h2 className=" text-[15px] font-medium">Basic Information</h2>
      </AccordionTrigger>
      <AccordionContent>
        <Separator />
        <div className="p-4">
          <div className="w-full flex flex-col gap-2 mb-6">
            <Label htmlFor="title">Product Title</Label>
            <Input
              {...register("title")}
              id="sku"
              placeholder="Eg:- MDL-029-GOLD"
              aria-invalid={errors?.title ? true : false}
              value={watch("title")}
            />
            {errors?.title && (
              <span className="text-[12px] text-red-600">
                {errors?.title?.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2 mb-6">
            <Label htmlFor="sku">
              Sub Titles{" "}
              <span className="text-[var(--h-text-gray)]">Optional</span>
            </Label>
            <Input
              {...register("subtitle")}
              id="sku"
              placeholder="Eg:- MDL-029-GOLD"
              aria-invalid={errors?.subtitle ? true : false}
              value={watch("subtitle")}
            />
            {errors?.subtitle && (
              <span className="text-[12px] text-red-600">
                {errors?.subtitle?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <Label htmlFor="desc">
                Description{" "}
                <span className="text-[var(--h-text-gray)]">Optional</span>
              </Label>
              <span className="text-[13px] text-[var(--h-text-gray)] pr-1">
                {desc.length}/250
              </span>
            </div>
            {errors?.description && (
              <span className="text-[12px] text-red-600">
                {errors?.description?.message}
              </span>
            )}
            <Textarea
              {...register("description")}
              id="desc"
              value={desc}
              rows={8}
              onChange={handleChange}
              placeholder="Type your descriptions here."
              aria-invalid={errors?.description ? true : false}
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export function MoreInfo() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<Product>();
  return (
    <AccordionItem
      value="item-3"
      className={cn(
        "bg-sidebar",
        (errors?.collection ||
          errors.categories ||
          errors?.tags ||
          errors?.features ||
          errors?.origin ||
          errors?.warranty ||
          errors?.warrantyType) &&
          "border border-red-400"
      )}
    >
      <AccordionTrigger>
        <h2 className=" text-[15px] font-medium">More Information</h2>
      </AccordionTrigger>
      <AccordionContent>
        <Separator />
        <div className="p-4">
          <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
            <div className="w-full flex flex-col gap-2 ">
              <Label htmlFor="collection">Collection</Label>
              <Controller
                name="collection"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="collection" className="w-full">
                      <SelectValue placeholder="select a collection" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors?.collection && (
                <span className="text-[12px] text-red-600">
                  {errors?.collection?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <Label htmlFor="categoriess">
                Categories
                <span className="text-[var(--h-text-gray)]">Optional</span>
              </Label>
              <Controller
                name="categories"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger id="categoriess" className="w-full">
                      <SelectValue placeholder="select a categoriess" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors?.categories && (
                <span className="text-[12px] text-red-600">
                  {errors?.categories?.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
            <Tags />
            <Features />
          </div>

          <div className="flex justify-between max-lg:flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="origin">
                Origin
                <span className="text-[var(--h-text-gray)]">Optional</span>
              </Label>
              <Input
                {...register("origin")}
                id="origin"
                placeholder="company origin"
              />
              {errors?.origin && (
                <span className="text-[12px] text-red-600">
                  {errors?.origin?.message}
                </span>
              )}
            </div>
            <div className="w-full flex justify-between max-md:flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                <Label htmlFor="Warranty">
                  Warranty{" "}
                  <span className="text-[var(--h-text-gray)]">Optional</span>
                </Label>
                <Input
                  {...register("warranty")}
                  id="Warranty"
                  type="number"
                  placeholder="2"
                />
                {errors?.warranty && (
                  <span className="text-[12px] text-red-600">
                    {errors?.warranty?.message}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col gap-2">
                <Label htmlFor="warrantyType">
                  Warranty Type{" "}
                  <span className="text-[var(--h-text-gray)]">Optional</span>
                </Label>

                <Controller
                  name="warrantyType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="warrantyType" className="w-full">
                        <SelectValue placeholder="type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Day</SelectItem>
                        <SelectItem value="month">Month</SelectItem>
                        <SelectItem value="year">Year</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors?.warrantyType && (
                  <span className="text-[12px] text-red-600">
                    {errors?.warrantyType?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
