// "use client";
import { useFormContext } from "react-hook-form";
import FileUploader from "./FileUploader";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { useImageUploader } from "@/hooks/useImageUploader";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageSkeleton } from "@/components/layout/skeletons/Skeletons";

export function MainImage() {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const { setValue, watch } = useFormContext();
  const { singleImage, isDeleting, handleUpload, handleDeleteMain } =
    useImageUploader(setValue, watch);
  return (
    <div className="col-span-5 relative max-sm:col-span-12 bg-sidebar rounded-sm">
      <h2 className="p-4 text-[15px] font-medium">
        Main Image
        <span className="text-[var(--h-text-gray)] text-[13px]">
          &nbsp;Optional
        </span>
      </h2>
      <Separator />

      {singleImage ? (
        <div className="relative overflow-hidden p-4 ">
          {isDeleting ? (
            <div className="flex items-center justify-center h-40 bg-muted text-muted-foreground">
              Deleting...
            </div>
          ) : (
            <>
              <Image
                src={singleImage.url}
                alt="Main"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <button
                type="button"
                onClick={() => handleDeleteMain("mainImage")}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                <X size={14} />
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="absolute top-3 right-4 bg-[var(--white)]">
          <FileUploader
            onComplete={(f) => handleUpload(f, "single")}
            multiple={false}
          />
        </div>
      )}
    </div>
  );
}

export function GalleryImages() {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const { setValue, watch } = useFormContext();
  const { multiImage, deletingIndexes, handleUpload, handleDelete } =
    useImageUploader(setValue, watch);
  return (
    <div className="col-span-7 relative max-sm:col-span-12 bg-sidebar rounded-sm">
      <h2 className="p-4 text-[15px] font-medium">
        Gallery
        <span className="text-[var(--h-text-gray)] text-[13px]">
          &nbsp; &nbsp;Optional
        </span>
      </h2>
      <Separator />
      <div className={cn("grid grid-cols-12 gap-4", multiImage[0] && "p-4")}>
        {multiImage.map((img, index) => (
          <div
            key={index}
            className="relative col-span-3 max-sm:col-span-4  rounded overflow-hidden border"
          >
            {deletingIndexes.includes(index) ? (
              <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
                Deleting...
              </div>
            ) : (
              <>
                {imageLoading && <ImageSkeleton />}
                <ImageSkeleton />
                <ImageSkeleton />
                <div className="mt-4 w-32 h-32">
                  <ImageSkeleton />
                </div>
                {/* <Image
                  src={img.url}
                  alt={img.url}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onLoad={() => setImageLoading(false)}
                /> */}
                <button
                  type="button"
                  onClick={() => handleDelete(index, "gallery")}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  <X size={14} />
                </button>
              </>
            )}
          </div>
        ))}
        <ImageSkeleton />
        <div className="absolute top-3 right-4">
          <FileUploader
            onComplete={(f) => handleUpload(f, "multiImage")}
            multiple={true}
          />
        </div>
      </div>
    </div>
  );
}
