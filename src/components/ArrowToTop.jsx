import React from "react";

const ArrowToTop = () => {
  return (
    <>
      <div
        className="flex justify-center "
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          className="w-8 rounded-full hover:opacity-50 hover:cursor-pointer hover:bg-gray"
          src="/top.png"
          alt="arrow top icon"
        />
      </div>
    </>
  );
};

export default ArrowToTop;
