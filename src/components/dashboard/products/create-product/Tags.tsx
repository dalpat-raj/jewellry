import Button_Input_Absolute from "@/components/common/Button_Input_Absolute";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/types/product.types";
import { X } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const Tags = () => {
  const [tagInput, setTagInput] = useState("");
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<Product>();

  const tags = watch("tags") || [];

  const handleAddTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setValue("tags", [...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const removeTag = (tagToRemove: string) => {
    const filtered = tags.filter((t) => t !== tagToRemove);
    setValue("tags", filtered);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <Label htmlFor="tag-input">
        Tags<span className="text-[var(--h-text-gray)]">Optional</span>
      </Label>
      <Controller
        control={control}
        name="tags"
        render={() => (
          <>
            <div className="relative">
              <Input
                id="tag-input"
                placeholder="Type tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleEnterKey}
              />
              <Button_Input_Absolute func={handleAddTag}>
                Add
              </Button_Input_Absolute>
              {errors?.tags && (
                <span className="text-[12px] text-red-600">
                  {errors?.tags?.message}
                </span>
              )}
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full text-sm"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Tags;
