"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/types/product.types";
import JsBarcode from "jsbarcode";
import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

const BarCode = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<Product>();
  const barcodeRef = useRef<SVGSVGElement | null>(null);

  const barcodeValue = watch("barcode");

  const generateBarcode = () => {
    const random = Math.floor(Math.random() * 1_000_000_000_000);
    const barcode = random.toString().padStart(12, "0");
    setValue("barcode", barcode);
  };

  useEffect(() => {
    if (barcodeRef.current && barcodeValue) {
      try {
        JsBarcode(barcodeRef.current, barcodeValue, {
          format: "EAN13",
          lineColor: "#000",
          width: 1,
          height: 20,
          displayValue: true,
          valid: function (valid) {
            if (!valid) {
              console.error("Invalid EAN-13 barcode");
            }
          },
        });
      } catch (error) {
        console.error("Barcode generation error:", error);
      }
    }
  }, [barcodeValue]);

  return (
    <div className="flex flex-col gap-2 mb-4">
      <Label id="bar">
        BarCode<span className="text-[var(--h-text-gray)]">Optional</span>
      </Label>
      <div className="relative flex justify-between gap-2">
        <input
          {...register("barcode", {
            required: "Barcode is required",
            minLength: { value: 13, message: "Must be 13 digits" },
            maxLength: { value: 13, message: "Must be 13 digits" },
            pattern: {
              value: /^\d+$/,
              message: "Only numbers allowed",
            },
          })}
          id="bar"
          name="barcode"
          placeholder="Enter barCode"
        />
        <button
          type="button"
          onClick={generateBarcode}
          className="w-full border border-black cursor-pointer"
        >
          Generate Barcode
        </button>
      </div>
      {barcodeValue && (
        <div className="w-full">
          <svg ref={barcodeRef}></svg>
        </div>
      )}
    </div>
  );
};

export default BarCode;
