import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeImagesProps {
  images: string[];
  direction?: "left" | "right";
}

const MarqueeImages = ({ images, direction = "left" }: MarqueeImagesProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const [x, xEnd] = direction === "left" 
      ? [wrapper.scrollWidth * -1, 0] 
      : [0, (wrapper.scrollWidth - wrapper.offsetWidth) * -1];

    gsap.fromTo(wrapper, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: wrapper,
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
      }
    });
  }, [direction]);

  return (
    <div className="overflow-x-hidden py-8 bg-black">
      <div ref={wrapperRef} className="flex gap-4">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] h-[200px]">
            <img 
              src={src} 
              alt={`Marquee image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeImages;