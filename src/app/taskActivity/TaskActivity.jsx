"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import taskActivityTop from "../../../public/assets/images/taskActivityTop.png";
import taskact2 from "../../../public/assets/images/taskact2.png";
import taskact3 from "../../../public/assets/images/taskact3.png";
import taskact4 from "../../../public/assets/images/taskact4.png";
import taskact5 from "../../../public/assets/images/taskact5.png";
import taskact6 from "../../../public/assets/images/taskact6.jpg";

import characterImage from "../../../public/assets/images/character.jpg";
import guidedActivityImage from "../../../public/assets/images/guided-activity.jpg";
import levelsImage from "../../../public/assets/images/levels.jpg";
import evaluationImage from "../../../public/assets/images/evaluation.jpg";
import feedbackImage from "../../../public/assets/images/feedback.jpg";
import encouragementImage from "../../../public/assets/images/encouragement.jpg";

const TaskActivity = () => {
  const cards = [
    {
      title: "شخصيات كرتونية تفاعلية",
      text: null,
      image: characterImage,
    },
    {
      title:
        "كل نشاط مصحوب بشخصيات مرحة ترشد الطفل وتدعمه، مما يعزز الارتباط العاطفي بالتعلم.",
      text: null,
      image: guidedActivityImage,
    },
    {
      title: "مستويات مخصصة لكل طفل",
      text: null,
      image: levelsImage,
    },
    {
      title:
        "نقوم بتقييم مستوى الطفل تدريجيًا، ونقترح أنشطة تناسب قدراته وتساعده على التقدم بخطى ثابتة.",
      text: null,
      image: evaluationImage,
    },
    {
      title: "تغذية راجعة فورية ومشجعة",
      text: null,
      image: feedbackImage,
    },
    {
      title:
        "يتلقى الطفل إشعارات صوتية ومرئية محفزة عند إتمام المهام، مما يعزز ثقته بنفسه.",
      text: null,
      image: encouragementImage,
    },
  ];

  return (
    <>
      <section id="task-activity">
        <h1 className="text-[30px] text-center mt-20">
          ما هو لأنشطة التفاعلية – Task Activity؟
        </h1>
        <h2 className="text-[20px] text-center mt-5">
          لأن التعليم لا يجب أن يكون مملًا!
        </h2>
        <main className="taskActivity-content  ">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 px-4">
            {/* Text Content */}
            <div className="right-side w-full lg:w-1/2 text-center lg:text-right">
              <p className="text-lg mr-20 text-gray-700 leading-relaxed">
                نظام التحكم الأبوي هو أداة داخل التطبيق تتيح لك كـ ولي أمر أن
                تتابع وتدير كل ما يقوم به طفلك، من تعلّم، إلى مشاهدة، إلى نشاطات
                تفاعلية، في بيئة آمنة ومراقبة.
              </p>
            </div>

            {/* Image - hidden on small screens */}
            <div className="left-side w-full lg:w-1/2 flex justify-center">
              <Image
                src={taskActivityTop}
                alt="Task Activity"
                width={400}
                height={100}
                className="h-auto object-cover hidden lg:block"
              />
            </div>
          </div>
        </main>
        {/* ----------------- */}
        <main className="bg-white py-20 px-6 mt-40">
          <h2 className="text-3xl text-center sm:text-4xl font-bold text-yellow-700 mb-20">
            ماذا تقدم ميزة "الأنشطة التفاعلية"؟
          </h2>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="right-side w-full lg:w-1/2 text-center lg:text-right">
              <h2 className="text-3xl text-center sm:text-4xl font-bold text-yellow-700 mb-10">
                تعلم من خلال التفاعل
              </h2>
              <p className="text-lg mr-20 text-gray-700 leading-relaxed">
                نظام التحكم الأبوي هو أداة داخل التطبيق تتيح لك كـ ولي أمر أن
                تتابع وتدير كل ما يقوم به طفلك، من تعلّم، إلى مشاهدة، إلى نشاطات
                تفاعلية، في بيئة آمنة ومراقبة.
              </p>
            </div>

            {/* Image Content */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <Image
                src={taskact2} // تأكد من وضع الصورة الصحيحة في مجلد public/images
                alt="ضبط وقت الاستخدام"
                width={400}
                height={300}
              />
            </motion.div>
          </div>
          <section id="whyus" className="bg-white mt-20 py-20 px-6">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-yellow-700 mb-10">
              تنمية المهارات الأساسية
            </h2>
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
              {/* Text Content */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 text-right pr-20"
              >
                <ul className="space-y-3 text-gray-800 font-medium text-base sm:text-lg">
                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    مهارات الحساب (العد، الجمع، الطرح)
                  </motion.li>

                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    أساسيات اللغة (الحروف، الكلمات، الجمل البسيطة)
                  </motion.li>

                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    التفكير المنطقي (ألعاب مطابقة، تصنيف، تسلسل)
                  </motion.li>

                  <motion.li
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    الإبداع الفني (الرسم، التلوين، ربط النقاط، الأشكال)
                  </motion.li>
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <Image
                  src={taskact3}
                  alt="أطفال يستمتعون بتطبيق أماني تون"
                  width={500}
                  height={350}
                  loading="lazy"
                  className="w-full max-w-md"
                />
              </motion.div>
            </div>
          </section>
        </main>
        <section className="bg-yellow-50 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-4"
            >
              ماذا ستجد في Task Activity؟
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-yellow-100 transition duration-300"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        <main className="bg-white py-20 px-6 mt-40">
          <h2 className="text-3xl text-center sm:text-4xl font-bold text-yellow-700 mb-20">
            لمن هذه الميزة؟
          </h2>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="right-side w-full lg:w-1/2 text-center lg:text-right">
              <h2 className="text-3xl text-center sm:text-4xl font-bold text-yellow-700 mb-10">
                تعلم من خلال التفاعل
              </h2>
              <p className="text-lg mr-20 text-gray-700 leading-relaxed">
                نظام التحكم الأبوي هو أداة داخل التطبيق تتيح لك كـ ولي أمر أن
                تتابع وتدير كل ما يقوم به طفلك، من تعلّم، إلى مشاهدة، إلى نشاطات
                تفاعلية، في بيئة آمنة ومراقبة.
              </p>
            </div>

            {/* Image Content */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <Image
                src={taskact2} // تأكد من وضع الصورة الصحيحة في مجلد public/images
                alt="ضبط وقت الاستخدام"
                width={400}
                height={300}
              />
            </motion.div>
          </div>
          <section id="whyus" className="bg-white mt-20 py-20 px-6">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-yellow-700 mb-10">
              لمن هذه الميزة؟
            </h2>
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
              <p className="text-lg">
                تم تصميمها للأطفال من عمر 4 إلى 9 سنوات، مع مرونة عالية في
                التدرج والتنوع لتتناسب مع اختلاف القدرات والمراحل العمرية.
              </p>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <Image
                  src={taskact4}
                  alt="أطفال يستمتعون بتطبيق أماني تون"
                  width={500}
                  height={350}
                  loading="lazy"
                  className="w-full max-w-md"
                />
              </motion.div>
            </div>
          </section>
        </main>
        <section className="bg-[#f0f4ff] py-16 px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
            📥 جربها الآن!
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            هل تريد أن يرى طفلك التعليم بطريقة مختلفة؟
          </p>

          <div className="max-w-md mx-auto">
            <Image
              src={taskact5}
              alt="Toon Kids App"
              className="rounded-xl shadow-lg mb-4 w-full"
            />
            <p className="text-lg text-gray-800 mb-6">
              📲 حمّل Toon Kids اليوم ودعه يكتشف متعة التعلم!
            </p>
            <a
              href="#register"
              className="inline-block bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              سجل الآن
            </a>
          </div>
        </section>
        <section className="bg-white py-16 px-4 sm:px-8 text-center">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-12">📱 كيف تبدو الواجهة؟</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <Image
      src={taskact6}
      alt="واجهة التطبيق 1"
      className="rounded-xl shadow-lg w-full"
    />
    <Image
      src={taskact6}
      alt="واجهة التطبيق 2"
      className="rounded-xl shadow-lg w-full"
    />
    <Image
      src={taskact6}
      alt="واجهة التطبيق 3"
      className="rounded-xl shadow-lg w-full"
    />
  </div>
</section>
      </section>
    </>
  );
};

export default TaskActivity;
