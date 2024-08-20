"use client";

import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 p-3 bg-gray-900 border border-white text-white rounded-full shadow-lg"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
