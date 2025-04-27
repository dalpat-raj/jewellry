import React from "react";
import { TooltipCommon } from "@/components/common/Tooltip";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Save, Scan } from "lucide-react";

import Link from "next/link";
import LoaderSpinner from "@/components/layout/loading/LoaderSpinner";
import ButtonWithSpinner from "@/components/layout/loading/ButtonWithSpinner";
import { InfinitySpin, Oval } from "react-loader-spinner";
import { cn } from "@/lib/utils";

const Form_Header = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      <header className=" flex justify-between gap-4 items-center p-6 max-sm:px-2 max-sm:py-4">
        <Link href="/dashboard/products" className="flex gap-4 items-center">
          <div>
            <ArrowLeft size={18} />
          </div>
          <div className="max-sm:hidden">
            <span className="text-[12px] text-[var(--h-text-gray)]">
              Back to List
            </span>
            <h6 className="font-semibold dark:font-medium text-sm text-[var(--h-text-color)] dark:text-[var(--white)] leading-4">
              Add New Product
            </h6>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <TooltipCommon
            button={
              <button className="border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-sm flex gap-1 items-center cursor-pointer">
                <Scan size={14} />
                <span className="text-[13px] font-medium max-sm:hidden">
                  Scan to Fill Form
                </span>
              </button>
            }
            text="Scan Feature: for autometic form filling"
          />

          <button className="border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-sm flex gap-1 items-center cursor-pointer">
            <Save size={14} />
            <span className="text-[13px] font-medium max-sm:hidden">
              Save to Draft
            </span>
          </button>
          <button
            type={isLoading ? "button" : "submit"}
            className={cn(
              "text-[13px] font-medium border border-gray-200 dark:border-gray-800 bg-sidebar px-2 py-1 rounded-sm cursor-pointer",
              isLoading && "opacity-25 border-gray-500 cursor-not-allowed"
            )}
          >
            Save Product
          </button>
        </div>
      </header>
      <Separator />
    </>
  );
};

export default Form_Header;
