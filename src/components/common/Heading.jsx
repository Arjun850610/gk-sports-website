import React from "react";

const Heading = ({ Heading }) => {
  return (
    <h2 className="text-[19px] font-bold lg:text-4xl heading lg:font-semibold text-white uppercase tracking-wider text-center py-4">
      <span className="text-primary">{"<< "}</span>
      {Heading}
      <span className="text-primary"> {" >>"}</span>
    </h2>
  );
};

export default Heading;
