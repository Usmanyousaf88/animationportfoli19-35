import React from "react";

const Sections = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section id="raw-materials" className="h-screen snap-start bg-white flex flex-col">
        <div className="flex justify-between p-8">
          <div className="text-2xl font-medium">Raw Materials</div>
          <div className="text-2xl font-medium">An Unusual Design Company</div>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-4xl">
            <h1 className="text-[200px] font-bold leading-none">RM</h1>
            <p className="text-xl mt-8 max-w-xl">
              We design and launch unusually creative digital products that change brands' fortunes.
            </p>
          </div>
        </div>
      </section>

      <section id="hello" className="h-screen snap-start bg-[#FF4500] text-white flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold mb-8">Hello</h2>
          <p className="text-xl">Welcome to Raw Materials. We're glad you're here.</p>
        </div>
      </section>

      <section id="approach" className="h-screen snap-start bg-[#6B46C1] text-white flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold mb-8">Our Approach</h2>
          <p className="text-xl">We believe in creating meaningful digital experiences.</p>
        </div>
      </section>

      <section id="work" className="h-screen snap-start bg-black text-white flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold mb-8">Our Work</h2>
          <p className="text-xl">A showcase of our finest projects and collaborations.</p>
        </div>
      </section>

      <section id="talent" className="h-screen snap-start bg-[#4169E1] text-white flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold mb-8">Talent</h2>
          <p className="text-xl">Meet our team of creative professionals.</p>
        </div>
      </section>

      <section id="careers" className="h-screen snap-start bg-[#FF1493] text-white flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold mb-8">Careers</h2>
          <p className="text-xl">Join our team of innovators and creators.</p>
        </div>
      </section>

      <section id="contact" className="h-screen snap-start bg-[#FFD700] text-black flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold mb-8">Contact</h2>
          <p className="text-xl">Let's start a conversation about your next project.</p>
        </div>
      </section>

      <section id="unusual-index" className="h-screen snap-start bg-[#32CD32] text-white flex items-center justify-center">
        <div className="max-w-4xl">
          <h2 className="text-6xl font-bold mb-8">Unusual Index</h2>
          <p className="text-xl">Explore our unique approach to digital design.</p>
        </div>
      </section>
    </div>
  );
};

export default Sections;