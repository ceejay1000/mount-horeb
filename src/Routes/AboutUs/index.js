import React,{useEffect} from "react";
import { AboutUsComponent } from "../../components";

const AboutUs = () => {
    useEffect(() => {
      document.title = "Our Story - Mount Horeb Church";
    });
    return <AboutUsComponent />;
}

export default AboutUs
