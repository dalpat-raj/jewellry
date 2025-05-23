import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");
  

  if (!filename) {
    return NextResponse.json({ error: "Filename is required" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "public", "uploads", filename);

  try {
    fs.unlinkSync(filePath);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to delete file:", err);
    return NextResponse.json({ error: "Failed to delete file" }, { status: 500 });
  }
}
