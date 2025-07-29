import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import logo from "../../../public/assets/images/logo2.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
        <div className="bg-yellow-50 py-10 px-10 max-w-full -mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Logo & About */}
          <div className="flex flex-col items-start gap-3">
            <Image
              src={logo}
              alt="Amani Kids"
              width={80}
              height={80}
              loading="lazy"
            />
            <p className="text-sm leading-relaxed">
              أماني كيدز هو تطبيق تعليمي ممتع وآمن للأطفال من سن 2 إلى 8 سنوات،
              يساعدهم على التعلم من خلال اللعب والقصص والفيديوهات.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-yellow-700 mb-4">روابط مهمة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-rose-600">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-600">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-600">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-yellow-700 mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-black-600" />
                info@amanikids.com
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-black-600" />
                /AmaniKids
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-black-600" />
                @amani.kids
              </li>
              <li className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-black-600" />
                Amani Kids Channel
              </li>
            </ul>
          </div>

          {/* Newsletter or Note */}
          <div>
            <h4 className="font-bold text-yellow-700 mb-4">انضم لنا</h4>
            <p className="text-sm mb-4">
              اشترك في النشرة البريدية للحصول على محتوى جديد وتعليمي لطفلك.
            </p>
            
          </div>
        {/* Copyright */}
        <div className="text-center mt-5 text-sm text-gray-600">
          © {new Date().getFullYear()} أماني كيدز - جميع الحقوق محفوظة
        </div>
        </div>

    </>
  )
}

export default Footer