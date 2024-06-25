import Head from 'next/head';
import '../styles/survey.css';
import ClientRoot from './components/ClientRoot';

export const metadata = {
  title: 'Dan votes',
  description: 'A poll for you',
  icons: {
    icon: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
      { rel: 'manifest', url: '/manifest.json' }
    ],
    maskIcon: { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }
  },
  msapplicationTileColor: '#da532c',
  httpEquiv: {
    'X-UA-Compatible': 'IE=edge'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1.0
  },
  themeColor: '#ffffff',
  formatDetection: {
    telephone: 'no'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="msapplication-TileColor" content={metadata.msapplicationTileColor} />
        <meta httpEquiv={metadata.httpEquiv['X-UA-Compatible']} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        {metadata.icons.icon.map((icon) => (
          <link
            key={icon.url}
            rel={icon.rel}
            type={icon.type}
            sizes={icon.sizes}
            href={icon.url}
          />
        ))}
        <link rel="mask-icon" href={metadata.icons.maskIcon.url} color={metadata.icons.maskIcon.color} />
      </Head>
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
};