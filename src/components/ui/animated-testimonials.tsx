import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ImageType {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ImageType[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images = [] }) => {
  const [active, setActive] = useState<number>(0);

  // If there are no images, render a placeholder
  if (!images || images.length === 0) {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="relative bg-gray-100 rounded-2xl flex items-center justify-center">
          <p className="text-gray-500">No images available</p>
        </div>
      </div>
    );
  }

  const handleNext = (): void => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (): void => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full max-w-[500px]">
        <AnimatePresence mode="wait">
          {images[active] && (
            <motion.div
              key={images[active].src}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src={images[active].src}
                alt={images[active].alt}
                loading="eager"
                className="rounded-2xl object-contain w-[400px] h-[400px]"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <button
            onClick={handlePrev}
            className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            aria-label="Previous image"
          >
            <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            aria-label="Next image"
          >
            <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;