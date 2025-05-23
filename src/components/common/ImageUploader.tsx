import { UploadCloud } from "lucide-react";
import { useFormContext } from "react-hook-form";

type SingleFileUploaderProps = {
  onComplete?: (urls: string[]) => void;
  fieldName: string;
  setUploadProgress: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SingleImageUploader = ({
  onComplete,
  fieldName,
  setUploadProgress,
}: SingleFileUploaderProps) => {
  const { setValue } = useFormContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadProgress(true);
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    const uploadedUrls: string[] = data.files;

    setValue(fieldName, uploadedUrls[0]);

    if (onComplete) onComplete(uploadedUrls);
    setUploadProgress(false);
  };

  return (
    <label className="bg-white dark:bg-sidebar border border-black dark:border-gray-500 py-1 px-4 text-sm flex gap-2 items-center justify-center cursor-pointer">
      <UploadCloud size={18} />
      <p>Click to upload</p>
      <input
        type="file"
        multiple={false}
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </label>
  );
};

type MultipleFileUploaderProps = {
  onComplete?: (urls: string[]) => void;
  fieldName: string;
};

export const MultipleImageUploader = ({
  onComplete,
  fieldName,
}: MultipleFileUploaderProps) => {
  const { watch, setValue } = useFormContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // add setUploadProgress true
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    const uploadedUrls: string[] = data.files;

    const current = watch(fieldName) || [];

    setValue(fieldName, [...current, ...uploadedUrls]);

    if (onComplete) onComplete(uploadedUrls);
    // add setUploadProgress false
  };

  return (
    <label className="bg-white dark:bg-sidebar border border-black dark:border-gray-500 py-1 px-4 text-sm flex gap-2 items-center justify-center cursor-pointer">
      <UploadCloud size={18} />
      <p>Click to upload</p>
      <input
        type="file"
        multiple={true}
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </label>
  );
};
