import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Keywords = () => {
  const keywords = [
    "my story",
    "education",
    "comedy",
    "history",
    "sex life",
    "travel",
    "DIY",
    "Sports",
    "Bollywood",
    "hollywood",
    "relationship",
    "short film",
    "student",
    "village",
    "action",
    "drama",
  ];
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const LeftSide = () => {
    setStart(start - end);
    setEnd(start - end);
  };
  const RightSide = () => {
    setStart(start + end);
    setEnd(end + end);
  };
  return (
    <div className="flex space-x-3 py-3 overflow-hidden items-center">
      <GrFormPrevious onClick={LeftSide} className="cursor-pointer" />

      {keywords.slice(start, end).map((keyword) => (
        <div key={keyword}>
          <button className="rounded-full border bg-navbar py-1 px-2">
            {keyword}
          </button>
        </div>
      ))}
      <GrFormNext onClick={RightSide} className="cursor-pointer" />
    </div>
  );
};

export default Keywords;
