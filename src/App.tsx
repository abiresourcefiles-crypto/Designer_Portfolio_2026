import { useEffect } from 'react';
import Variation9 from './components/heroes/Home';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black font-dm selection:bg-black selection:text-white flex flex-col">
      {/* Editorial Navigation */}
      <nav className="w-full h-20 px-10 flex justify-between items-center border-b border-black z-50 sticky top-0 bg-white">
        <div className="text-[12px] font-bold uppercase tracking-[0.15em]">ABHISHEK / Product Designer</div>
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.15em]">
          <a href="https://medium.com/@abhishekdesignspace" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-2 transition-all">Writings</a>
          <a href="#" className="hover:underline underline-offset-4 decoration-2 transition-all">Studio</a>
          <a href="#" className="hover:underline underline-offset-4 decoration-2 transition-all">Contact</a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col">
        <Variation9 />
      </main>
      <Analytics />
    </div>
  );
}
