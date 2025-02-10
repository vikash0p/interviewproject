'use client';
import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"), {ssr: false,});
const Features = dynamic(() => import("./Features"),{ ssr:false});
const Domains = dynamic(() => import("./Domains"),{ ssr:false});
const Practice = dynamic(() => import("./Practice"),{ ssr:false});
const MokeInterView = dynamic(() => import("./MokeInterView"),{ ssr:false});
const Resources = dynamic(() => import("./Resources"),{ ssr:false});
const SuccessStory = dynamic(() => import("./SuccessStory"),{ ssr:false});
const JoinCommunity = dynamic(() => import("./JoinCommunity"),{ ssr:false});
const AskQuestion = dynamic(() => import("./AskQuestion"),{ ssr:false});
const Footer = dynamic(() => import("@/components/GlobalComponents/Footer"),{ ssr:false});



const HomeContainer = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Hero />
      <Features />
      <Domains />
      <Practice />
      <MokeInterView />
      <Resources />
      <SuccessStory />
      <JoinCommunity />
      <AskQuestion />
      <Footer />
    </div>
  );
};

export default HomeContainer;
