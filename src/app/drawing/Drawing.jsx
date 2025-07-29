"use client";

import Image from "next/image";
import drawindImage from "../../../public/assets/images/kids-drawing.png"

export default function Drawing() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8">🎨 نشاط الرسم</h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-12">
          عبر عن إبداع طفلك من خلال نشاط الرسم الممتع الذي يعزز الخيال والتركيز!
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src={drawindImage}
            alt="نشاط الرسم"
            width={500}
            height={300}
            className="rounded-2xl shadow-xl"
          />
          <div className="text-right max-w-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">🖌️ ماذا سيتعلم الطفل؟</h2>
            <ul className="list-disc list-inside text-gray-700 leading-loose">
              <li>تنمية المهارات الحركية الدقيقة</li>
              <li>تعزيز الإبداع والتعبير الفني</li>
              <li>التفاعل مع شخصيات مرحة تشجعه على الاستمرار</li>
              <li>حفظ الرسومات وتقييم التقدم</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">📥 جرب الآن</h2>
          <p className="text-gray-700 mb-6">
            دع طفلك يكتشف عالم الألوان ويبدأ برحلته الإبداعية في التعلم!
          </p>
          <button className="cursor-pointer bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-full text-lg shadow hover:bg-yellow-500 transition">
            سجّل طفلك الآن
          </button>
        </div>
      </div>
    </section>
  );
}
