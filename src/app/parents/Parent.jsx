"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import Image from "next/image";
import parentimage1 from "../../../public/assets/images/parentCont1.png";
import parentimage2 from "../../../public/assets/images/parentCont2.png";
import parentimage3 from "../../../public/assets/images/parentCont3.png";
import timeSpendImage from "../../../public/assets/images/time-spent.png";
import contentTypeImage from "../../../public/assets/images/content-type.png";
import skillsTodayImage from "../../../public/assets/images/skills-today.png";
import notesImage from "../../../public/assets/images/notes.png";
import usageTimeImage from "../../../public/assets/images/usage-time.png";
import kidsDrawingImage from "../../../public/assets/images/kids-drawing.png";
import parentMessageImage from "../../../public/assets/images/parent-message.png";
import kidProgressBanner from "../../../public/assets/images/kid-progress-banner.png";

const parent = () => {
  const cards = [
    {
      title: "الوقت الذي قضاه في التطبيق",
      image: timeSpendImage,
    },
    {
      title: "نوع المحتوى الذي شاهده (تعليمي – قصص – رسم...)",
      image: contentTypeImage,
    },
    {
      title: "أهم المهارات التي قام بها اليوم",
      image: skillsTodayImage,
    },
    {
      title: "ملاحظات عامة",
      image: notesImage,
    },
  ];

  return (
    <section id="parent">
      <h1 className="text-[30px] text-center mt-10">
        ما هو نظام "التحكم الأبوي"؟
      </h1>
      <div className="parent-content">
        <div className="parent-content-first flex flex-col-reverse lg:flex-row items-center justify-between mt-10 gap-6 px-4">
  {/* Text Content */}
  <div className="right-side w-full lg:w-1/2 text-center lg:text-right">
    <p className="text-lg text-gray-700 leading-relaxed">
      نظام التحكم الأبوي هو أداة داخل التطبيق تتيح لك كـ ولي أمر أن
      تتابع وتدير كل ما يقوم به طفلك، من تعلّم، إلى مشاهدة، إلى نشاطات
      تفاعلية، في بيئة آمنة ومراقبة.
    </p>
  </div>

  {/* Image - hidden on small screens */}
  <div className="left-side w-full lg:w-1/2 flex justify-center">
    <Image
      src={parentimage1}
      alt="Parent Control"
      width={400}
      height={100}
      className="h-auto object-cover hidden lg:block"
    />
  </div>
</div>

        </div>
        {/* SECOND PART */}
        <section className="bg-yellow-50 py-16 mt-10 px-6">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-4">
              ماذا تعلّم طفلي اليوم؟
            </h2>
            <p className="text-gray-700 text-lg">ستتمكن من معرفة:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* البطاقة الأولى */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cursor-pointer bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
            >
              <Image
                src={parentimage2}
                alt="Parent Control"
                width={400}
                height={100}
                className="mb-8 h-auto object-cover"
              />
              <h3 className="text-xl font-bold text-yellow-800 mb-2">
                كم فيديو تعليمي شاهده
              </h3>
              <p className="text-gray-600">
                مراقبة المحتوى الذي يتعلم منه طفلك يوميًا.
              </p>
            </motion.div>

            {/* البطاقة الثانية */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="cursor-pointer bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
            >
              <Image
                src={parentimage3}
                alt="Parent Control"
                width={400}
                height={100}
                className="mb-8 h-auto object-cover"
              />
              <h3 className="text-xl font-bold text-yellow-800 mb-2">
                هل أكمل التحديات أو المهام؟
              </h3>
              <p className="text-gray-600">
                تعرف إذا كان طفلك أنجز التمارين أو الألعاب التعليمية.
              </p>
            </motion.div>
          </div>
        </section>
        {/* THIRT PART */}
        <section className="bg-yellow-50 py-20 px-6 ">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-4"
            >
              التقرير اليومي
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg"
            >
              كل يوم، يظهر لك تقرير مبسّط يحتوي على:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="cursor-pointer bg-white rounded-xl shadow-md p-6 text-center hover:bg-yellow-100 transition duration-300"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={96}
                  height={96}
                  className="mx-auto mb-4"
                />
                <h3 className="text-md font-semibold text-gray-800">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>
        {/* FOUR PART */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-right"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-4">
                ضبط مدة الاستخدام
              </h2>
              <p className="text-lg text-gray-700 mb-6">يمكنك تحديد:</p>

              <ul className="space-y-4 text-gray-800 text-base sm:text-lg font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" />
                  كم دقيقة مسموح بها يوميًا
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" />
                  متى يبدأ وقت التعلم ومتى ينتهي
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1" />
                  إشعارات تظهر لك ولطفلك عند اقتراب انتهاء الوقت
                </li>
              </ul>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <Image
                src={usageTimeImage} // تأكد من وضع الصورة الصحيحة في مجلد public/images
                alt="ضبط وقت الاستخدام"
                width={400}
                height={300}
              />
            </motion.div>
          </div>
        </section>
        {/* FIVE PART */}
        <section className="bg-yellow-50 py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-right"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-4">
                مشاهدة رسومات طفلك 🎨
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                كل رسمة أو نشاط رسم يقوم به طفلك يتم حفظه، ويمكنك تصفحه من قسم
                خاص في التطبيق. شاهد تطوره الإبداعي وتفاعل معه بالكلمات
                الإيجابية ❤️
              </p>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <Image
                src={kidsDrawingImage} // غيّر المسار حسب اسم صورة الرسم الخاصة بك
                alt="رسومات الأطفال"
                width={300}
                height={100}
              />
            </motion.div>
          </div>
        </section>
        {/* SIX PART */}
        <section className="bg-rose-50 py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-right"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-rose-600 mb-4">
                تفاعل مباشر مع طفلك
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                يمكنك إرسال رسالة تشجيعية لطفلك تظهر داخل التطبيق مثل: "أحسنت
                يا بطل!" أو "فخور بك لأنك أنهيت حرف أ اليوم!" هذا يعزّز الرابط
                بين الطفل والأهل داخل التجربة التعليمية.
              </p>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <Image
                src={parentMessageImage} // غيّر المسار حسب الصورة الخاصة بك
                alt="رسالة للأبناء"
                width={400}
                height={300}

              />
            </motion.div>
          </div>
        </section>
        {/* SEVEN PART */}
         <section className="bg-yellow-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        
        {/* Text Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-right w-full lg:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-800 mb-4">
            جاهز للبدء في تتبع تقدم طفلك؟ 🎯
          </h2>
          <p className="text-gray-700 text-lg">
            ابدأ الآن بتجربة تعليمية ممتعة وآمنة لطفلك، وراقب تطوره خطوة بخطوة!
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src={kidProgressBanner} // غيّر هذا المسار للصورة المناسبة
            alt="تتبع تقدم الطفل"
            width={400}
            height={300}
          />
        </motion.div>
      </div>
        </section>
    </section>
  );
};

export default parent;
