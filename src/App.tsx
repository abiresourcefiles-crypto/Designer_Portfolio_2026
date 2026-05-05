import Variation9 from './components/heroes/Home';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-black font-dm selection:bg-black selection:text-white flex flex-col">
      {/* Editorial Navigation */}
      <nav className="w-full h-20 px-10 flex justify-between items-center border-b border-black z-50 sticky top-0 bg-white">
        <div className="text-[12px] font-bold uppercase tracking-[0.15em]">ABHISHEK / Product Designer</div>
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.15em]">
          <a href="https://medium.com/@abhishekdesignspace" target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-opacity">Writings</a>
          <a href="#" className="hover:opacity-40 transition-opacity">Studio</a>
          <a href="#" className="hover:opacity-40 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col">
        <Variation9 />
      </main>
    </div>
  );
}
