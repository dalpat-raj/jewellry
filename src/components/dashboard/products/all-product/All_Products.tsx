"use client";
import { Button_Light_Height } from "@/components/common/Button_Primary";
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import { Input } from "@/components/ui/input";
import { Ellipsis, Filter, Search } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select-custom";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

function All_Products() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  return (
    <div className="px-6 max-sm:px-2">
      <div className="py-4 flex justify-between max-md:justify-end max-md:flex-col-reverse items-center gap-4">
        <div className="w-1/4 max-sm:w-11/12 relative max-md:w-full">
          <Input
            className=" rounded-md py-4  max-sm:py-5"
            placeholder="Search"
          />
          <span className="absolute right-2 top-[50%] transform translate-y-[-50%] cursor-pointer text-[var(--text-color)]">
            <Search size={18} className="text-gray-400" />
          </span>
        </div>
        <div className="w-3/4 max-md:w-full flex justify-end max-md:justify-between items-center gap-4">
          <DateRangePicker date={dateRange} setDate={setDateRange} />
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button_Light_Height
            Icon={Filter}
            size={14}
            text="Filter"
            py={"6px"}
            pys={"8px"}
          />
        </div>
      </div>

      <table className="w-full rounded-sm overflow-hidden ">
        <thead className="bg-sidebar text-left text-[13px]">
          <tr className="">
            <th className="pl-4 max-sm:pl-2 py-3 font-medium flex items-center gap-4">
              <Checkbox className="bg-white" /> <span>Product Name</span>
            </th>
            <th className="pl-8 py-2 font-medium">SKU</th>
            <th className="pl-8 py-2 font-medium max-sm:hidden">Stock</th>
            <th className="pl-8 py-2 font-medium max-sm:hidden">Price</th>
            <th className="pl-8 py-2 font-medium max-sm:hidden">Uploaded</th>
            <th className="pl-8 py-2 font-medium max-sm:hidden">Status</th>
            <th className="pl-8 py-2 font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-b border-gray-100 text-[var(--text-color)] text-sm">
            <td className="pl-4 max-sm:pl-2 py-2 flex items-center gap-4">
              <Checkbox className="bg-white" />
              <div className="flex gap-2 items-center ">
                <Image
                  src="/products/p-1-1.png"
                  alt={""}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  className=""
                />
                <span className="leading-4">Product Name </span>
              </div>
            </td>
            <td className="pl-8 text-[13px] max-sm:text-[12px] font-medium">
              SKU-RED-XL
            </td>
            <td className="pl-8 max-sm:hidden">3</td>
            <td className="pl-8 max-sm:hidden">4</td>
            <td className="pl-8 max-sm:hidden">20 Oct 2025</td>
            <td className="pl-8 max-sm:hidden">Published </td>
            <td className="pl-8">
              <Ellipsis
                size={24}
                className="text-[var(--h-text-gray)] cursor-pointer"
              />
            </td>
          </tr>
          <tr className="border-b border-gray-100 text-[var(--text-color)] text-sm">
            <td className="pl-4 max-sm:pl-2 py-2 flex items-center gap-4">
              <Checkbox className="bg-white" />
              <div className="flex gap-2 items-center ">
                <Image
                  src="/products/p-1-1.png"
                  alt={""}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  className=""
                />
                <span className="leading-4">Product Name </span>
              </div>
            </td>
            <td className="pl-8 text-[13px] max-sm:text-[12px] font-medium">
              SKU-RED-XL
            </td>
            <td className="pl-8 max-sm:hidden">3</td>
            <td className="pl-8 max-sm:hidden">4</td>
            <td className="pl-8 max-sm:hidden">20 Oct 2025</td>
            <td className="pl-8 max-sm:hidden">Published </td>
            <td className="pl-8">
              <Ellipsis
                size={24}
                className="text-[var(--h-text-gray)] cursor-pointer"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default All_Products;
