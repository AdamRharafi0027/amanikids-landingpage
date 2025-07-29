"use client";
import { useState } from "react";
import { User, Mail, Baby, Calendar } from "lucide-react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    childName: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      "https://v1.nocodeapi.com/black_side/google_sheets/UWyAPWRDnpfusoRy?tabId=amanikidsreservation";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          [form.name, form.childName, form.age, form.email],
        ]),
      });

      if (response.ok) {
        alert("✅ تم الحجز بنجاح! سنتواصل معك قريبًا.");
        setForm({
          name: "",
          childName: "",
          age: "",
          email: "",
        });
      } else {
        alert("❌ حدث خطأ أثناء الإرسال.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ فشل الاتصال بجوجل شيت.");
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xl bg-white p-10 rounded-3xl shadow-2xl border border-blue-100">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
          📝 احجز الآن لطفلك
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            icon={<User className="text-blue-500" size={20} />}
            type="text"
            name="name"
            placeholder="اسم ولي الأمر"
            value={form.name}
            onChange={handleChange}
            required
          />
          <InputField
  icon={<Baby className="text-pink-500" size={20} />}
  type="text"
  name="childName"
  placeholder="اسم الطفل"
  value={form.childName}
  onChange={handleChange}
  required
/>
          <InputField
            icon={<Calendar className="text-yellow-500" size={20} />}
            type="number"
            name="age"
            placeholder="عمر الطفل"
            value={form.age}
            onChange={handleChange}
            required
          />
          <InputField
            icon={<Mail className="text-green-500" size={20} />}
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-lg font-bold py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            📩 حجز الآن
          </button>
        </form>
      </div>
    </section>
  );
}

function InputField({ icon, ...props }) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}
