"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        // Coloca aquí tu Access Key gratuita que te llegó de Web3Forms
        formData.append("access_key", "bb7c0576-9f37-4fe8-84e2-c04669b89ffb");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setLoading(false);
            } else {
                setLoading(false);
                alert("Ocurrió un error al enviar el mensaje. Por favor intente de nuevo.");
            }
        } catch (error) {
            setLoading(false);
            alert("Error de conexión. Verifique su red e intente nuevamente.");
        }
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

            {/* Header / Logo de Regreso */}
            <header className="py-6 px-6 md:px-12 flex justify-center items-center border-b border-slate-200 dark:border-metallic">
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
                    <h1 className="font-serif-elegant text-4xl md:text-5xl mb-4 tracking-wide text-slate-900 dark:text-white">
                        Inicie su Consulta
                    </h1>
                    <p className="text-slate-600 dark:text-stone-400 font-light max-w-xl mx-auto text-sm md:text-base">
                        Complete el formulario o comuníquese directamente con nuestros especialistas fiscales y legales. Le responderemos a la brevedad.
                    </p>
                    <div className="w-12 h-px bg-slate-400 dark:bg-stone-400 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Formulario Moderno con Web3Forms */}
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
                                    className="mt-6 text-xs tracking-widest uppercase border-b border-slate-800 dark:border-stone-300 pb-1 hover:opacity-70 transition-opacity text-slate-800 dark:text-stone-300"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Campo oculto para personalizar el asunto en tu correo */}
                                <input type="hidden" name="subject" value="Nueva cotización o consulta desde Sarhè Consultores" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Nombre Completo</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            placeholder="Lic. Roberto Gómez"
                                            className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Teléfono (10 dígitos)</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            placeholder="5545760897"
                                            pattern="[0-9]{10}"
                                            maxLength={10}
                                            title="Por favor, ingrese un número telefónico válido de 10 dígitos."
                                            className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Correo Electrónico</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="roberto@empresa.com"
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                        title="Por favor, ingrese un correo electrónico válido (ejemplo: usuario@dominio.com)"
                                        className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Área de Interés / Asunto</label>
                                    <select
                                        name="service"
                                        defaultValue=""
                                        className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                    >
                                        <option value="" disabled className="text-gray-400">
                                            seleccione una opción
                                        </option>
                                        <option value="Contabilidad General y Financiera">Contabilidad General y Financiera</option>
                                        <option value="Asesoria Fiscal e Impuestos ">Asesoria Fiscal e Impuestos </option>
                                        <option value="Auditoria y Control Interno">Auditoria y Control Interno</option>
                                        <option value="Nominas y Segurdad Social">Nominas y Segurdad Social</option>
                                        <option value="Asesoria Legal y Corporativa">Asesoria Legal y Corporativa</option>
                                        <option value="Capacitacion y Formacion Empresarial">Capacitacion y Formacion Empresarial</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Mensaje o Requerimiento</label>
                                    <textarea
                                        required
                                        rows={4}
                                        name="message"
                                        placeholder="Describa brevemente la situación o el servicio que requiere..."
                                        className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full group flex items-center justify-center gap-3 bg-slate-900 dark:bg-stone-200 text-white dark:text-[#070e1c] py-4 rounded-sm text-sm tracking-widest uppercase hover:bg-slate-800 dark:hover:bg-white transition-all duration-300 font-medium shadow-lg disabled:opacity-50"
                                >
                                    <span>{loading ? "Enviando..." : "Enviar Mensaje"}</span>
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
                                    <span className="font-medium">sarheconsultoresmx@gmail.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </main>
        </div>
    );
}