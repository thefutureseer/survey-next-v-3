import Head from "next/head";
import '../styles/survey.css'; // Import the survey.css file

export const metadata = {
  title: "Dans survey software",
  description: "Surveys for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <Head>
        <link rel="stylesheet"  />
        <title>{metadata.title}</title>
        <meta name="survey description for meta data" content={metadata.description} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
