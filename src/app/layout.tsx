import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { EducationProvider } from '../context/EducationContext';

export const metadata: Metadata = {
  title: 'SPACE GRAVEYARD — The Machines We Left Behind',
  description: 'Every machine left a footprint. Every footprint tells a story. Storytelling about NASA discarded hardware on the Moon and Mars for the 2026 NASA Space Apps Challenge.',
  keywords: ['NASA', 'Space Apps Challenge', 'Moon', 'Mars', 'Rover', 'Lander', 'Opportunity', 'Apollo 11', 'InSight', 'Discovered Hardware'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#05070d] text-slate-100 min-h-screen flex flex-col font-sans hud-grid star-field">
        <EducationProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </EducationProvider>
      </body>
    </html>
  );
}
