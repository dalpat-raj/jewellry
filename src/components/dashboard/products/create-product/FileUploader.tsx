import { useUploadThing } from "@/lib/uploadthing";
import { UploadCloud } from "lucide-react";

type Props = {
  onComplete: (urls: { url: string; key: string }[]) => void;
  multiple?: boolean;
};

const FileUploader = ({ onComplete, multiple = true }: Props) => {
  const { startUpload, isUploading } = useUploadThing("imageUploader");
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length) {
      const uploaded = await startUpload(files);
      if (uploaded) {
        const result = uploaded.map((f) => ({ url: f.url, key: f.key }));
        onComplete(result);
      }
    }
  };

  return (
    <label className="bg-[var(--white)] border-[1px] border-black dark:bg-sidebar dark:border-gray-500 py-1 px-4 text-sm flex gap-2 items-center justify-center cursor-pointer">
      <UploadCloud size={18} />
      {isUploading ? (
        <p className="text-sm">Uploading...</p>
      ) : (
        <>
          <p className="text-sm">Click to upload</p>
          <input
            type="file"
            multiple={multiple}
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </>
      )}
    </label>
  );
};

export default FileUploader;
