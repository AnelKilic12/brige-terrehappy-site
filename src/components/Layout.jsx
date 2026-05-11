import Head from "next/head";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Layout({
  children,
  title = "Brige TerreHappy",
  description = "Thérapeute complémentaire à Carouge - accompagnement psychocorporel, magnétisme, réflexologie, lithothérapie et massage métamorphique.",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />

      <main>{children}</main>

      <Footer />
    </>
  );
}