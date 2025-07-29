"use client";

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8">📞 اتصل بنا</h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed">
          هل لديك أي سؤال؟ نحن هنا لمساعدتك! لا تتردد في التواصل معنا في أي وقت، وسنكون سعداء بالرد عليك.
        </p>

        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg text-right">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">📬 معلومات التواصل</h2>
          <p className="text-gray-700 mb-2">📧 البريد الإلكتروني: <span className="font-medium">contact@toonkids.com</span></p>
          <p className="text-gray-700 mb-2">📱 الهاتف: <span className="font-medium">+212 6 12 34 56 78</span></p>
          <p className="text-gray-700 mb-6">📍 العنوان: الدار البيضاء، المغرب</p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4 mt-8">📝 أرسل لنا رسالة</h2>
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-gray-700 mb-1">الاسم</label>
              <input type="text" placeholder="اسمك الكامل" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">البريد الإلكتروني</label>
              <input type="email" placeholder="example@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">رسالتك</label>
              <textarea rows="4" placeholder="اكتب رسالتك هنا..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
            </div>
            <button type="submit" className="cursor-pointer bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm">
              إرسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
