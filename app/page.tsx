"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calculator, Scale, FileSearch, Mail, Phone, MapPin, Menu, X, ArrowRight, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Manejar el navbar oscuro y detectar en qué sección estamos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'servicios', 'nosotros', 'contacto'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al inicio para detectar la posición actual
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070e1c] text-slate-800 dark:text-stone-300 font-sans-clean transition-colors duration-500 selection:bg-stone-300 selection:text-slate-900 dark:selection:bg-stone-700 dark:selection:text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        .font-serif-elegant { font-family: 'Playfair Display', serif; }
        .font-sans-clean { font-family: 'Inter', sans-serif; }
        
        .text-metallic {
          background: linear-gradient(to bottom right, #ffffff, #d6d3d1, #a8a29e, #d6d3d1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        
        /* Variante metálica para modo claro (más oscura) */
        :root:not(.dark) .text-metallic {
          background: linear-gradient(to bottom right, #334155, #475569, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        
        .border-metallic {
          border-color: rgba(214, 211, 209, 0.2);
        }
        
        .card-hover-effect {
          transition: all 0.4s ease;
        }
        .card-hover-effect:hover {
          transform: translateY(-5px);
          border-color: rgba(148, 163, 184, 0.5);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }
        .dark .card-hover-effect:hover {
          border-color: rgba(214, 211, 209, 0.5);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
          background-color: rgba(13, 24, 43, 0.8);
        }
      `}} />

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-[#070e1c]/95 backdrop-blur-md py-4 border-b border-slate-200 dark:border-metallic shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="cursor-pointer flex flex-col items-center" onClick={() => scrollToSection('home')}>
            <Image
              src="/logo.webp"
              alt="Logo Sarhè Consultores"
              width={60}
              height={60}
              className="w-15 md:w-20 h-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['servicios', 'nosotros', 'contacto'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm tracking-wider uppercase transition-all duration-300 border-b-2 pb-1 ${activeSection === section
                  ? 'border-slate-800 text-slate-900 dark:border-stone-400 dark:text-white'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-stone-400 dark:hover:text-white'
                  }`}
              >
                {section}
              </button>
            ))}

            <Link href="/contacto" className="group flex items-center gap-3 bg-transparent border border-slate-800 text-slate-800 dark:border-stone-300 dark:text-stone-200 px-8 py-4 rounded-sm text-sm tracking-widest uppercase hover:bg-slate-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-[#070e1c] transition-all duration-500">
              Agendar Cita
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-800 dark:text-stone-300 hover:text-slate-600 dark:hover:text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#070e1c] border-b border-slate-200 dark:border-metallic py-6 px-6 flex flex-col space-y-6 shadow-2xl">
            {['servicios', 'nosotros', 'contacto'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-left text-sm tracking-wider uppercase ${activeSection === section
                  ? 'text-slate-900 font-bold dark:text-white'
                  : 'text-slate-600 dark:text-stone-400'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-300 dark:bg-stone-500 rounded-full blur-[50px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-slate-400 dark:bg-blue-900 rounded-full blur-[50px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-full flex justify-center pt-1 md:pt-10 mb-12">
            <Image
              src="/princi.webp"
              alt="Logotipo Sarhè Consultores"
              width={160}
              height={160}
              className="w-65 md:w-80 lg:w-[28rem] h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <p className="text-slate-600 dark:text-stone-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Excelencia, precisión y ética en soluciones contables, fiscales y legales corporativas para el crecimiento sostenible de su empresa.
          </p>

          <Link href="/contacto" className="group flex items-center gap-3 bg-transparent border border-slate-800 text-slate-800 dark:border-stone-300 dark:text-stone-200 px-8 py-4 rounded-sm text-sm tracking-widest uppercase hover:bg-slate-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-[#070e1c] transition-all duration-500">
            Consulta Inicial
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-100 dark:bg-[#0a1426] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-30">
            <h3 className="font-serif-elegant text-3xl md:text-4xl  mb-10 tracking-wide">Áreas de Especialidad</h3>
            <div className="w-12 h-px bg-slate-400 dark:bg-stone-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tarjeta 1 */}
            <div className="bg-white dark:bg-[#070e1c] border border-slate-200 dark:border-metallic p-10 rounded-sm card-hover-effect flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Calculator size={28} className="text-slate-700 dark:text-stone-300" />
              </div>
              <h4 className="font-serif-elegant text-xl text-slate-900 dark:text-stone-200 tracking-wider mb-4 uppercase">Contabilidad Fiscal</h4>
              <p className="text-slate-600 dark:text-stone-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                Estrategias fiscales precisas, cumplimiento normativo y optimización de recursos para garantizar la salud financiera y evitar contingencias legales.
              </p>
              <button className="text-xs tracking-widest text-slate-500 dark:text-stone-300 border-b border-slate-400 dark:border-stone-300 pb-1 hover:text-slate-900 dark:hover:text-white hover:border-slate-900 dark:hover:border-white transition-colors">
                LEER MÁS
              </button>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white dark:bg-[#070e1c] border border-slate-200 dark:border-metallic p-10 rounded-sm card-hover-effect flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FileSearch size={28} className="text-slate-700 dark:text-stone-300" />
              </div>
              <h4 className="font-serif-elegant text-xl text-slate-900 dark:text-stone-200 tracking-wider mb-4 uppercase">Auditoría</h4>
              <p className="text-slate-600 dark:text-stone-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                Revisiones exhaustivas e independientes que brindan certeza, transparencia y confianza sobre los estados financieros de su organización.
              </p>
              <button className="text-xs tracking-widest text-slate-500 dark:text-stone-300 border-b border-slate-400 dark:border-stone-300 pb-1 hover:text-slate-900 dark:hover:text-white hover:border-slate-900 dark:hover:border-white transition-colors">
                LEER MÁS
              </button>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white dark:bg-[#070e1c] border border-slate-200 dark:border-metallic p-10 rounded-sm card-hover-effect flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Scale size={28} className="text-slate-700 dark:text-stone-300" />
              </div>
              <h4 className="font-serif-elegant text-xl text-slate-900 dark:text-stone-200 tracking-wider mb-4 uppercase">Asesoría Legal</h4>
              <p className="text-slate-600 dark:text-stone-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                Acompañamiento jurídico corporativo y defensa especializada para blindar las operaciones de su empresa ante cualquier escenario normativo.
              </p>
              <button className="text-xs tracking-widest text-slate-500 dark:text-stone-300 border-b border-slate-400 dark:border-stone-300 pb-1 hover:text-slate-900 dark:hover:text-white hover:border-slate-900 dark:hover:border-white transition-colors">
                LEER MÁS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info / About Section */}
      <section id="nosotros" className="py-24 bg-slate-50 dark:bg-[#070e1c] border-t border-slate-200 dark:border-metallic relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif-elegant text-2xl md:text-3xl text-slate-800 dark:text-stone-200 mb-8 leading-relaxed font-light">
              "Brindamos soluciones estructuradas con rigor ético, transformando la complejidad contable y legal en ventajas competitivas para su negocio."
            </h3>
            <p className="text-slate-500 dark:text-stone-400 uppercase tracking-[0.2em] text-sm">El Equipo de Dirección</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contacto" className="bg-slate-100 dark:bg-[#03060c] pt-20 pb-10 border-t border-slate-200 dark:border-metallic">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <span className="font-serif-elegant text-3xl font-bold tracking-widest text-metallic">SARHÈ</span>
                <p className="font-sans-clean text-[0.65rem] tracking-[0.3em] text-slate-500 dark:text-stone-400 mt-1">CONSULTORES</p>
              </div>
              <p className="text-slate-600 dark:text-stone-500 text-sm font-light leading-relaxed max-w-sm">
                Despacho especializado en servicios integrales de contabilidad, auditoría y consultoría legal corporativa.
              </p>
            </div>

            {/* Contact Links */}
            <div>
              <h4 className="text-slate-800 dark:text-stone-200 text-xs tracking-[0.2em] uppercase mb-6 font-semibold">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>+52 (55) 4576 0897</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span>sarheconsultoresmx@gmail.com</span>
                </li>
                {/* <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Torre Corporativa, Piso 14<br />Ciudad de México, CDMX</span>
                </li> */}
              </ul>
            </div>

            {/* Navigation / Quick Links */}
            <div>
              <h4 className="text-slate-800 dark:text-stone-200 text-xs tracking-[0.2em] uppercase mb-6 font-semibold">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">Aviso de Privacidad</a></li>
                <li><a href="#" className="text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">Bolsa de Trabajo</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-300 dark:border-stone-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-stone-600 text-xs tracking-wider">
              &copy; 2026 SARHÈ Consultores. Todos los derechos reservados por FYTRcode.
            </p>

            <button
              onClick={() => scrollToSection('home')}
              className="w-10 h-10 rounded-full border border-slate-400 dark:border-stone-800 flex items-center justify-center text-slate-500 dark:text-stone-500 hover:text-slate-800 hover:border-slate-800 dark:hover:text-stone-300 dark:hover:border-stone-500 transition-all"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;