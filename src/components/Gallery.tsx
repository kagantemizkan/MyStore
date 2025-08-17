import { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import MiniVideoPlayer from "@/components/MiniVideoPlayer";

export interface GalleryItem {
  type: "image" | "video";
  url: string;
  alt?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  className?: string;
}

export default function Gallery({ items, className = "" }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  }, [items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, goToPrevious, goToNext]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  if (!items || items.length === 0) {
    return <p className="text-muted-foreground">—</p>;
  }

  return (
    <>
      {/* Thumbnail Gallery */}
      <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 overflow-hidden rounded-lg w-[216px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openModal(idx)}
          >
            {item.type === "video" ? (
              <MiniVideoPlayer src={item.url} className="w-full h-full" />
            ) : (
              <img src={item.url} alt={item.alt ?? `Screenshot ${idx + 1}`} className="w-full h-full object-contain" />
            )}
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Close Button */}
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10 text-white hover:bg-white/20" onClick={closeModal}>
            <FiX className="w-6 h-6" />
          </Button>

          {/* Navigation Buttons */}
          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goToPrevious}
              >
                <FiChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goToNext}
              >
                <FiChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          {/* Media Container */}
          <div className="max-w-[20vw]  flex items-center justify-center">
            {items[currentIndex].type === "video" ? (
              <video src={items[currentIndex].url} controls className="max-w-full max-h-full" style={{ objectFit: "contain" }} />
            ) : (
              <img
                src={items[currentIndex].url}
                alt={items[currentIndex].alt ?? `Screenshot ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Image Counter */}
          {items.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded">
              {currentIndex + 1} / {items.length}
            </div>
          )}

          {/* Background Click to Close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </>
  );
}
