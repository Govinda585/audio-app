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
    "relationship",
    "conversation",
    "podcast",
    "entrepreneurship",
  ];

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const rightClick = () => {};
  const leftClick = () => {};

  return (
    <div className="flex space-x-3 py-3 overflow-hidden items-center">
      {start !== 0 ? (
        <GrFormPrevious className="cursor-pointer" onClick={leftClick} />
      ) : null}

      {keywords.slice(start, end).map((keyword) => (
        <div key={keyword}>
          <button className="rounded-full border bg-navbar py-1 px-2">
            {keyword}
          </button>
        </div>
      ))}

      {keywords.length > end ? (
        <GrFormNext className="cursor-pointer" onClick={rightClick} />
      ) : null}
    </div>
  );
};

export default Keywords;
