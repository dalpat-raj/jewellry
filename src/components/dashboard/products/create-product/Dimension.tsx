"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion-form";
import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";
import { Product } from "@/types/product.types";
import { useEffect } from "react";

const Dimension = () => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<Product>();

  const weightValue = watch("dimension.weightValue");

  useEffect(() => {
    if (weightValue) {
      setValue("hasDimension", true);
    } else {
      setValue("hasDimension", false);
    }
  }, [weightValue]);

  return (
    <AccordionItem
      value="item-8"
      className={cn(
        "bg-sidebar",
        errors?.dimension?.weightValue && "border border-red-400"
      )}
    >
      <AccordionTrigger>
        <h2 className=" text-[15px] font-medium">Dimension</h2>
      </AccordionTrigger>
      <AccordionContent>
        <Separator />
        <div className="p-4">
          <div className="flex justify-between gap-4 mb-4">
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="width">
                Width<span className="text-[var(--h-text-gray)]">Optional</span>
              </Label>
              <Input
                {...register("dimension.width")}
                id="width"
                type="number"
                value={watch("dimension.width")}
                aria-invalid={errors?.dimension?.width ? true : false}
              />
              {errors?.dimension?.width && (
                <span className="text-[12px] text-red-600">
                  {errors?.dimension?.width?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="height">
                Height
                <span className="text-[var(--h-text-gray)]">Optional</span>
              </Label>
              <Input
                {...register("dimension.height")}
                id="height"
                type="number"
                value={watch("dimension.height")}
                aria-invalid={errors?.dimension?.height ? true : false}
              />
              {errors?.dimension?.height && (
                <span className="text-[12px] text-red-600">
                  {errors?.dimension.height?.message}
                </span>
              )}
            </div>
          </div>

          <div className=" flex justify-between gap-4 mb-4">
            <div className="w-[70%] flex flex-col gap-2">
              <Label htmlFor="dept">
                Dept<span className="text-[var(--h-text-gray)]">Optional</span>
              </Label>
              <Input
                {...register("dimension.depth")}
                id="dept"
                type="number"
                value={watch("dimension.depth")}
                aria-invalid={errors?.dimension?.depth ? true : false}
              />
              {errors?.dimension?.depth && (
                <span className="text-[12px] text-red-600">
                  {errors?.dimension?.depth?.message}
                </span>
              )}
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <Label htmlFor="unit">
                Unit<span className="text-[var(--h-text-gray)]">Optional</span>
              </Label>
              <Controller
                name="dimension.dimensionUnit"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="units" className="w-full">
                      <SelectValue defaultValue={"cm"} placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cm">cm</SelectItem>
                      <SelectItem value="inch">inch</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors?.dimension?.dimensionUnit && (
                <span className="text-[12px] text-red-600">
                  {errors?.dimension.dimensionUnit?.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-4 my-4">
            <div className="w-[70%] flex flex-col gap-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                {...register("dimension.weightValue")}
                id="weight"
                type="number"
                value={watch("dimension.weightValue")}
              />
              {errors?.dimension?.weightValue && (
                <span className="text-[12px] text-red-600">
                  {errors?.dimension?.weightValue?.message}
                </span>
              )}
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <Label htmlFor="units">Unit</Label>
              <Controller
                name="dimension.weightUnit"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="units" className="w-full">
                      <SelectValue defaultValue={"g"} placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="oz">oz</SelectItem>
                      <SelectItem value="lb">lb</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors?.dimension?.weightUnit && (
                <span className="text-[12px] text-red-600">
                  {errors?.dimension?.weightUnit?.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="sclass">
              Shipping Class
              <span className="text-[var(--h-text-gray)]">Optional</span>
            </Label>
            <Controller
              name="dimension.shippingClass"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="sclass" className="w-full">
                    <SelectValue
                      defaultValue={"light"}
                      placeholder="shipping class"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">light</SelectItem>
                    <SelectItem value="fragile">fragile</SelectItem>
                    <SelectItem value="standard">standard</SelectItem>
                    <SelectItem value="fragile-heavy">fragile-heavy</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors?.dimension?.shippingClass && (
              <span className="text-[12px] text-red-600">
                {errors?.dimension?.shippingClass?.message}
              </span>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Dimension;
