import Head from "next/head";
import Hero from "../components/hero/hero.jsx";
import FirstSection from "../components/firstSection/firstSection.jsx";
import SecondSection from "../components/secondSection/secondSection.jsx";
import Footer from "../components/footer/footer.jsx";

import styles from "../styles/index.module.css";
export default function InitialPage() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          href="/icons/favicon.svg"
        />
        <title>Clube do Livro</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.body}>
        <main>
          <Hero />
          <FirstSection />
          <SecondSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
