import React from "react";
import { ChooseDoctor, HowItWorks, VideoFrame, Hero, WhyUs, NewsList } from ".";

export const MainLayout = () => {
  return (
    <>
      <Hero />
      <ChooseDoctor />
      <VideoFrame />
      <HowItWorks />
      <WhyUs />
      <NewsList />
    </>
  );
};
