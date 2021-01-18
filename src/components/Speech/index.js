import React from "react";
import interim from "../../Screenshot_20210113_002725 1.svg";
import "./speech-styles.css";

const Speech = () => {
  return (
    <div className="speech-container">
      <h1 className="speech-title">
        <span>Every burden can be broken. Every disease can be healed.</span>
        <br />
        <span>Eveyone can be free to prosper and be a great success.</span>
      </h1>
      <img className="interimImage" src={interim} alt="Interim" />
      <div className="paragraphs">
        <p className="paragraph-text">
          Our Church was founded by Prophet Paul Kweku Nii Okai with the God
          given passion to impart healing and deliverance for all people from
          every walk of life and background.
        </p>
        <p className="paragraph-text">
          No matter who you are, at some point in your life, you may face a
          challenge such as family and relationship breakdown, financial
          bankruptcy and poverty, lack of success, lack of prosperity, lack of
          opportunity, unhealthy addiction, demotivation in life, depression and
          poor mental health and to sum. it all up -just feeling like a lost
          soul on Earth. But the Power of Jesus Christ, through reading and
          studying the bible to gain knowledge on the Spiritual part of our
          lives on this Earth and beyond, Praying, Fasting and experiencing the
          Anointing of Jesus Christ in Mount Horeb, will transform your life and
          that of those around you into prosperity and success.
        </p>
        <p className="paragraph-text">
          You can overcome any problem through the Power of Jesus Christ. Visit
          us at any of our services or contact us. If you are new to
          Christianity, we have a friendly and great team who will support you
          and help you understand the bible and how to pray. You will be
          surprised how prayer can achieve amazing things!
        </p>
      </div>
    </div>
  );
};

export default Speech;
