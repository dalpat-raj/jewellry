import React from "react";
import { Identification, BasicInfo, MoreInfo } from "./Basic_Info";
import { Discount, Inventory, Pricing } from "./Pricing";
import { Accordion } from "@/components/ui/accordion-form";
import Dimension from "./Dimension";
import { MainImage, GalleryImages } from "./Media";
import ProductVariants from "./Variants";

const ChildComponents = () => {
  return (
    <Accordion
      type="multiple"
      className="w-full grid grid-cols-3 items-baseline gap-6 p-6 max-sm:px-2"
    >
      <div className="col-span-1 max-lg:col-span-3 flex flex-col gap-4">
        <Identification />
        <Pricing />
        <Discount />
        <Inventory />
        <MainImage />
      </div>

      <div className="col-span-2 max-lg:col-span-3 flex flex-col gap-4">
        <BasicInfo />
        <MoreInfo />
        <Dimension />
        <GalleryImages />
      </div>

      <div className="col-span-3 max-md:col-span-3 flex flex-col gap-4">
        <ProductVariants />
      </div>
    </Accordion>
  );
};

export default ChildComponents;
