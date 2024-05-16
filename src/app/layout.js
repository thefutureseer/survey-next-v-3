import Head from "next/head";
import { Inter } from "next/font/google";

// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Survey Next App",
  description: "Surveys for company",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={inter.cssHref} />
        <title>{metadata.title}</title>
        <meta name="survey description for spiders" content={metadata.description} />
      </Head>
      <html className={inter.className}>{children}</html>
    </>
  );
}
