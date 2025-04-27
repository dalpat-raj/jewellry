"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { Product } from "@/types/product.types";
import { DatePicker } from "@/components/ui/date-picker";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-form";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const statuss = ["draft", "active", "outOfStock", "archived", "discontinued"];

export function Pricing() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Product>();
  return (
    <AccordionItem
      value="item-4"
      className={cn(
        "bg-sidebar",
        (errors?.basePrice || errors?.sellingPrice) && "border border-red-400"
      )}
    >
      <AccordionTrigger>
        <h2 className="text-[15px] font-medium">Pricing INR</h2>
      </AccordionTrigger>
      <AccordionContent>
        <Separator />
        <div className="p-4">
          <div className="flex flex-col gap-2 mb-4">
            <Label htmlFor="basePrice">Base Price</Label>
            <div className="relative">
              <span className="text-[var(--h-text-gray)] absolute left-3 top-[50%] transform -translate-y-[50%]">
                ₹
              </span>
              <Input
                {...register("basePrice")}
                id="basePrice"
                type="number"
                className="pl-8"
                aria-invalid={errors?.basePrice ? true : false}
              />
            </div>
            {errors?.basePrice && (
              <span className="text-[12px] text-red-600">
                {errors?.basePrice?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label htmlFor="sellingPrice">Selling Price</Label>
            <div className="relative">
              <span className="text-[var(--h-text-gray)] absolute left-3 top-[50%] transform -translate-y-[50%]">
                ₹
              </span>
              <Input
                {...register("sellingPrice")}
                id="sellingPrice"
                type="number"
                className="pl-8"
                aria-invalid={errors?.sellingPrice ? true : false}
              />
            </div>
            {errors?.sellingPrice && (
              <span className="text-[12px] text-red-600">
                {errors?.sellingPrice?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label htmlFor="originalPrice">
              Original Price{" "}
              <span className="text-[var(--h-text-gray)]">Optional</span>
            </Label>
            <div className="relative">
              <span className="text-[var(--h-text-gray)] absolute left-3 top-[50%] transform -translate-y-[50%]">
                ₹
              </span>
              <Input
                {...register("originalPrice")}
                id="originalPrice"
                type="number"
                className="pl-8"
                aria-invalid={errors?.originalPrice ? true : false}
              />
            </div>
            {errors?.originalPrice && (
              <span className="text-[12px] text-red-600">
                {errors?.originalPrice?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="costPrice">
              Cost Price{" "}
              <span className="text-[var(--h-text-gray)]">Optional</span>
            </Label>
            <div className="relative">
              <span className="text-[var(--h-text-gray)] absolute left-3 top-[50%] transform -translate-y-[50%]">
                ₹
              </span>
              <Input
                {...register("costPrice")}
                id="costPrice"
                type="number"
                className="pl-8"
                aria-invalid={errors?.costPrice ? true : false}
              />
            </div>
            {errors?.costPrice && (
              <span className="text-[12px] text-red-600">
                {errors?.costPrice?.message}
              </span>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export function Discount() {
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<Product>();

  const discountAmount = watch("discount.discountAmount");
  const discountType = watch("discount.discountType");

  useEffect(() => {
    if (discountType || discountAmount) {
      setValue("hasDiscount", true);
    } else {
      setValue("hasDiscount", false);
    }
  }, [discountType, discountAmount]);

  return (
    <AccordionItem
      value="item-5"
      className={cn(
        "bg-sidebar",
        (errors?.discount?.discountType || errors?.discount?.discountAmount) &&
          "border border-red-400"
      )}
    >
      <AccordionTrigger>
        <div className="w-full flex justify-start items-center gap-4">
          <h2 className="text-[15px] font-medium">Make Discount</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <Separator />
        <div className="p-4">
          <div className="w-full flex flex-col gap-2 mb-4">
            <Label htmlFor="discountTitle">
              Title <span className="text-[var(--h-text-gray)]">Optional</span>
            </Label>
            <Input
              {...register("discount.discountTitle")}
              id="discountTitle"
              placeholder="Eg:- MDL-029-GOLD"
              aria-invalid={errors?.discount?.discountTitle ? true : false}
            />
            {errors?.discount?.discountTitle && (
              <span className="text-[12px] text-red-600">
                {errors?.discount?.discountTitle?.message}
              </span>
            )}
          </div>
          <div className="flex justify-between gap-4 mb-4">
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="discountType">Type</Label>
              <Controller
                name="discount.discountType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="%">%</SelectItem>
                      <SelectItem value="fixed">Fixed</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors?.discount?.discountType && (
                <span className="text-[12px] text-red-600">
                  {errors?.discount?.discountType?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="discountAmount">Amount</Label>
              <Input
                {...register("discount.discountAmount")}
                id="discountAmount"
                type="number"
                placeholder="0"
                aria-invalid={errors?.discount?.discountAmount ? true : false}
              />
              {errors?.discount?.discountAmount && (
                <span className="text-[12px] text-red-600">
                  {errors?.discount?.discountAmount?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="discountEndDate">
              End Date{" "}
              <span className="text-[var(--h-text-gray)]">Optional</span>
            </Label>
            <Controller
              name="discount.discountEndDate"
              control={control}
              defaultValue={undefined}
              render={({ field }) => (
                <DatePicker date={field.value} onChange={field.onChange} />
              )}
            />
            {errors?.discount?.discountEndDate && (
              <span className="text-[12px] text-red-600">
                {errors?.discount?.discountEndDate?.message}
              </span>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export function Inventory() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<Product>();

  return (
    <AccordionItem
      value="item-6"
      className={cn(
        "bg-sidebar",
        (errors?.stock || errors?.status) && "border border-red-400"
      )}
    >
      <AccordionTrigger>
        <h2 className=" text-[15px] font-medium">Inventory</h2>
      </AccordionTrigger>
      <AccordionContent>
        <Separator />
        <div className="p-4">
          <div className="flex justify-between gap-4 mb-6">
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="stock">Stock</Label>
              <Input
                {...register("stock")}
                id="stock"
                type="number"
                placeholder="0"
                aria-invalid={errors?.stock ? true : false}
              />
              {errors?.stock && (
                <span className="text-[12px] text-red-600">
                  {errors?.stock?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="stock">Low Stock Thres Sold </Label>
              <Input
                {...register("lowStockThreshold")}
                id="stock"
                type="number"
                placeholder="Optional"
                aria-invalid={errors?.lowStockThreshold ? true : false}
              />
              {errors?.lowStockThreshold && (
                <span className="text-[12px] text-red-600">
                  {errors?.lowStockThreshold?.message}
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 mb-6">
            <Label htmlFor="moq">
              Maximum Order Quantity{" "}
              <span className="text-[var(--h-text-gray)]">Optional</span>
            </Label>
            <Input
              {...register("moq")}
              id="moq"
              type="number"
              placeholder="0"
              aria-invalid={errors?.moq ? true : false}
            />
            {errors?.moq && (
              <span className="text-[12px] text-red-600">
                {errors?.moq?.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2 mb-6">
            <Label htmlFor="status">Product Status</Label>
            {errors?.status && (
              <span className="text-[12px] text-red-600">
                {errors?.status?.message}
              </span>
            )}
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="status" className="w-full">
                    <SelectValue placeholder="select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuss?.map((item, i) => (
                      <SelectItem value={item} key={i} className="!capitalize">
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="moq">
              Allow Back Order
              <span className="text-[var(--h-text-gray)]">Optional</span>
            </Label>
            {errors?.allowBackorder && (
              <span className="text-[12px] text-red-600">
                {errors?.allowBackorder?.message}
              </span>
            )}
            <Controller
              name="allowBackorder"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  value={field.value?.toString()}
                  onValueChange={(val) => field.onChange(val === "true")}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </RadioGroup>
              )}
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
