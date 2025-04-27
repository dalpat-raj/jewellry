"use client";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image";
import { useState } from 'react';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
} 

export function ImagePreviewModal({isOpen, onClose, images}: ImageZoomModalProps) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [zoom, setZoom] = useState(false)
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogOverlay className="bg-black backdrop-blur-lg" >
        <DialogContent className="h-[100vh] bg-black p-0 border-0">
        <DialogTitle className='sr-only'>Are you absolutely sure?</DialogTitle>

          {/* Main image with zoom */}
          <div 
            className="h-[90vh] flex items-center justify-center p-4 absolute" 
            onClick={() =>setZoom(!zoom) }
            style={{
              transform: zoom ? "scale(1.5)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}>
              <Image
                src={activeImage}
                alt="active image"
                width={0}
                height={0}
                sizes="100vw"
                style={{width: "100%", height: "100%", objectFit: "cover"}}
              />
           </div>

          <div className="mt-4 w-full absolute bottom-0 left-0 flex justify-center items-center">
            <div className="flex gap-2 overflow-x-auto p-2 rounded-md image-preview-overlay">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative rounded border-2 cursor-pointer transition-all`}
                >
                  <Image 
                    src={img} 
                    alt={`Thumb ${idx}`} 
                    fill
                    sizes="80px"
                    className="object-cover -sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}