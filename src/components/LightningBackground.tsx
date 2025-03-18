
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface LightningBackgroundProps {
  color?: string;
  intensity?: number;
  frequency?: number;
}

const LightningBackground: React.FC<LightningBackgroundProps> = ({
  color = "#FF1493",
  intensity = 0.7,
  frequency = 3
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Function to create a lightning bolt
    const createLightningBolt = () => {
      const bolt = document.createElement('div');
      const startX = Math.random() * width;
      const startY = 0;
      const length = height * (0.3 + Math.random() * 0.7);
      const thickness = 2 + Math.random() * 3;
      
      // Set up bolt styling
      bolt.style.position = 'absolute';
      bolt.style.top = `${startY}px`;
      bolt.style.left = `${startX}px`;
      bolt.style.width = `${thickness}px`;
      bolt.style.height = `${length}px`;
      bolt.style.backgroundColor = color;
      bolt.style.opacity = '0';
      bolt.style.filter = `blur(${Math.random() * 2}px) brightness(1.5)`;
      bolt.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
      bolt.style.transform = `rotate(${85 + Math.random() * 10}deg)`;
      bolt.style.transformOrigin = 'top left';
      bolt.style.zIndex = '1';
      
      container.appendChild(bolt);
      
      // Animate the bolt
      const timeline = gsap.timeline({
        onComplete: () => bolt.remove()
      });
      
      timeline.to(bolt, {
        opacity: intensity,
        duration: 0.05,
        ease: "power4.out"
      });
      
      if (Math.random() > 0.5) {
        timeline.to(bolt, {
          opacity: 0.3,
          duration: 0.05,
          delay: 0.05
        });
        
        timeline.to(bolt, {
          opacity: intensity,
          duration: 0.05
        });
      }
      
      timeline.to(bolt, {
        opacity: 0,
        duration: 0.1,
        delay: 0.1
      });
      
      // Create branches
      const branches = Math.floor(Math.random() * 3);
      for (let i = 0; i < branches; i++) {
        const branchY = startY + (length * (0.2 + Math.random() * 0.6));
        const branchLength = length * 0.2 + Math.random() * 0.3;
        const branchThickness = thickness * 0.7;
        const branch = document.createElement('div');
        
        branch.style.position = 'absolute';
        branch.style.top = `${branchY}px`;
        branch.style.left = `${startX}px`;
        branch.style.width = `${branchThickness}px`;
        branch.style.height = `${branchLength}px`;
        branch.style.backgroundColor = color;
        branch.style.opacity = '0';
        branch.style.filter = `blur(${Math.random() * 1.5}px) brightness(1.5)`;
        branch.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
        branch.style.transform = `rotate(${40 + Math.random() * 100}deg)`;
        branch.style.transformOrigin = 'top left';
        branch.style.zIndex = '1';
        
        container.appendChild(branch);
        
        gsap.to(branch, {
          opacity: intensity * 0.7,
          duration: 0.05,
          ease: "power4.out",
          delay: 0.05,
          onComplete: () => {
            gsap.to(branch, {
              opacity: 0,
              duration: 0.1,
              delay: 0.05,
              onComplete: () => branch.remove()
            });
          }
        });
      }
    };
    
    // Background flash
    const createBackgroundFlash = () => {
      const flash = document.createElement('div');
      flash.style.position = 'absolute';
      flash.style.inset = '0';
      flash.style.backgroundColor = color;
      flash.style.opacity = '0';
      flash.style.zIndex = '0';
      
      container.appendChild(flash);
      
      gsap.to(flash, {
        opacity: 0.1 + (Math.random() * 0.1),
        duration: 0.05,
        onComplete: () => {
          gsap.to(flash, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => flash.remove()
          });
        }
      });
    };
    
    // Create lightning at random intervals
    const createRandomLightning = () => {
      const shouldCreateLightning = Math.random() > 0.7;
      if (shouldCreateLightning) {
        createLightningBolt();
        createBackgroundFlash();
        
        // Multiple bolts for a storm effect
        if (Math.random() > 0.7) {
          setTimeout(() => {
            createLightningBolt();
          }, 100 + Math.random() * 200);
        }
      }
    };
    
    // Set interval for lightning generation
    const intervalTime = 1000 / frequency;
    const interval = setInterval(createRandomLightning, intervalTime);
    
    return () => {
      clearInterval(interval);
      // Clean up any remaining elements
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [color, intensity, frequency]);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
    </div>
  );
};

export default LightningBackground;
