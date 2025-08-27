import { Footer, Navbar } from 'components/shared';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative'>
      <Navbar />
      <main className=''>{children}</main>
      <Footer />
    </div>
  );
}