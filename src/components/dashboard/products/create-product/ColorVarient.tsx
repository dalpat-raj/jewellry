// components/ColorVariant.tsx
"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Image from "next/image";
import { FileUploader } from "@/components/common/FileUploader";
import { useImageUpload } from "@/hooks/useProductImage";

export const ColorVariant = ({
  index,
  onRemove,
}: {
  index: number;
  onRemove: () => void;
}) => {
  console.log(index);

  const { register, watch, setValue } = useFormContext();
  const { isUploading, uploadMultipleImages } = useImageUpload();

  const handleImageUploads = async (files: File[]) => {
    try {
      uploadMultipleImages(files);

      const currentImages = watch(`colors.${index}.images`) || [];
      setValue(`colors.${index}.images`, [...currentImages, ...uploadedUrls]);
    } catch (error) {
      console.error(`Error uploading to colors[${index}]:`, error);
    }
  };

  const handleImageUpload = async (files: File[]) => {
    try {
      const uploadedUrls = await uploadMultipleImages(files);
      const currentImages = watch(`colors.${index}.images`) || [];

      setValue(`colors.${index}.images`, [...currentImages, ...uploadedUrls]);
    } catch (error) {
      console.error(`Error uploading images for`);
    }
  };

  const images = watch(`colors.${index}.images`) || [];

  return (
    <div className="grid grid-cols-3 gap-8 max-md:gap-4 relative m-4 p-4 rounded-sm border border-gray-300">
      <div className="col-span-2 max-md:col-span-3">
        <div className="bg-sidebar rounded-sm">
          <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-4">
            {images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="relative aspect-square rounded overflow-hidden border"
              >
                <Image
                  src={img}
                  alt={`color-${index}-${imgIndex}`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => {
                    const updated = [...images];
                    updated.splice(imgIndex, 1);
                    setValue(`colors.${index}.images`, updated);
                  }}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <FileUploader
              onComplete={handleImageUpload}
              multiple={true}
              disabled={isUploading}
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 max-md:col-span-3">
        {/* Color variant form fields */}
        <div className="flex justify-between max-lg:flex-col gap-4 mb-6">
          <div className="w-full flex flex-col gap-2">
            <Label>Color Name</Label>
            <Input
              {...register(`colors.${index}.name`)}
              placeholder="Eg. Black"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label>Hex Code</Label>
            <Input
              {...register(`colors.${index}.hexCode`)}
              placeholder="#000000"
            />
          </div>
        </div>

        {/* Other fields... */}
      </div>

      <button
        className="absolute -top-0 -right-0 px-2 rounded-sm bg-red-200 dark:bg-red-400 cursor-pointer border border-black"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
};
