"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import parent1 from "../../../public/assets/images/parent1.jpg";
import parent2 from "../../../public/assets/images/parent2.jpg";

const reviews = [
  {
    image: parent1,
    name: "أم زين",
    review:
      "تطبيق أماني كيدز رائع جدًا! طفلي يعشقه ويقضي وقتًا ممتعًا وهو يتعلم الأرقام والحروف. أشكر القائمين على هذا التطبيق المفيد والآمن للأطفال. 👏",
    stars: 5,
  },
  {
    image: parent2,
    name: "نورا محمد",
    review:
      "أماني كيدز من أفضل التطبيقات التعليمية! ابنتي تطورت مهاراتها في القراءة بفضل القصص التفاعلية والألعاب المسلية. التصميم جميل وسهل الاستخدام. شكرًا لكم! ❤️",
    stars: 4,
  },
  {
    image: parent1,
    name: "أم يوسف",
    review:
      "والله التطبيق خرافي! أولادي ما يملون منه، خاصة ألعاب الذكاء والأناشيد التعليمية. أخيرًا وجدت تطبيقًا مفيدًا بدون إعلانات مزعجة. 👍",
    stars: 5,
  },
];

const ReviewSection = () => {
  const [index, setIndex] = useState(0);
  const current = reviews[index];

  const prevReview = () =>
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextReview = () =>
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <section id="review" className="mt-20 bg-white py-20 px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-8">
        آراء الآباء
      </h2>
      <div className="relative max-w-xl mx-auto bg-yellow-50 rounded-xl shadow-lg p-6 flex flex-col items-center gap-4">
        <Image
          src={current.image}
          alt={current.name}
          width={100}
          height={100}
          className="rounded-full shadow-md border-4 border-white"
        />
        <h3 className="text-xl font-bold text-gray-800">{current.name}</h3>
        <p className="text-gray-600">{current.review}</p>
        <div className="flex text-yellow-500">
          {Array.from({ length: current.stars }).map((_, i) => (
            <Star
              key={i}
              size={20}
              fill="currentColor"
              stroke="currentColor"
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prevReview}
            className="p-2 bg-yellow-100 rounded-full hover:bg-yellow-200 transition"
          >
            <ChevronRight className="text-yellow-700" />
          </button>
          <button
            onClick={nextReview}
            className="p-2 bg-yellow-100 rounded-full hover:bg-yellow-200 transition"
          >
            <ChevronLeft className="text-yellow-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
