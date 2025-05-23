import { Product } from "@/types/product.types";
import { UploadCloud } from "lucide-react";
import { useFormContext } from "react-hook-form";

type Props = {
  onComplete: (urls: { url: string; key: string }[]) => void;
  index: number;
  varientTypes: "colors" | "materials" | "sizes";
  multiple?: boolean;
};

const FileUploader = ({
  onComplete,
  index,
  varientTypes,
  multiple = true,
}: Props) => {
  const { watch, setValue } = useFormContext<Product>();
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("images", file));

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    // ✅ Uploaded image URLs from server
    const uploadedUrls: string[] = data.files;

    // ✅ Set these URLs to react-hook-form state (not blob URLs!)
    const currentImages =
      watch(`${varientTypes}.${index}.images` as `colors.${number}.images`) ||
      [];
    setValue(`${varientTypes}.${index}.images` as `colors.${number}.images`, [
      ...currentImages,
      ...uploadedUrls,
    ]);
  };

  return (
    <label className="w-full h-full bg-[var(--white)] border-[1px] border-black dark:bg-sidebar dark:border-gray-500 py-1 px-4 text-sm flex gap-2 items-center justify-center cursor-pointer">
      <UploadCloud size={18} />
      <p className="text-sm text-nowrap">Click to upload</p>
      <input
        type="file"
        multiple={multiple}
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </label>
  );
};

export default FileUploader;
