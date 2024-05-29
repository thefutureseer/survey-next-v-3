import '../styles/survey.css';
import ClientRoot from "./ClientRoot";

export const metadata = {
  title: "Dans survey software",
  description: "Surveys for you",
  icons: {
    icon: [
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "manifest", url: "/manifest.json" },
    ],
    maskIcon: { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
  },
  msapplicationTileColor: "#da532c",
  httpEquiv: {
    "X-UA-Compatible": "IE=edge"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const themeColor = "#ffffff";

export const formatDetection = {
  telephone: "no",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Dans survey software</title>
      </head>
      <body>
        <ClientRoot>
         {children}
        </ClientRoot>
      </body>
    </html>
  );
};