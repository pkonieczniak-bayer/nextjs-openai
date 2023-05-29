import { Session } from '@/components/Session';
import { ThemeRegistry } from '@/components/Theme';
import { AppNavbar } from '@/components/AppNavbar';

export const metadata = {
  title: 'Open AI example app',
  description: 'Open AI example app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Session>
          <ThemeRegistry>
            <AppNavbar />
            {children}
          </ThemeRegistry>
        </Session>
      </body>
    </html>
  );
}
