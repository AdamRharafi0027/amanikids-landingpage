import Header from "../components/Header/Header.jsx";
import './globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton.jsx";
import Footer from "../components/Footer/Footer.jsx";
// import favicon from "../../public/assets/images/favicon.ico"

export const metadata = {
  title: "Amani Kids – تطبيق تعليمي للأطفال ",
  description: "تطبيق ممتع لتعليم الأطفال الحروف والأرقام والحيوانات.",
  icons: {
    icon: '/assets/images/logo2 (1).png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* <link rel="icon" type="image/x-icon" href="../../public/assets/images/favicon.ico" sizes="any" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Cairo', sans-serif" }} className="rtl">
        <Header />
        {children}
        <BackToTopButton />
        <Footer/>
      </body>
    </html>
  );
}
