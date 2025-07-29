"use client";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8">👨‍🏫 معلومات عنا</h1>

        <p className="text-lg sm:text-xl text-gray-700 leading-loose mb-6">
          نحن في <span className="font-bold text-blue-800">Amani Kids</span> نؤمن أن التعليم يمكن أن يكون ممتعًا، محفّزًا، ومليئًا بالضحك والتفاعل.
          هدفنا هو تقديم تجربة تعليمية مختلفة تجعل الطفل يتعلّم وهو يبتسم!
        </p>

        <p className="text-lg sm:text-xl text-gray-700 leading-loose mb-6">
          من خلال دمج الرسوم المتحركة، الألعاب التفاعلية، والأنشطة الإبداعية مثل الرسم والقصص، نوفر بيئة تعليمية تلائم الطفل العصري وتلبّي احتياجاته في القرن الواحد والعشرين.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 leading-loose mb-6">
          كل المحتوى الذي نقدمه يتم تصميمه بعناية من قبل خبراء في التعليم، مع مراعاة الجوانب التربوية، النفسية، والمهارية للطفل.
        </p>

        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg mt-10 text-right">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">🎯 رؤيتنا</h2>
          <p className="text-gray-700 leading-loose">
            أن نكون المنصة العربية الأولى في مجال التعليم المبكر للأطفال، من خلال التكنولوجيا والمرح!
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">❤️ قيمنا</h2>
          <ul className="list-disc list-inside text-gray-700 leading-loose">
            <li>المرح والخيال</li>
            <li>التعلم من خلال التجربة</li>
            <li>سلامة الطفل أولاً</li>
            <li>محتوى عربي عالي الجودة</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
