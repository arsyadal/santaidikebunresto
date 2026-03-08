import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  Wifi,
  Waves,
  Music,
  Coffee,
  ChevronRight,
  Menu as MenuIcon,
  X
} from 'lucide-react';

// Hero Image
import heroImg from './assets/hero.png';
import bistikImg from './assets/bistik.png';
import jjamppongImg from './assets/jjamppong.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isRestoOpen, setIsRestoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkRestoStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      // Assume open 10:00 - 22:00
      setIsRestoOpen(hour >= 10 && hour < 22);
    };

    window.addEventListener('scroll', handleScroll);
    checkRestoStatus();
    const interval = setInterval(checkRestoStatus, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const facilities = [
    { icon: <Wifi size={20} />, label: "Wi-Fi" },
    { icon: <Waves size={20} />, label: "Kolam Pancing" },
    { icon: <Music size={20} />, label: "Live Music" },
    { icon: <Coffee size={20} />, label: "Happy Hour" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="bg-black text-white px-2 py-0.5 rounded">S</span>
            SANTAI DI KEBUN
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
            <a href="#home" className="hover:text-black/60 transition-colors">HOME</a>
            <a href="#menu" className="hover:text-black/60 transition-colors">MENU</a>
            <a href="#facilities" className="hover:text-black/60 transition-colors">FASILITAS</a>
            <a href="https://wa.me/628123456789" className="bg-black text-white px-6 py-2 rounded-full hover:bg-zinc-800 transition-all">RESERVASI</a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 font-medium animate-in fade-in slide-in-from-top-4">
            <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
            <a href="#menu" onClick={() => setIsOpen(false)}>MENU</a>
            <a href="#facilities" onClick={() => setIsOpen(false)}>FASILITAS</a>
            <a href="https://wa.me/628123456789" className="text-center bg-black text-white py-3 rounded-xl">RESERVASI</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Santai di Kebun"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-6 animate-fade-in-up">
              <div className={`w-2 h-2 rounded-full ${isRestoOpen ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
              <span className="text-xs font-semibold uppercase tracking-widest">{isRestoOpen ? 'Sekarang Buka' : 'Tutup'} • 10:00 - 22:00</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] animate-fade-in-up delay-100">
              KULINERAN DI <br /> TENGAH KEBUN.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed animate-fade-in-up delay-200">
              Perpaduan rasa autentik dengan suasana alam yang menenangkan di Klari, Karawang. Destinasi rekreasi premium untuk Anda dan keluarga.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a href="#menu" className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-100 transition-all hover:translate-y-[-2px]">
                LIHAT MENU <ChevronRight size={18} />
              </a>
              <a href="https://maps.google.com" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                DAPATKAN RUTE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Brief Section */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold tracking-tighter mb-2">4.4 / 5</div>
            <div className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Google Maps Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tighter mb-2">100+</div>
            <div className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Menu Pilihan</div>
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tighter mb-2">Karawang</div>
            <div className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Lokasi Strategis</div>
          </div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section id="menu" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-none">SIGNATURE DISHES.</h2>
              <p className="text-zinc-500 text-lg">Menu andalan yang paling banyak dipesan oleh pelanggan kami.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Menu Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-100 aspect-[4/3]">
              <img src={bistikImg} alt="Bistik Ayam" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="text-white">
                  <span className="text-xs font-bold tracking-[0.2em] opacity-80 uppercase">Western Fusion</span>
                  <h3 className="text-3xl font-bold tracking-tight mt-1">Bistik Ayam</h3>
                  <p className="mt-2 text-white/70 max-w-sm">Daging ayam pilihan dengan saus bistik rahasia yang gurih dan lezat.</p>
                </div>
              </div>
            </div>

            {/* Menu Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-100 aspect-[4/3]">
              <img src={jjamppongImg} alt="Jjamppong" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="text-white">
                  <span className="text-xs font-bold tracking-[0.2em] opacity-80 uppercase">Korean Hot Soup</span>
                  <h3 className="text-3xl font-bold tracking-tight mt-1">Jjamppong</h3>
                  <p className="mt-2 text-white/70 max-w-sm">Sup mie seafood pedas dengan cita rasa autentik yang menghangatkan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-32 bg-black text-white rounded-[3rem] mx-6">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">FASILITAS <br /> LENGKAP.</h2>
              <p className="text-white/60 text-lg mb-12 max-w-md">Kami memberikan kenyamanan ekstra untuk setiap kunjungan Anda dengan berbagai fasilitas premium.</p>

              <div className="grid grid-cols-2 gap-6">
                {facilities.map((fact, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="bg-white/10 p-3 rounded-xl">{fact.icon}</div>
                    <span className="font-semibold">{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-zinc-800 overflow-hidden ring-1 ring-white/20">
                {/* Secondary hero or facility image could go here */}
                <img src={heroImg} alt="Facilities" className="w-full h-full object-cover opacity-50 contrast-125 grayscale" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl text-black shadow-2xl hidden md:block max-w-xs">
                <blockquote className="italic text-lg mb-4">"Tempatnya sangat asri dan makanannya enak-enak semua. Rekomendasi buat kumpul keluarga!"</blockquote>
                <div className="font-bold text-sm">— Ulasan Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 flex flex-col items-center text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">SIAP UNTUK SANTAI?</h2>
            <p className="text-xl text-zinc-500 mb-12">Jangan lewatkan momen seru Anda bersama kami. Pesan meja sekarang dan nikmati pengalaman kuliner yang berbeda.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="https://wa.me/628123456789" className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-3">
                <Phone size={20} /> HUBUNGI KAMI
              </a>
              <a href="https://instagram.com" className="bg-zinc-100 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-3">
                <Instagram size={20} /> FOLLOW US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold tracking-tighter mb-6">SANTAI DI KEBUN.</div>
              <p className="text-zinc-500 max-w-sm leading-relaxed mb-6">
                Restoran dengan konsep kembali ke alam yang berlokasi di Klari, Karawang. Menyajikan hidangan Nusantara dan Western berkualitas.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-black hover:text-white transition-all"><MapPin size={18} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">NAVIGASI</h4>
              <ul className="space-y-4 text-zinc-500 font-medium">
                <li><a href="#home" className="hover:text-black">Home</a></li>
                <li><a href="#menu" className="hover:text-black">Menu</a></li>
                <li><a href="#facilities" className="hover:text-black">Fasilitas</a></li>
                <li><a href="#" className="hover:text-black">Reservasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">KONTAK</h4>
              <ul className="space-y-4 text-zinc-500 font-medium whitespace-nowrap">
                <li className="flex items-center gap-3"><Clock size={16} /> 10:00 - 22:00</li>
                <li className="flex items-center gap-3"><Phone size={16} /> +62 812-3456-789</li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="shrink-0 mt-1" />
                  <span>Jl. Raya Klari, Karawang <br /> Jawa Barat 41234</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-zinc-400 text-sm font-medium flex justify-between items-center border-t border-zinc-100 pt-10">
            <div>© {new Date().getFullYear()} Santai di Kebun. All rights reserved.</div>
            <div>MADE WITH ❤️ IN KARAWANG</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/628123456789"
        target="_blank"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <Phone size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">CHAT ADMIN</span>
      </a>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s forwards ease-out;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}

export default App;
