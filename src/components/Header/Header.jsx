'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from '../../../public/assets/images/logo2.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-100 text-black w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image 
              src={logo} 
              alt="Amani Kids Logo" 
              width={90} 
              height={90}
              loading="lazy"
              className="hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Mobile Reservation + Menu Icon */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/reservation">
            <button className=" cursor-pointer bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white px-7 py-2.5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
               حجز الآن
            </button>
          </Link>
          <button className='cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={48} /> : <Menu size={48} />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex gap-4 px-6 py-2 flex-wrap justify-center">
          <Link href="/" className="text-black px-5 font-bold text-lg hover:text-yellow-700 hover:scale-105 transition-all">الرئيسية</Link>
          <Link href="/about" className="text-black px-5 font-bold text-lg hover:text-yellow-700 hover:scale-105 transition-all">معلومات عنا</Link>
          <Link href="/contact" className="text-black px-5 font-bold text-lg hover:text-yellow-700 hover:scale-105 transition-all">اتصل بنا</Link>
        </nav>

        {/* Reservation Button - Desktop */}
        <div className="hidden lg:flex flex-shrink-0">
          <Link href="/reservation">
            <button className="cursor-pointer bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white px-7 py-2.5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
               حجز الآن
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-yellow-50 px-6 py-6">
          <nav className="flex flex-col gap-3">
            <Link href="/" className="text-black font-bold text-lg hover:text-yellow-700">الرئيسية</Link>
            <Link href="/about" className="text-black font-bold text-lg hover:text-yellow-700">معلومات عنا</Link>

            <Link href="/contact" className="text-black font-bold text-lg hover:text-yellow-700">اتصل بنا</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
