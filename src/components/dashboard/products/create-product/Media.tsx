import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageSkeleton } from "@/components/layout/skeletons/Skeletons";
import { deleteImageFromServer } from "@/lib/deleteImages";
import {
  SingleImageUploader,
  MultipleImageUploader,
} from "@/components/common/ImageUploader";

export function MainImage() {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [uploadProgress, setUploadProgress] = useState<boolean>(true);

  const [deleting, setDeleting] = useState<boolean>(false);
  const { setValue, watch } = useFormContext();
  const mainImage = watch("mainImage");

  return (
    <div className="col-span-5 relative max-sm:col-span-12 bg-sidebar rounded-sm">
      <h2 className="p-4 text-[15px] font-medium">
        Main Image
        <span className="text-[var(--h-text-gray)] text-[13px]">
          &nbsp;Optional
        </span>
      </h2>
      <Separator />

      {deleting ? (
        <div
          className="flex items-center justify-center h-full bg-muted text-muted-foreground"
          style={{ aspectRatio: "1/1" }}
        >
          Deleting...
        </div>
      ) : (
        mainImage && (
          <div
            className="relative overflow-hidden p-4 "
            style={{ aspectRatio: "1/1" }}
          >
            {(imageLoading || uploadProgress) && <ImageSkeleton />}
            <Image
              src={mainImage}
              alt="Main"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="border border-gray-200 rounded-sm"
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
            <button
              type="button"
              onClick={async () => {
                setDeleting(true);
                await deleteImageFromServer(mainImage);
                setValue("mainImage", "");
                setDeleting(false);
                setImageLoading(true); // reset for next image
              }}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
            >
              <X size={14} />
            </button>
          </div>
        )
      )}

      <div className="absolute top-3 right-4 bg-[var(--white)]">
        <SingleImageUploader
          fieldName="mainImage"
          setUploadProgress={setUploadProgress}
        />
      </div>
    </div>
  );
}

export function GalleryImages() {
  const [deletingStates, setDeletingStates] = useState<Record<number, boolean>>(
    {}
  );
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>(
    {}
  );
  const [uploadProgress, setUploadProgress] = useState<Record<number, boolean>>(
    {}
  );

  const { setValue, watch } = useFormContext();

  return (
    <div className="col-span-7 relative max-sm:col-span-12 bg-sidebar rounded-sm">
      <h2 className="p-4 text-[15px] font-medium">
        Gallery
        <span className="text-[var(--h-text-gray)] text-[13px]">
          &nbsp; &nbsp;Optional
        </span>
      </h2>
      <Separator />
      <div
        className={cn(
          "w-full ",
          watch("gallery")?.length >= 1 && "grid grid-cols-12 gap-4 p-4"
        )}
      >
        {(watch("gallery") || [])?.map((img: string, index: number) => (
          <div
            key={index}
            className="w-full relative col-span-3 max-sm:col-span-4 overflow-hidden"
            style={{ aspectRatio: "1/1" }}
          >
            {deletingStates[index] ? (
              <div className="w-full flex items-center justify-center h-full bg-muted text-muted-foreground">
                Deleting...
              </div>
            ) : (
              <div className="border border-gray-200 rounded-sm overflow-hidden">
                {(loadingStates[index] === undefined ||
                  loadingStates[index]) && <ImageSkeleton />}
                <Image
                  src={img}
                  alt={img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onLoad={() =>
                    setLoadingStates((prev) => ({ ...prev, [index]: false }))
                  }
                  onError={() =>
                    setLoadingStates((prev) => ({ ...prev, [index]: false }))
                  }
                />
                <button
                  type="button"
                  onClick={async () => {
                    setDeletingStates((prev) => ({ ...prev, [index]: true }));
                    const current = watch("gallery") || [];
                    const updated = [...current];
                    const deletedImage = updated[index];
                    updated.splice(index, 1);
                    setValue("gallery", updated);
                    await deleteImageFromServer(deletedImage);
                    setDeletingStates((prev) => ({ ...prev, [index]: false }));
                  }}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
        <div className="absolute top-3 right-4">
          <MultipleImageUploader fieldName="gallery" />
        </div>
      </div>
    </div>
  );
}
