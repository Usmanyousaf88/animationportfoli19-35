import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen pl-[200px] flex flex-col">
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
      
      <div className="bg-[#6B46C1] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-medium mb-8">A CULTURE BUILT FOR CONSTANT ADAPTATION.</h2>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="text-sm opacity-70">01</div>
              <div className="font-medium">Creator Led</div>
            </div>
            <div>
              <div className="text-sm opacity-70">02</div>
              <div className="font-medium">Phase Zero</div>
            </div>
            <div>
              <div className="text-sm opacity-70">03</div>
              <div className="font-medium">Anti Transactional</div>
            </div>
            <div>
              <div className="text-sm opacity-70">04</div>
              <div className="font-medium">One Team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;