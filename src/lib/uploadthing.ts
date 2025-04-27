import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export async function deleteFromUploadthing(key: string) {
    const res = await fetch("/api/uploadthing/delete", {
      method: "POST",
      body: JSON.stringify({ key }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.error || "Failed to delete image");
    }
  
    return data;
  }

