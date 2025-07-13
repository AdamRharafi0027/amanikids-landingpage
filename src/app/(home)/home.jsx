"use client";
import ReviewSection from "@/components/ReviewSection/ReviewSection.jsx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { CheckCircle } from "lucide-react";

// استيراد الصور

import videoPreview from "../../../public/assets/images/video-placeholder.jpg";
import feature1 from "../../../public/assets/images/feature-parent-control.png";
import feature2 from "../../../public/assets/images/feature-activities.png";
import feature3 from "../../../public/assets/images/feature-drawing.png";
import aboutImage from "../../../public/assets/images/about-video-preview.png";
import kidsVideo1 from "../../../public/assets/images/kidsVideo1.png";
import kidsVideo2 from "../../../public/assets/images/kidsVideo2.png";
import kidsVideo3 from "../../../public/assets/images/kidsVideo3.png";
import kids_hapy from "../../../public/assets/images/kids_hapy.jpg";

const Home = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const baseSliderItems = [
    {
      type: "text",
      content: "+5000 فيديو",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
    },
    { type: "image", src: kidsVideo1, alt: "Kids Video" },
    { type: "image", src: kidsVideo2, alt: "Kids Activity 1" },
    {
      type: "text",
      content: "+1000 نشاط",
      bgColor: "bg-pink-100",
      textColor: "text-pink-800",
    },
    { type: "image", src: kidsVideo3, alt: "Kids Activity 2" },
  ];

  const sliderItems = [
    ...baseSliderItems,
    ...Array(10).fill(baseSliderItems).flat(),
  ];

  return (
    <>
      {/* Home SECTION */}
      <section
        id="hero"
        className="bg-blue-100 py-30 px-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-right"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-700 leading-snug mb-4">
              التعلم الممتع يبدأ من هنا!
            </h1>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
              امنح طفلك تجربة تعلم واكتشاف لا تُنسى مع برنامجنا التعليمي المجاني
              والممتع للأطفال من عمر سنتين إلى ثماني سنوات.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link href="/contact">
                <button className="ml-100 cursor-pointer bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white px-7 py-2.5 rounded-full font-bold shadow-xl hover:scale-105 duration-300 transition-transform">
                  اتصل بنا
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Video/Image Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src={videoPreview}
              alt="Amani Kids Video Preview"
              width={480}
              height={320}
              loading="lazy"
              className="rounded-xl shadow-xl border-4 border-white w-full max-w-md"
            />
          </motion.div>
        </div>
      </section>
      {/* features SECTION */}
      <section id="features" className="bg-white mt-20 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-4">
            الميزات التي نقدمها
          </h2>
          <p className="text-gray-600 text-lg">
            استكشف بعض الميزات الرائعة، وللمزيد انتقل إلى صفحة الميزات الكاملة.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cursor-pointer bg-white border border-blue-100 rounded-xl shadow-md p-6 text-center hover:bg-blue-100 transition-all duration-100 hover:scale-105 duration-300"
          >
            <Image
              src={feature1}
              alt="الرقابة الأبوية"
              width={150}
              height={150}
              loading="lazy"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-800 mb-2">
              الرقابة الأبوية
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              حدد وقت استخدام الشاشة، تتبع ما يشاهده طفلك، اختر محتوى آمنًا.
            </p>
            <Link
              href="/parents"
              className="text-blue-500 hover:text-blue-700 tranition-all"
            >
              المزيد
            </Link>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cursor-pointer bg-white border border-blue-100 rounded-xl shadow-md p-6 text-center hover:bg-blue-100 transition-all duration-100 hover:scale-105 duration-300"
          >
            <Image
              src={feature2}
              alt="المهام والأنشطة"
              width={150}
              height={150}
              loading="lazy"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-800 mb-2">
              المهام والأنشطة
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              اختبارات ممتعة بعد مشاهدة الفيديوهات، تحديات الذاكرة والتركيز،
              ألعاب وألغاز مطابقة.
            </p>
            <Link
              href="/features"
              className="text-blue-500 hover:text-blue-700 tranition-all"
            >
              المزيد
            </Link>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="cursor-pointer bg-white border border-blue-100 rounded-xl shadow-md p-6 text-center hover:bg-blue-100 transition-all duration-100 hover:scale-105 duration-300 "
          >
            <Image
              src={feature3}
              alt="نشاط الرسم"
              width={150}
              height={150}
              loading="lazy"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-800 mb-2">
              نشاط الرسم
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              أشكال ممتعة للتتبع والتلوين، احفظ وشارك أعمالك الفنية، أنشئ
              رسوماتك الخاصة.
            </p>
            <Link
              href="/features"
              className="text-blue-500 hover:text-blue-700 tranition-all"
            >
              المزيد
            </Link>
          </motion.div>
        </div>
      </section>
      {/* about SECTION */}
      <motion.section
        id="about"
        className="bg-white py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className=" max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left - Text */}
          <div className="w-full lg:w-1/2 text-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-8">
              ما هو أماني تون؟
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  مُصمم خصيصًا لمتعلمي اليوم الصغار
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  يُشرك برنامج أماني تون الأطفال الذين تتراوح أعمارهم بين 3 و8
                  سنوات في مواضيع أساسية مثل القيم، والذكاء العاطفي، واللغة،
                  والرياضيات المبكرة... إنه أكثر من مجرد تعليم، إنه يبني الشخصية
                  بمتعة.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  تعلم ممتع وودود
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ترشد شخصياتنا وقصصنا الرائعة الأطفال عبر عالم ساحر من مقاطع
                  الفيديو والتمارين والتحديات، مصمم لتسلية الأطفال أثناء
                  التدريس.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  تفاعلية بحق
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  شخصياتنا وقصصنا الرائعة تُرشد الأطفال في رحلة تعليمية ساحرة.
                  عالم من الفيديوهات والتمارين.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src={aboutImage}
              alt="حول أماني تون"
              width={480}
              height={220}
              loading="lazy"
              className=" w-full max-w-md"
            />
          </motion.div>
        </div>
      </motion.section>
      {/* VIDEO STATS LOOP SECTION */}
      <section className="relative bg-white  py-12 pb-20 overflow-hidden">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className="px-2">
              {item.type === "text" ? (
                <div
                  className={`${item.bgColor} shadow-lg rounded-lg p-4 sm:p-6 flex items-center justify-center text-center h-40 sm:h-52`}
                >
                  <h3
                    className={`text-lg sm:text-xl font-bold ${item.textColor}`}
                  >
                    {item.content}
                  </h3>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={120}
                  height={160}
                  loading="lazy"
                  className="rounded-xl shadow-md mx-auto sm:w-[180px] sm:h-[220px]"
                />
              )}
            </div>
          ))}
        </Slider>
      </section>
      {/* why us*/}
      <section id="whyus" className="bg-white mt-20 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-right pr-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 mb-4">
              لماذا أماني تون؟
            </h2>
            <h3 className="text-xl sm:text-2xl text-black font-semibold mb-2">
              لأن طفلك يستحق أكثر من مجرد وقت للشاشة.
            </h3>
            <p className="text-gray-700 mb-6 text-base sm:text-lg">
              يجمع تون كيدز بين المرح والتعلم والقيم في تطبيق ذكي مصمم خصيصًا
              للأطفال من سن 3 إلى 8 سنوات.
            </p>

            <ul className="space-y-3 text-gray-800 font-medium text-base sm:text-lg">
              <motion.li
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-green-500 w-5 h-5" />
                يُنمي القيم والمهارات
              </motion.li>

              <motion.li
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-green-500 w-5 h-5" />
                متعدد اللغات ومتوافق مع الثقافات
              </motion.li>

              <motion.li
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-green-500 w-5 h-5" />
                مصمم للآباء أيضًا
              </motion.li>

              <motion.li
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-green-500 w-5 h-5" />
                آمن ومناسب للأطفال
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
              src={kids_hapy}
              alt="أطفال يستمتعون بتطبيق أماني تون"
              width={500}
              height={350}
              loading="lazy"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </section>
      {/*review*/}
      <ReviewSection />
      {/*banner*/}
      <section className="mt-20 bg-gradient-to-r from-pink-400 to-red-400 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            انضم إلى مجتمعنا اليوم!
          </h2>
          <p className="text-lg mb-6">
            سجِّل الآن واحصل على وصول مبكر عندما ننطلق!"
          </p>
          <Link href="/reservation">
            <button className="cursor-pointer bg-white text-pink-500 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all duration-300">
              حجز الآن
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
