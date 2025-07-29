"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Link from "next/link";

export default function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenExitPopup");

    const handleBlur = () => {
      if (!hasSeenPopup) {
        // تأخير بسيط للتأكد أن المستخدم لم يخرج من الصفحة
        setTimeout(() => {
          if (document.visibilityState === "visible") {
            setShowPopup(true);
          }
        }, 200);
      }
    };

    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const handleReservation = () => {
    localStorage.setItem("hasSeenExitPopup", "true");
    router.push("/reservation");
  };

  const handleClose = () => {
    localStorage.setItem("hasSeenExitPopup", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center space-y-4 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 left-2 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold text-gray-800">
          😢 هل أنت متأكد أنك تريد المغادرة؟
        </h2>
        <p className="text-gray-600">قبل أن تغادر، احجز تجربة تعليمية لطفلك.</p>
        <Link href="/reservation">
        <button
          onClick={handleReservation}
          className="w-full cursor-pointer bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white px-7 py-2.5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
        >
          احجز الآن
        </button>
        </Link>
      </div>
    </div>
  );
}
