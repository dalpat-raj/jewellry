// app/api/uploadthing/delete/route.ts
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function POST(req: Request) {
  try {
    const { key } = await req.json();

    if (!key) return NextResponse.json({ error: "Key is required" }, { status: 400 });

    const result = await utapi.deleteFiles(key);

    if (!result?.success) {
      return NextResponse.json({ error: "Failed to delete file" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[UPLOADTHING_DELETE]", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
