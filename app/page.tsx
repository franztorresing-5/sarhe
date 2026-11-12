"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calculator, Scale, FileSearch, Mail, Phone, Menu, X, ArrowRight, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Manejar el navbar oscuro y detectar en qué sección estamos
  useEffect(() => {

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);


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
            {['servicios', 'nosotros'].map((section) => (
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
          <div className="absolute bottom-1/4 right-1/4 w-30rem h-30rem bg-slate-400 dark:bg-blue-900 rounded-full blur-[50px]"></div>
        </div>

        <div className="relative z-10 text-center pb-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-full flex justify-center pt-1 md:pt-10 mb-12">
            <Image
              src="/princi.webp"
              alt="Logotipo Sarhè Consultores"
              width={160}
              height={160}
              className="w-65 md:w-80 lg:w-28rem h-auto object-contain drop-shadow-2xl"
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
              <p className="text-slate-600 dark:text-stone-400 font-light text-sm leading-relaxed mb-6 grow">
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
              <p className="text-slate-600 dark:text-stone-400 font-light text-sm leading-relaxed mb-6 grow">
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
              <p className="text-slate-600 dark:text-stone-400 font-light text-sm leading-relaxed mb-6 grow">
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
      <section id="nosotros" className="py-24 bg-slate-50 dark:bg-[#070e1c] border-t border-slate-200 dark:border-metallic relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
            
            {/* Columna de Texto */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h3 className="font-serif-elegant text-3xl md:text-4xl mb-6 tracking-wide">
                Nuestra Firma
              </h3>
              <div className="w-12 h-px bg-slate-400 dark:bg-stone-400 mx-auto lg:mx-0 mb-8"></div>
              
              <h4 className="font-serif-elegant text-xl md:text-2xl text-slate-800 dark:text-stone-200 mb-8 leading-relaxed font-light italic">
                &ldquo;Brindamos soluciones estructuradas con rigor ético, transformando la complejidad contable y legal en ventajas competitivas para su negocio.&rdquo;
              </h4>
              
              <p className="text-slate-600 dark:text-stone-400 text-sm font-light leading-relaxed mb-8">
                En Sarhè Consultores, entendemos que cada corporativo enfrenta desafíos únicos. Nuestro equipo directivo cuenta con años de experiencia asesorando a empresas para garantizar su cumplimiento normativo, proteger su patrimonio y optimizar sus recursos financieros bajo el marco legal vigente.
              </p>
              
              <p className="text-slate-800 dark:text-stone-300 uppercase tracking-[0.2em] text-xs font-semibold">
                sarhe Consultores
              </p>
            </div>

            {/* Columna de Imagen */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-slate-200 dark:border-metallic shadow-2xl group">
                <Image
                  src="/oficinapresarhe.webp"
                  alt="Ilustración generada con inteligencia artificial de una oficina con el logotipo de Sarhè Consultores"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                {/* Capa sutil de gradiente oscuro por encima de la imagen */}
                <div className="absolute inset-0 bg-linear-to-t from-[#070e1c]/80 via-transparent to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>
              </div>
              <p className="mt-3 text-xs text-slate-500 dark:text-stone-500 text-center lg:text-right">
                Imagen ilustrativa generada con inteligencia artificial.
              </p>
            </div>

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
                <span className="font-serif-elegant text-3xl font-bold tracking-widest  ">SARHÈ</span>
                <p className="font-sans-clean text-[0.65rem] tracking-[0.3em]  mt-1 ">CONSULTORES</p>
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
                  <Phone size={16} className="mt-1 flex shrink-0" />
                  <span>+52 (55) 4576 0897</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">
                  <Mail size={16} className="mt-1 flex shrink-0" />
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
                <li><Link href="/aviso-de-privacidad" className="text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">Aviso de Privacidad</Link></li>
                <li><Link href="/terminos-y-condiciones" className="text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">Términos y Condiciones</Link></li>
                <li><Link href="/politica-de-cookies" className="text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">Política de Cookies</Link></li>
                <li><Link href="/politica-de-reembolsos" className="text-sm text-slate-600 dark:text-stone-400 font-light hover:text-slate-900 dark:hover:text-stone-200 transition-colors">Política de Reembolsos</Link></li>
              </ul>
            </div>
          </div>

          {/* Columna de Redes Sociales en el Footer */}
          <div>
            <h4 className="text-slate-800 dark:text-stone-200 items-center justify-center text-x tracking-[0.2em] uppercase mb-6 font-semibold">Síguenos</h4>
            <div className="flex space-x-4">
              
             { /*<span className="text-slate-300 dark:text-stone-700">/</span>*/}
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sarheconsultoresmx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-[#10B981] transition-colors pb-5 "
              >
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
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
      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/525545760897?text=Hola,%20me%20gustaría%20solicitar%20una%20consultoría%20fiscal."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-26 right-10 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Contáctanos por WhatsApp"
      >
        {/* Puedes usar un ícono de WhatsApp de lucide-react o SVG */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
};

export default App;