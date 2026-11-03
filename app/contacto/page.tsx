"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes integrar la lógica para enviar el formulario (EmailJS, API, etc.)
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070e1c] text-slate-800 dark:text-stone-300 font-sans-clean transition-colors duration-500">
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
        :root:not(.dark) .text-metallic {
          background: linear-gradient(to bottom right, #334155, #475569, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        .border-metallic { border-color: rgba(214, 211, 209, 0.2); }
      `}} />

        
            {/* Header / Botón de Regresar */}
            <header className=" py-6 px-6 md:px-12 flex justify-center items-center border-b border-slate-200 dark:border-metallic">
                <Link href="/" className="cursor-pointer flex items-center">
                    <Image
                        src="/logo.webp"
                        alt="Logo Sarhè Consultores"
                        width={60}
                        height={60}
                        className="w-15 md:w-20 h-auto object-contain"
                        priority
                    />
                </Link>
            </header>

            {/* Contenido Principal */}
            <main className="container mx-auto px-6 md:px-12 py-5 max-w-5xl">
                <div className="text-center mb-6">
                    <h1 className="font-serif-elegant text-4xl md:text-5xl  mb-4 tracking-wide">
                        Inicie su Consulta
                    </h1>
                    <p className="text-slate-600 dark:text-stone-400 font-light max-w-xl mx-auto text-sm md:text-base">
                        Complete el formulario o comuníquese directamente con nuestros especialistas fiscales y legales. Le responderemos a la brevedad.
                    </p>
                    <div className="w-12 h-px bg-slate-400 dark:bg-stone-400 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    

                    {/* Formulario Moderno (Columna Derecha) */}
                    <div className="lg:col-span-7 bg-white dark:bg-[#0a1426] border border-slate-200 dark:border-metallic p-8 md:p-10 rounded-sm shadow-xl">
                        {submitted ? (
                            <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                                <CheckCircle2 size={64} className="text-emerald-500 animate-bounce" />
                                <h3 className="font-serif-elegant text-2xl text-slate-900 dark:text-white">Mensaje Recibido</h3>
                                <p className="text-slate-600 dark:text-stone-400 text-sm max-w-sm">
                                    Agradecemos su interés. Un especialista de Sarhè Consultores se pondrá en contacto con usted a la brevedad.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-xs tracking-widest uppercase border-b border-slate-800 dark:border-stone-300 pb-1 hover:opacity-70 transition-opacity"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Nombre Completo</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Lic. Roberto Gómez"
                                            className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Teléfono</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+52 55 0000 0000"
                                            className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Correo Electrónico</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="roberto@empresa.com"
                                        className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Área de Interés / Asunto</label>
                                    <select className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors">
                                        <option>Contabilidad Fiscal y Estratégica</option>
                                        <option>Auditoría Financiera</option>
                                        <option>Asesoría y Defensa Legal Corporativa</option>
                                        <option>Otro servicio corporativo</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Mensaje o Requerimiento</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Describa brevemente la situación o el servicio que requiere..."
                                        className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group flex items-center justify-center gap-3 bg-slate-900 dark:bg-stone-200 text-white dark:text-[#070e1c] py-4 rounded-sm text-sm tracking-widest uppercase hover:bg-slate-800 dark:hover:bg-white transition-all duration-300 font-medium shadow-lg"
                                >
                                    <span>Enviar Mensaje</span>
                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                    {/* Información de Contacto (Columna Izquierda) */}
                    <div className="lg:col-span-5 bg-white dark:bg-[#0a1426] border border-slate-200 dark:border-metallic p-8 rounded-sm shadow-xl">
                        <h2 className="font-serif-elegant text-2xl text-slate-900 dark:text-stone-200 mb-6 tracking-wide">
                            Datos de Contacto
                        </h2>
                        <p className="text-slate-600 dark:text-stone-400 text-sm font-light mb-8 leading-relaxed">
                            Atención personalizada para empresas y corporativos con cita previa en nuestras oficinas o vía digital.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-sm text-slate-700 dark:text-stone-300">
                                <div className="p-3 bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-700 rounded-full">
                                    <Phone size={18} className="text-slate-700 dark:text-stone-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Teléfono</p>
                                    <span className="font-medium">+52 (55) 4576 0897</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-4 text-sm text-slate-700 dark:text-stone-300">
                                <div className="p-3 bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-700 rounded-full">
                                    <Mail size={18} className="text-slate-700 dark:text-stone-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Correo Electrónico</p>
                                    <span className="font-medium"> sarheconsultoresmx@gmail.com</span>
                                </div>
                            </li>

                            {/* <li className="flex items-start gap-4 text-sm text-slate-700 dark:text-stone-300">
                                <div className="p-3 bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-700 rounded-full">
                                    <MapPin size={18} className="text-slate-700 dark:text-stone-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Ubicación</p>
                                    <span className="font-medium">Torre Corporativa, Piso 14<br />Ciudad de México, CDMX</span>
                                </div>
                            </li> */}
                        </ul>
                    </div>

                </div>
            </main>
        </div>
    );
}