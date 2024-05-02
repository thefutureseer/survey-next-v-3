import Head from "next/head";
import { Inter } from "next/font/google";
import "../styles/globals.css"; // Assuming your global styles are in a file named "globals.css"

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
        <meta name="description" content={metadata.description} />
      </Head>
      <div className={inter.className}>{children}</div>
    </>
  );
}
