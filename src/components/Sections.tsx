
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import IntroSection from "./sections/IntroSection";
import HelloSection from "./sections/HelloSection";
import CareerSection from "./sections/CareerSection";
import MarqueeImages from "./MarqueeImages";
import LightningBackground from "./LightningBackground";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

gsap.registerPlugin(ScrollTrigger);

const Sections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => {
          const backgroundColor = window.getComputedStyle(section).backgroundColor;
          document.documentElement.style.setProperty('--scrollbar-color', backgroundColor);
          
          // Auto-play video when work section enters viewport
          if (section.id === 'work' && videoRef.current) {
            videoRef.current.play().catch(e => console.log("Video play failed:", e));
          }
        },
        onLeaveBack: () => {
          const prevSection = section.previousElementSibling;
          if (prevSection) {
            const backgroundColor = window.getComputedStyle(prevSection).backgroundColor;
            document.documentElement.style.setProperty('--scrollbar-color', backgroundColor);
          }
          
          // Pause video when leaving work section
          if (section.id === 'work' && videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    });

    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          onEnter: () => {
            gsap.to(section, {
              duration: 0.5,
              filter: "url(#pixelate)",
              ease: "power2.inOut",
              onComplete: () => {
                gsap.set(section, { filter: "none" });
              }
            });
          }
        });
      }
    });
  }, []);

  const hackathonImages = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
  ];

  const sponsorImages = [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const prizeTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const prizeAmountVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 120
      }
    }
  };

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="pixelate">
            <feFlood x="4" y="4" height="2" width="2"/>
            <feComposite width="10" height="10"/>
            <feTile result="a"/>
            <feComposite in="SourceGraphic" in2="a" operator="in"/>
            <feMorphology operator="dilate" radius="5"/>
          </filter>
        </defs>
      </svg>
      
      <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <IntroSection />
        <HelloSection />
        <MarqueeImages images={hackathonImages} direction="left" />
        
        {/* Work Section with Video */}
        <section id="work" className="h-screen snap-start bg-black text-white flex items-center justify-center overflow-hidden">
          <div className="max-w-6xl w-full p-4 md:p-8 flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-center"
            >
              Built on Bolt.new
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,20,147,0.5)] mt-6"
            >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover" 
                controls
                playsInline
                preload="metadata"
              >
                <source src="/bolt.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl mt-8 text-center max-w-3xl"
            >
              Watch how our platform empowers developers to build amazing applications with unprecedented speed and efficiency.
            </motion.p>
          </div>
        </section>
        
        <section id="theme" className="h-screen snap-start bg-[#6B46C1] text-white flex items-center justify-center">
          <div className="max-w-4xl p-4 md:p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Theme: Reimagining Tomorrow</h2>
            <div className="text-base md:text-xl space-y-6">
              <p>
                Our hackathon theme, "Reimagining Tomorrow," challenges participants to envision and build solutions that address the pressing challenges of our time while creating pathways to a more sustainable, inclusive, and connected future.
              </p>
              <p>
                From climate innovation and healthcare accessibility to educational equity and digital inclusion, we invite you to leverage cutting-edge technologies such as AI, blockchain, AR/VR, and IoT to develop groundbreaking projects that push the boundaries of what's possible and make a meaningful impact on society.
              </p>
            </div>
          </div>
        </section>

        <section id="prizes" className="h-screen snap-start bg-black text-white flex items-center justify-center overflow-hidden relative">
          <LightningBackground color="#FF1493" intensity={0.8} frequency={4} />
          
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF1493]/30 to-[#800080]/10 blur-[100px] animate-pulse"></div>
          
          <div className="max-w-4xl p-4 md:p-8 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col space-y-6"
            >
              <motion.h2 
                variants={prizeTextVariants}
                className="text-4xl md:text-7xl font-bold mb-2 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
              >
                $1M+ in Prizes
              </motion.h2>
              
              <motion.div 
                variants={prizeTextVariants}
                className="text-base md:text-xl space-y-6"
              >
                <p className="text-left">
                  Compete for a prize pool of over $1 million distributed across multiple categories designed to recognize excellence in various domains of technology and innovation.
                </p>
              </motion.div>
              
              <motion.div 
                variants={prizeAmountVariants}
                className="flex items-center justify-center my-8"
              >
                <div className="relative w-48 h-48 bg-gradient-to-br from-[#FF1493] to-[#800080] rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-1 rounded-full bg-black"></div>
                  <div className="relative text-4xl font-bold text-white">$1M+</div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF1493]/50 to-[#800080]/30 blur-md animate-pulse"></div>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {[
                  { title: "Grand Prize", reward: "$250,000 cash + Investment opportunities" },
                  { title: "AI Innovation", reward: "$150,000 cash + Computing credits" },
                  { title: "Social Impact", reward: "$100,000 cash + Mentorship program" },
                  { title: "Web3/Blockchain", reward: "$100,000 cash + Accelerator program access" }
                ].map((prize, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 25px rgba(255, 20, 147, 0.5)",
                      background: "rgba(255, 20, 147, 0.15)"
                    }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
                    <p>{prize.reward}</p>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/20 blur-xl"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="talent" className="h-screen snap-start bg-[#4169E1] text-white flex items-center justify-center overflow-hidden">
          <div className="max-w-4xl p-4 md:p-8">
            <motion.h2 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-8"
            >
              Our Sponsors
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-xl mb-8"
            >
              <p>We're proud to partner with leading technology companies and innovators who make this hackathon possible.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={logoVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="bg-white/20 aspect-video rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <div className="text-2xl font-bold text-white opacity-50">Sponsor Logo</div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p>Interested in sponsoring? Contact us at sponsors@worldslargestchackathon.com</p>
            </motion.div>
          </div>
        </section>

        <section id="judges" className="h-screen snap-start bg-[#FF1493] text-white flex items-center justify-center">
          <div className="max-w-4xl p-4 md:p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Meet Our Judges</h2>
            <div className="text-base md:text-xl space-y-6 mb-8">
              <p>
                Our panel of judges includes industry leaders, successful entrepreneurs, and technical experts who will evaluate your projects based on creativity, technical complexity, completeness, and potential impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="bg-purple-500 text-2xl">J{index + 1}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">Judge Name {index + 1}</h3>
                  <p className="text-sm opacity-75 mb-4">CEO, Company {index + 1}</p>
                  <p className="text-sm">
                    Experienced technology leader with expertise in AI, product development, and startup growth. Previously at Industry Leading Tech Company.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CareerSection />

        <section id="register" className="h-screen snap-start bg-[#FFD700] text-black flex items-center justify-center">
          <div className="max-w-4xl p-4 md:p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Register Now</h2>
            <div className="text-base md:text-xl space-y-6">
              <p>
                Registration is open to innovators worldwide. Join thousands of participants for an unforgettable hackathon experience that could launch your career to new heights.
              </p>
              <div className="space-y-4">
                <p className="font-bold">Important dates:</p>
                <p>Registration Deadline: TBD</p>
                <p>Hackathon Start Date: TBD</p>
                <p>Submission Deadline: TBD</p>
              </div>
              <div className="mt-12 flex justify-center">
                <button className="bg-black text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-opacity-80 transition-all">
                  Register for the Hackathon
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="h-screen snap-start bg-[#32CD32] text-white flex items-center justify-center">
          <div className="max-w-4xl p-4 md:p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Frequently Asked Questions</h2>
            <div className="text-base md:text-xl space-y-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Who can participate?</h3>
                  <p>
                    The hackathon is open to developers, designers, entrepreneurs, and innovators of all skill levels from around the world. You can participate individually or as part of a team.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">How will the virtual event work?</h3>
                  <p>
                    Our platform will provide tools for team formation, real-time collaboration, mentorship sessions, and workshops. We'll use a combination of live streaming, chat, and virtual environments to create an immersive hackathon experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">What resources will be provided?</h3>
                  <p>
                    Participants will have access to APIs, cloud credits, hardware, datasets, and technical support from our sponsors to help bring their ideas to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sections;
