// "use client";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { ImagePreviewModal } from "./ImagePreviewModal";
// import { useState } from "react";

// interface CarouselProductImagesProps {
//   images: string[];
//   arrowColor?: string;
// }

// const Carousel_Product_Images = ({ images, arrowColor = "indigo" }: CarouselProductImagesProps) => {
//   const responsive = {
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
//   };


//   const CustomArrow = ({ onClick, direction }: { onClick?: () => void; direction: 'left' | 'right' }) => (
//     <button
//         onClick={onClick}
//         className={`
//         absolute ${direction === 'left' ? 'left-2 max-sm:left-0' : 'right-2 max-sm:right-0'} z-10 p-2
//         bg-none 
//         text-black hover:text-[var(--h-text-color)] rounded-full
//         transition-all duration-300
//         opacity-100  
//         `}
//         aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
//     >
//       {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
//     </button>
//   );

//   return (
//     <div className='col-span-1  max-sm:col-span-2 group'> 
//       <Carousel
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         responsive={responsive}
//         ssr={true}
//         infinite={true}
//         autoPlaySpeed={3000}
//         keyBoardControl={true}
//         customTransition="all .5s"
//         transitionDuration={500}
//         containerClass="carousel-container"
//         customLeftArrow={<CustomArrow direction="left" />}
//         customRightArrow={<CustomArrow direction="right" />}
//         dotListClass="[&>.react-multi-carousel-dot>button]:border-gray-400 [&>.react-multi-carousel-dot--active>button]:bg-gray-800"
//         itemClass="carousel-item-padding-40-px"
//       >
//         {images.map((item, i) => (
//           <div key={i} className="relative aspect-square">
//             <Image
//               src={item}
//               alt={`Product ${i + 1}`}
//               fill
//               sizes="(max-width: 768px) 100vw, 50vw"
//               className="object-cover cursor-zoom-in"
//               priority={i === 0}
//               onClick={() => setPreviewOpen(true)}
//             />
//           </div>
//         ))}
//       </Carousel>
//       <ImagePreviewModal/>
//     </div>
//   );
// };

// export default Carousel_Product_Images;



"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImagePreviewModal } from "./ImagePreviewModal";
import { useState } from "react";

interface CarouselProductImagesProps {
  images: string[];
  arrowColor?: string;
}


const Carousel_Product_Images = ({ images }: CarouselProductImagesProps) => {
  const [previewOpen, setPreviewOpen] = useState(false);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };


  const CustomArrow = ({ onClick, direction }: { onClick?: () => void; direction: 'left' | 'right' }) => (
    <button
        onClick={onClick}
        className={`
        absolute ${direction === 'left' ? 'left-2 max-sm:left-0' : 'right-2 max-sm:right-0'} z-10 p-2
        bg-none 
        text-black hover:text-[var(--h-text-color)] rounded-full
        transition-all duration-300
        opacity-100  
        `}
        aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );

  return (
    <div className='col-span-1  max-sm:col-span-2 group'> 
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        customLeftArrow={<CustomArrow direction="left" />}
        customRightArrow={<CustomArrow direction="right" />}
        dotListClass="[&>.react-multi-carousel-dot>button]:border-gray-400 [&>.react-multi-carousel-dot--active>button]:bg-gray-800"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((item, i) => (
          <div key={i} className="relative aspect-square">
            <Image
              src={item}
              alt={`Product ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover cursor-zoom-in"
              priority={i === 0}
              onClick={() => setPreviewOpen(true)}
            />
          </div>
        ))}
      </Carousel>
      <ImagePreviewModal
      isOpen={previewOpen}
      onClose={() => setPreviewOpen(false)}
      images={images}
      />
    </div>
  );
};

export default Carousel_Product_Images;

