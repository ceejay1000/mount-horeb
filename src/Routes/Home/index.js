import React,{useEffect} from "react";
import {
    Header,
    Blank,
    Speech,
    UpcomingEvents,
    WhatNext,
  } from "../../components/index";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Mount Horeb Church";
  });
  return (
    <>
      <Header />
      <Speech />
      <Blank />
      <UpcomingEvents />
      <WhatNext />
    </>
  );
};

export default Home;
