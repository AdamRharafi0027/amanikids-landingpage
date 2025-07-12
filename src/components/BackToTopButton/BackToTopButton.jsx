"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
{showButton && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="cursor-pointer fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-xl z-50"
    title="الرجوع للأعلى"
  >
    <ArrowUp className="w-5 h-5" />
  </button>
)}

    </>
  );
}
