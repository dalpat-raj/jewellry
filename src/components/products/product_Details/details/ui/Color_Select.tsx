"use client"
import React, { useState } from 'react'

interface ColorOption {
    value: string;
    name: string;
    bgColor: string; 
  }

const Color_Select = () => {
    const colorOptions: ColorOption[] = [
        { value: 'red', name: 'Gold', bgColor: 'bg-red-500' },
        { value: 'blue', name: 'Silver', bgColor: 'bg-blue-500' },
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0].value);
  return (
    <div>
        <p className='my-2 uppercase text-[12px]'>{selectedColor}</p>
        <div className="flex gap-2 ml-1">
            {colorOptions.map((color) => (
            <div key={color.value} className="relative group">
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white uppercase text-xs px-2 py-1 whitespace-nowrap">
                {color.name}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
                
                {/* Color circle */}
                <button
                type="button"
                onClick={() => setSelectedColor(color.value)}
                className={`w-8 h-8 rounded-full ${color.bgColor} transition-all duration-200 ${
                    selectedColor === color.value 
                    ? 'ring-2 ring-offset-2 ring-black' 
                    : 'hover:ring-1 hover:ring-gray-400'
                }`}
                aria-label={`Select color: ${color.name}`}
                />
            </div>
            ))}
        </div>
    </div>
  )
}

export default Color_Select