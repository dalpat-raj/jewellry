"use client";

import { useState } from "react";
import { deleteFromUploadthing } from "@/lib/uploadthing";

export interface UploadedImage {
  url: string;
  key: string;
}

export const useImageUploader = (
  setValue: (name: string, value: any) => void,
  watch: (name: string) => any
) => {
  const [singleImage, setSingleImage] = useState<UploadedImage | undefined>(watch("mainImage") || undefined);
  const [multiImage, setMultiImage] = useState<UploadedImage[]>(watch("gallery") || []);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingIndexes, setDeletingIndexes] = useState<number[]>([]);

  const handleUpload = (files: UploadedImage[], type: "single" | "multiImage") => {
    if (type === "single") {
      setSingleImage(files[0]);
      setValue("mainImage", files[0].url);
    } else {
      const updatedGallery = [...multiImage, ...files];
      setMultiImage(updatedGallery);
      setValue("gallery", updatedGallery.map((img) => img.url));
    }
  };

  const handleDelete = async (index: number, type: string) => {
    const img = multiImage[index];
    if (!img) return;

    setDeletingIndexes((prev) => [...prev, index]);
    try {
      await deleteFromUploadthing(img.key);
      const updated = multiImage.filter((_, i) => i !== index);
      setMultiImage(updated);
      setValue(type, updated);
    } finally {
      setDeletingIndexes((prev) => prev.filter((i) => i !== index));
    }
  };

  const handleDeleteMain = async (types: string) => {
    if (!singleImage) return;
    setIsDeleting(true);
    try {
      await deleteFromUploadthing(singleImage.key);
      setSingleImage(undefined);
      setValue(types, undefined);
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    singleImage,
    multiImage,
    isDeleting,
    deletingIndexes,
    handleUpload,
    handleDelete,
    handleDeleteMain,
  };
};
