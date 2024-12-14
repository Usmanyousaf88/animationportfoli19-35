import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Sections = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        id="raw-materials"
        className="h-screen snap-start bg-white flex flex-col"
      >
        <div className="flex flex-col md:flex-row justify-between p-4 md:p-8">
          <div className="text-xl md:text-2xl font-medium">Armando Sanchez</div>
          <div className="text-xl md:text-2xl font-medium mt-2 md:mt-0">Design & Marketing Strategist</div>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[100px] md:text-[200px] font-bold leading-none"
            >
              AS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl mt-4 md:mt-8 max-w-2xl"
            >
              Results-driven graphic designer and lead marketing strategist based in the San Francisco Bay Area, dedicated to helping small local businesses establish a compelling, cohesive presence across digital and traditional platforms. With over a decade of industry experience, my work is defined by a passion for innovation, a commitment to high-quality visual storytelling, and a keen understanding of the latest design technologies and trends.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Additional sections with similar animation patterns */}
      <section id="hello" className="h-screen snap-start bg-[#FF4500] text-white flex items-center justify-center">
        <div className="max-w-4xl p-4 md:p-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">About</h2>
          <div className="text-base md:text-xl space-y-6">
            <p>
              With 10 years of professional experience spanning social media marketing design, branding identity, web design, and motion design, I have cultivated a skill set that enables me to deliver impactful creative solutions across multiple touchpoints. At 35 years old, I have honed my craft through continuous learning, staying ahead of the curve on industry trends, and refining my process to meet the evolving needs of modern brands.
            </p>
            <p>
              Rooted in the entrepreneurial spirit of the San Francisco Bay Area, I understand the unique challenges and opportunities that small local businesses face. My approach is not only about making a brand look beautiful, but ensuring that each design decision is grounded in strategy, authenticity, and a clear understanding of the target audience. By connecting with clients on a personal level, I strive to bring their creative visions to life and help them stand out in a crowded market.
            </p>
          </div>
        </div>
      </section>

      <section id="approach" className="h-screen snap-start bg-[#6B46C1] text-white flex items-center justify-center">
        <div className="max-w-4xl p-4 md:p-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Approach</h2>
          <div className="text-base md:text-xl space-y-6">
            <p>
              I believe that great design is both an art and a science—an exercise in thoughtful problem-solving that transforms complex ideas into simple, engaging visuals. My methodology involves deep research, close collaboration with clients, and a dedication to understanding the core values and goals behind every brand.
            </p>
            <p>
              As a multidisciplinary designer, I focus on creating cohesive branding systems that extend seamlessly from social media graphics and promotional materials to immersive websites and dynamic motion pieces. Embracing emerging technologies, I leverage AI tools such as Stable Diffusion and RunwayML to streamline my workflow, explore new creative avenues, and optimize results. This forward-thinking approach ensures that each project resonates with audiences on an emotional level and achieves measurable business objectives.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="h-screen snap-start bg-black text-white flex items-center justify-center">
        <div className="max-w-4xl p-4 md:p-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Portfolio</h2>
          <div className="text-base md:text-xl space-y-6">
            <p>
              My portfolio showcases a diverse range of work that reflects my ability to craft visually striking and cohesive brand identities. From designing intuitive, conversion-focused websites to developing high-impact social media campaigns and producing compelling motion graphics, every piece is created with both aesthetics and strategy in mind.
            </p>
            <p>
              Clients turn to me for fresh, innovative perspectives on their brand challenges. Whether it's enhancing a restaurant's visual presence to increase customer engagement, creating unified brand collateral for a boutique retail shop, or producing motion graphics that bring product stories to life, my work aims to elevate brands and help them thrive in competitive markets.
            </p>
          </div>
        </div>
      </section>

      <section id="talent" className="h-screen snap-start bg-[#4169E1] text-white flex items-center justify-center">
        <div className="max-w-4xl p-4 md:p-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Services & Expertise</h2>
          <div className="text-base md:text-xl space-y-4">
            <p className="mb-4">I offer a comprehensive suite of design and marketing services, tailored to the needs of small businesses striving to reach broader audiences and make a lasting impression:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Branding & Identity: Crafting memorable logos, color palettes, typography systems, and brand standards</li>
              <li>Social Media Marketing & Design: Developing on-trend, eye-catching visuals and effective strategies</li>
              <li>Web Design & Development: Creating intuitive, user-friendly websites optimized for conversion</li>
              <li>Motion Design & Animation: Bringing stories to life through engaging animations and visual effects</li>
              <li>AI-Enhanced Creative Process: Incorporating cutting-edge AI tools for optimized results</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="careers" className="h-screen snap-start bg-[#FF1493] text-white flex items-center justify-center">
        <div className="max-w-4xl p-4 md:p-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Clients & Testimonials</h2>
          <div className="text-base md:text-xl space-y-6">
            <p>
              Over the years, I have had the privilege of working with a range of clients—from local restaurants and specialty retailers to community-focused brands—helping them achieve their growth objectives. My collaborative approach and strong communication skills enable me to understand client needs, adapt to their style, and consistently surpass expectations.
            </p>
            <p>
              These enduring partnerships are built on trust, mutual respect, and the tangible impact my designs have on their bottom line. Genuine client feedback often highlights not just my technical expertise, but also my passion, versatility, and commitment to delivering visually stunning work that makes a real difference.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="h-screen snap-start bg-[#FFD700] text-black flex items-center justify-center">
        <div className="max-w-4xl p-4 md:p-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Contact & Inquiries</h2>
          <div className="text-base md:text-xl space-y-6">
            <p>
              If you're ready to take your brand to the next level, I'm here to help. I understand the importance of clear communication and a seamless creative process, and I look forward to discussing how we can work together to achieve your vision.
            </p>
            <div className="space-y-4">
              <p className="font-bold">Get in touch:</p>
              <p>Email: sánchezoropezafs@gmail.com</p>
              <p>Phone: 415.769.6345</p>
            </div>
            <p>
              Let's collaborate on a project that resonates with your audience, elevates your brand, and drives measurable results.
            </p>
          </div>
        </div>
      </section>

      <section id="unusual-index" className="h-screen snap-start bg-[#32CD32] text-white flex items-center justify-center">
        <div className="max-w-4xl p-4 md:p-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Process & Workflow</h2>
          <div className="text-base md:text-xl space-y-6">
            <p>
              My process is anchored in research, strategy, and a relentless pursuit of excellence. I begin by engaging in in-depth discovery sessions to understand your brand's challenges, goals, and unique value proposition. From there, I develop concepts that marry aesthetic appeal with strategic intent, refining the work through open dialogue and iteration.
            </p>
            <p>
              By incorporating advanced AI tools into my workflow, I unlock new creative possibilities and streamline production, ensuring that the final deliverables are visually compelling, on-brand, and purpose-driven. The result is a process that feels collaborative, transparent, and ultimately focused on helping your business stand out and thrive in the vibrant San Francisco Bay Area market.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
