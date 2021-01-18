import React, { useEffect } from "react";
import { VisitUs } from "../../components";

const Visit = () => {
  useEffect(() => {
    document.title = "Visit us - Mount Horeb Church";
  });
  return (
    <>
      <VisitUs />
    </>
  );
};

export default Visit;
