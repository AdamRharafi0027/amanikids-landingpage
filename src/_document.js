import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet" />
      </Head>
      <body style={{ fontFamily: "'Cairo', sans-serif" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
