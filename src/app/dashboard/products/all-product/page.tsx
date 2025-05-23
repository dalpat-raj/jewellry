import { Button_Dark, Button_light } from "@/components/common/Button_Primary";
import All_Products from "@/components/dashboard/products/all-product/All_Products";
import { Download, FileArchive, Plus } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-sidebar px-6 py-4 max-sm:px-2">
        <div className=" flex justify-between items-center">
          <h4 className="text-lg font-medium text-[var(--h-text-color)]">
            Product List
          </h4>
          <div className="flex justify-end items-center gap-4">
            <Button_light Icon={Download} size={14} text="Import" />
            <Button_light Icon={FileArchive} size={14} text="Export" />
            <Button_Dark Icon={Plus} size={14} text="Add Product" />
          </div>
        </div>
      </div>
      <All_Products />
    </div>
  );
};

export default page;
