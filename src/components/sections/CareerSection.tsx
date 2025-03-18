
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Award, Heart, Building } from "lucide-react";

const CareerSection = () => {
  const jobOpenings = [
    { title: "Rails Engineer (Senior)", location: "Remote" },
    { title: "Senior Design Engineer", location: "Remote" },
    { title: "Senior Software Engineer (TypeScript/Node.js)", location: "Remote" },
    { title: "Growth Marketing Lead", location: "Remote" },
    { title: "Head of Customer Support", location: "Remote" },
    { title: "Product Marketing Manager", location: "Remote" },
    { title: "RevOps Lead", location: "Remote" },
    { title: "Senior Data Engineer", location: "Remote" },
    { title: "General Inquiries", location: "Remote" },
  ];

  const benefits = [
    { icon: <Heart className="h-6 w-6" />, title: "Comprehensive health plans" },
    { icon: <Award className="h-6 w-6" />, title: "Learning and development" },
    { icon: <Heart className="h-6 w-6" />, title: "Generous parental leave" },
    { icon: <Briefcase className="h-6 w-6" />, title: "Unlimited PTO" },
    { icon: <Building className="h-6 w-6" />, title: "Work from anywhere" },
    { icon: <Award className="h-6 w-6" />, title: "Build amazing things with an amazing team" },
  ];

  const values = [
    {
      title: "Think Big",
      description: "Thinking small is a self-fulfilling prophecy. We are working to change the future of web development and this big vision inspires our daily decisions."
    },
    {
      title: "Bias for Action",
      description: "Speed matters in business. Many decisions and action are reversible and do not need extensive study. We value calculated risk taking."
    },
    {
      title: "Frugality",
      description: "Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention. There are no extra points for growing headcount, budget size, or fixed expense."
    },
    {
      title: "Deliver Results",
      description: "Each team member focuses on their must-win tasks and completes them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never settle."
    }
  ];

  return (
    <section id="careers" className="h-auto min-h-screen snap-start bg-[#FF1493] text-white">
      <div className="max-w-6xl mx-auto p-8 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Careers
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl font-semibold mb-4">Enable a billion humans to build great software</p>
          <p className="text-base md:text-lg max-w-3xl">
            Join the team building Bolt.new, one of the fastest growing software products in history. 
            Bolt is used by product & engineering teams to collaborate with AI, entrepreneurs to launch startups, 
            individuals to create websites, and beyond.
          </p>
          <p className="text-base md:text-lg max-w-3xl mt-4">
            Our vision is to enable everyone on planet earth to build incredible products — from the Fortune 10, to 10 year olds.
          </p>
        </motion.div>
        
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 p-6 rounded-lg mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <Avatar className="w-20 h-20 border-2 border-white">
              <AvatarFallback className="bg-purple-700 text-2xl">AB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg md:text-xl italic">
                "I love working at StackBlitz because I am constantly challenged by the amazing team and responsibility 
                is shared based on competence, rather than seniority."
              </p>
              <p className="mt-4 font-semibold">Alexander Berger</p>
              <p className="text-sm opacity-80">Head of Growth</p>
            </div>
          </div>
        </motion.div>
        
        {/* Benefits & Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Benefits & Perks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-4 bg-white/10 rounded-lg flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full">{benefit.icon}</div>
                <span>{benefit.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-5 bg-white/10 rounded-lg">
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg flex justify-between items-center">
                <span className="font-medium">{job.title}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{job.location}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
