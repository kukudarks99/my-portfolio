import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
