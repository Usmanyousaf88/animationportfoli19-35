
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const HelloSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boltRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Lightning animation
    if (boltRef.current && containerRef.current) {
      // Create a timeline for the lightning effect
      const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 3
      });
      
      // Main bolt animation
      timeline.to(boltRef.current, {
        opacity: 1,
        duration: 0.05,
        ease: "power4.out"
      });
      
      timeline.to(boltRef.current, {
        opacity: 0.7,
        duration: 0.05,
        delay: 0.1
      });
      
      timeline.to(boltRef.current, {
        opacity: 1,
        duration: 0.05,
        delay: 0.05
      });
      
      timeline.to(boltRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.2
      });
      
      // Create random lightning flashes in the background
      const createRandomFlash = () => {
        if (!containerRef.current) return;
        
        const flash = document.createElement('div');
        flash.className = 'absolute inset-0 bg-blue-500 opacity-0 z-0';
        containerRef.current.appendChild(flash);
        
        gsap.to(flash, {
          opacity: Math.random() * 0.2,
          duration: 0.05,
          onComplete: () => {
            gsap.to(flash, {
              opacity: 0,
              duration: 0.1,
              delay: 0.05,
              onComplete: () => {
                if (flash.parentNode) {
                  flash.parentNode.removeChild(flash);
                }
              }
            });
          }
        });
      };
      
      // Trigger random flashes
      const flashInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          createRandomFlash();
        }
      }, 1000);
      
      return () => {
        clearInterval(flashInterval);
        timeline.kill();
      };
    }
  }, []);
  
  return (
    <section 
      id="hello" 
      ref={containerRef}
      className="h-screen snap-start bg-black text-white relative overflow-hidden"
    >
      {/* Lightning bolt container */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
        {/* Blue glow background */}
        <div className="absolute right-0 h-full w-1/4 bg-blue-500 blur-[100px] opacity-20"></div>
        
        {/* Main lightning bolt */}
        <div 
          ref={boltRef} 
          className="absolute right-0 h-full opacity-0"
        >
          <img 
            src="/lovable-uploads/fecd35b1-2ed1-4562-94e5-1acef7aca4a4.png" 
            alt="Lightning bolt" 
            className="h-full object-cover"
          />
        </div>
        
        {/* Small random bolts */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`absolute h-60 w-1 bg-blue-400 opacity-0 right-${30 + i * 10} top-${20 + i * 15} lightning-flash-${i}`}
              style={{
                right: `${30 + i * 10}%`,
                top: `${20 + i * 15}%`,
                transform: `rotate(${85 + i * 2}deg)`,
                filter: 'blur(1px)'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full bg-gradient-to-r from-black via-black/80 to-transparent p-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mr-auto"
        >
          <div className="mb-8 flex items-center">
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mr-2">bolt</h2>
            <span className="text-4xl md:text-5xl font-bold text-gray-400">.new</span>
          </div>
          
          <div className="text-xl md:text-2xl space-y-6 max-w-2xl">
            <p className="text-left">Join us from anywhere in the world for the largest online hackathon ever organized. Our cutting-edge virtual platform enables seamless collaboration and networking with fellow innovators globally.</p>
            <p className="text-left">Experience immersive project showcases, real-time mentorship sessions, and interactive workshops - all from the comfort of your home.</p>
            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-left">Event Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-lg opacity-75">Location</p>
                  <p className="text-xl font-medium">Fully Virtual</p>
                </div>
                <div>
                  <p className="text-lg opacity-75">Date</p>
                  <p className="text-xl font-medium">To Be Determined</p>
                </div>
                <div>
                  <p className="text-lg opacity-75">Duration</p>
                  <p className="text-xl font-medium">48 Hours</p>
                </div>
                <div>
                  <p className="text-lg opacity-75">Participants</p>
                  <p className="text-xl font-medium">Global</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Add SVG filter for lightning glow effect */}
      <svg className="hidden">
        <filter id="lightning-glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" />
        </filter>
      </svg>
      
      {/* CSS for the animated bolts */}
      <style jsx>{`
        @keyframes flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.8; }
        }
        
        .lightning-flash-0 { animation: flash 7s 1s infinite; }
        .lightning-flash-1 { animation: flash 8s 2s infinite; }
        .lightning-flash-2 { animation: flash 6s 3s infinite; }
        .lightning-flash-3 { animation: flash 9s 0.5s infinite; }
        .lightning-flash-4 { animation: flash 7.5s 1.5s infinite; }
      `}</style>
    </section>
  );
};

export default HelloSection;
