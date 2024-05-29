
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href='/site.webmanifest' />
        <link rel="manifest" href='/manifest.json' />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="survey description for meta data" content={metadata.description} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />

        <title>{metadata.title}</title>

        <script>
          var meta = document.createElement('meta');
          meta.name = 'theme-color';
          meta.content = '#ffffff';
          document.getElementsByTagName('head')[0].appendChild(meta);
        </script>
      </Head>
      <body>{children}</body>
    </html>
  );
};