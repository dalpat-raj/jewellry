// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Helper function to convert Blob to Buffer
async function blobToBuffer(blob: Blob) {
  const arrayBuffer = await blob.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll("images") as File[];

  const uploadedFiles: string[] = [];

  for (const file of files) {
    const buffer = await blobToBuffer(file);
    const filename = `${Date.now()}-${file.name}`;
    const uploadPath = path.join(process.cwd(), "public/uploads", filename);

    fs.writeFileSync(uploadPath, buffer); // Save image to public/uploads

    uploadedFiles.push(`/uploads/${filename}`); // public path
  }

  return NextResponse.json({ files: uploadedFiles });
}
