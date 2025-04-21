import '@styles/survey.css';
import ClientRoot from '@components/ui/ClientRoot';

export const metadata = {
  title: 'Dan Surveys',
  description: 'A survey for you',
  formatDetection: {
    telephone: false
  },
  manifest: '/manifest.json' // Add manifest here
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#007bff', // Add theme color here
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
};