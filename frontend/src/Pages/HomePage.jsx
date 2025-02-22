import React from "react";
import GetStarted from "../Components/GetStarted";
import FeatureSection from "../Components/FeatureSection";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* ✅ Video Section */}
      <section className=" w-full h-screen flex items-center justify-center">
        <GetStarted />
      </section>

      {/* ✅ Feature Section */}
      <section className="w-full py-16">
        <FeatureSection />
      </section>
    </div>
  );
};

export default HomePage;
