
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroSection from "./sections/IntroSection";
import MarqueeImages from "./MarqueeImages";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

gsap.registerPlugin(ScrollTrigger);

const Sections = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => {
          const backgroundColor = window.getComputedStyle(section).backgroundColor;
          document.documentElement.style.setProperty('--scrollbar-color', backgroundColor);
        },
        onLeaveBack: () => {
          const prevSection = section.previousElementSibling;
          if (prevSection) {
            const backgroundColor = window.getComputedStyle(prevSection).backgroundColor;
            document.documentElement.style.setProperty('--scrollbar-color', backgroundColor);
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

  // Sample images for each section
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
        <MarqueeImages images={hackathonImages} direction="left" />
        
        <section id="about" className="h-screen snap-start bg-[#FF4500] text-white flex items-center justify-center">
          <div className="max-w-4xl p-4 md:p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">About the Hackathon</h2>
            <div className="text-base md:text-xl space-y-6">
              <p>
                Welcome to the World's Largest Hackathon, a virtual event bringing together the brightest minds from around the globe to collaborate, innovate, and create technologies that will shape our future. With over $1 million in prizes across multiple categories, this is your chance to showcase your skills on a global stage.
              </p>
              <p>
                Whether you're a seasoned developer, a creative designer, or a visionary entrepreneur, this hackathon offers a platform to turn your ideas into reality. Our virtual format allows participants from every corner of the world to connect, learn from industry experts, and compete for life-changing opportunities.
              </p>
            </div>
          </div>
        </section>
        
        <MarqueeImages images={sponsorImages} direction="right" />
        
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

        <section id="prizes" className="h-screen snap-start bg-black text-white flex items-center justify-center">
          <div className="max-w-4xl p-4 md:p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">$1M+ in Prizes</h2>
            <div className="text-base md:text-xl space-y-6">
              <p>
                Compete for a prize pool of over $1 million distributed across multiple categories designed to recognize excellence in various domains of technology and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Grand Prize</h3>
                  <p>$250,000 cash + Investment opportunities</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">AI Innovation</h3>
                  <p>$150,000 cash + Computing credits</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Social Impact</h3>
                  <p>$100,000 cash + Mentorship program</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Web3/Blockchain</h3>
                  <p>$100,000 cash + Accelerator program access</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sponsors" className="h-screen snap-start bg-[#4169E1] text-white flex items-center justify-center">
          <div className="max-w-4xl p-4 md:p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Our Sponsors</h2>
            <div className="text-base md:text-xl mb-8">
              <p>We're proud to partner with leading technology companies and innovators who make this hackathon possible.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white/20 aspect-video rounded-lg flex items-center justify-center">
                  <div className="text-2xl font-bold text-white opacity-50">Sponsor Logo</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p>Interested in sponsoring? Contact us at sponsors@worldslargestchackathon.com</p>
            </div>
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
