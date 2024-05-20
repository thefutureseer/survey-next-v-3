import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Survey Next App",
  description: "Surveys for company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <Head>
        <link rel="stylesheet" href={inter.cssHref} />
        <title>{metadata.title}</title>
        <meta name="survey description for spiders" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
