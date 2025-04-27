// app/api/uploadthing/core.ts
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 6 } })
    .onUploadComplete(({ file }) => {
      console.log("file uploaded", file);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
