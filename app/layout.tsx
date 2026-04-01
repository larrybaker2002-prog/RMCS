import './globals.css';

export const metadata = {
  title: 'Rocky Mountain Consulting & Supply',
  description: '8A Certified Minority Woman and Disabled Veteran Owned Business',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}