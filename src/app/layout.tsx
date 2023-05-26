import { ThemeRegistry } from '@/components/Theme';

export const metadata = {
  title: 'Open AI example app',
  description: 'Open AI example app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
