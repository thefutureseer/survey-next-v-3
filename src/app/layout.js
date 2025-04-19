import '@styles/survey.css';
import ClientRoot from '@components/ui/ClientRoot';

export const metadata = {
  title: 'Dan Surveys',
  description: 'A survey for you',
  icons: {
    icon: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
      // { rel: 'manifest', url: '/manifest.json' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  formatDetection: {
    telephone: false
  }
};

// Move the themeColor and viewport to their respective configurations

export const viewport = {
  width: 'device-width',
  initialScale: 1.0
};

export const themeColor = '#ffffff';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}