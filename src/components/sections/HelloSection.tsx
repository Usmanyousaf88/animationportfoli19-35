
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const HelloSection = () => {
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation for the 3D model
    if (modelRef.current) {
      gsap.to(modelRef.current, {
        rotationY: 360,
        duration: 60,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  return (
    <section id="hello" className="h-screen snap-start bg-[#FF4500] text-white relative overflow-hidden">
      {/* 3D Model container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div ref={modelRef} className="sketchfab-embed-wrapper h-full"> 
          <iframe 
            title="Virtual Event Space" 
            className="w-full h-full"
            frameBorder="0" 
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/e762ef1a73b344a2848b544a6c9929a8/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark"
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full bg-gradient-to-b from-black/30 to-black/70 p-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Virtual Event</h2>
          <div className="text-xl md:text-2xl space-y-6 max-w-3xl mx-auto">
            <p>Join us from anywhere in the world for the largest online hackathon ever organized. Our cutting-edge virtual platform enables seamless collaboration and networking with fellow innovators globally.</p>
            <p>Experience immersive project showcases, real-time mentorship sessions, and interactive workshops - all from the comfort of your home.</p>
            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Event Details</h3>
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
    </section>
  );
};

export default HelloSection;
