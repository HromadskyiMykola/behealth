import React from "react";
import { Hero } from "../components/Hero";
import { ChooseDoctor } from "../components/ChooseDoctor";
import { HowItWorks } from "../components/HowItWorks";
import { VideoFrame } from "../components/VideoFrame";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <ChooseDoctor />
      <HowItWorks />
      <VideoFrame />
    </div>
  );
};
