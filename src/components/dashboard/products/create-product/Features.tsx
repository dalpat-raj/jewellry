"use client"
import Button_Input_Absolute from "@/components/common/Button_Input_Absolute";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/types/product.types";
import { X } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form"

const Features = () => {
    const [featureInput, setFeatureInput] = useState("");
    const { control, watch, setValue, formState: {errors} } = useFormContext<Product>();

    const features = watch("features") || [];

    const handleAddTag = () => {
    if (featureInput.trim() !== "" && !features.includes(featureInput.trim())) {
        setValue("features", [...features, featureInput.trim()])
        setFeatureInput("")
    }
    }
    
    const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        e.preventDefault()
        handleAddTag()
    }
    }
    
    const removeFeature = (featureToRemove: string) => {
    const filtered = features.filter((t) => t !== featureToRemove)
    setValue("features", filtered)
    }
  return (
    <div className="w-full flex flex-col gap-2 ">
        <Label htmlFor="tag-input">Features<span className="text-[var(--h-text-gray)]">Optional</span></Label>
        <Controller
            control={control}
            name="features"
            render={() => (
            <>
                <div className="relative">
                <Input
                    id="tag-input"
                    placeholder="Type Feature"
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyDown={handleEnterKey} 
                />
                <Button_Input_Absolute func={handleAddTag}>Add</Button_Input_Absolute>
                {errors?.features && <span className="text-[12px] text-red-600">{errors?.features?.message}</span>}
                </div>
                {features.length > 0 && (
                <div className="flex flex-col gap-2 mt-2">
                    {features.map((feature, index) => (
                    <div
                        key={index}
                        className="relative bg-muted px-3 py-1 text-sm"
                    >
                        <span>{index + 1}. {feature}</span>
                        <button
                        type="button"
                        onClick={() => removeFeature(feature)}
                        className="absolute right-0 top-0 px-2 h-full bg-gray-200 dark:bg-gray-700 text-muted-foreground hover:text-destructive cursor-pointer"
                        >
                        <X size={18} />
                        </button>
                    </div>
                    ))}
                </div>
                )}
            </>
            )}
        />
        </div>
  )
}

export default Features